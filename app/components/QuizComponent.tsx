'use client';

import { useState, useEffect } from 'react';
import { quizQuestions, calculateResult, QuizResponse, QuizResult } from '../utils/quizLogic';
import ResultsDisplay from './ResultsDisplay';
import { useTranslations } from 'next-intl';

export default function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const t = useTranslations('quiz.ui');
  const tQ = useTranslations('quiz.questions');

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  // 安全检查：确保question存在
  if (!question) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-4">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-800 p-6 md:p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">{t('loading')}</p>
        </div>
      </div>
    );
  }

  const handleOptionSelect = (optionIndex: number) => {
    // 防止快速点击导致的问题
    if (isProcessing) return;

    setSelectedOption(optionIndex);

    // 如果是最后一题，不自动提交，需要用户点击提交按钮
    if (currentQuestion === quizQuestions.length - 1) {
      return;
    }

    // Auto-advance after a short delay for non-last questions
    setIsProcessing(true);
    setTimeout(() => {
      handleNext(optionIndex);
    }, 300);
  };

  const handleNext = (optionIndex?: number) => {
    // 防止重复处理
    if (isProcessing) return;

    // 获取当前问题的数据（使用闭包中的currentQuestion）
    const currentQData = quizQuestions[currentQuestion];
    if (!currentQData) {
      setIsProcessing(false);
      return;
    }

    const selectedIdx = optionIndex !== undefined ? optionIndex : selectedOption;
    if (selectedIdx === null) {
      setIsProcessing(false);
      return;
    }

    // Save response
    const newResponses = [
      ...responses,
      {
        questionId: currentQData.id,
        selectedOption: selectedIdx
      }
    ];
    setResponses(newResponses);
    setSelectedOption(null);

    // Check if this was the last question
    if (currentQuestion === quizQuestions.length - 1) {
      // Calculate result
      setIsCalculating(true);
      setIsProcessing(false);

      // Use a slightly longer timeout for "realistic" calculation feel
      // and wrap in try-catch to ensure we clear the loading state
      setTimeout(() => {
        try {
          const quizResult = calculateResult(newResponses);
          if (!quizResult) {
            throw new Error('Failed to calculate result');
          }
          setResult(quizResult);
        } catch (error) {
          console.error('Quiz result calculation error:', error);
          alert('Sorry, there was an error calculating your result. Please try again.');
        } finally {
          setIsCalculating(false);
        }
      }, 1500);
    } else {
      // Move to next question
      setCurrentQuestion(prev => {
        const nextQ = prev + 1;
        // 确保下一题存在
        if (nextQ < quizQuestions.length) {
          return nextQ;
        }
        return prev;
      });
      // 延迟重置处理状态，确保状态更新完成
      setTimeout(() => {
        setIsProcessing(false);
      }, 100);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0 && !isProcessing) {
      setCurrentQuestion(prev => prev - 1);
      // Remove last response
      setResponses(prev => prev.slice(0, -1));
      // Set selected option to previous answer
      const previousResponse = responses[currentQuestion - 1];
      if (previousResponse) {
        setSelectedOption(previousResponse.selectedOption);
      } else {
        setSelectedOption(null);
      }
      setIsProcessing(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setResponses([]);
    setResult(null);
    setSelectedOption(null);
  };

  // Show result screen
  if (result) {
    return <ResultsDisplay result={result} onRestart={handleRestart} />;
  }

  // Show loading screen
  if (isCalculating) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-zinc-800 p-12 text-center">
          <div className="inline-block">
            <div className="w-20 h-20 border-4 border-[#9D5AC2] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('calculating')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('analyzing')}
          </p>
        </div>
      </div>
    );
  }

  // Show quiz questions
  return (
    <div className="max-w-3xl mx-auto px-4 py-4">
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {t('questionOf', { current: currentQuestion + 1, total: quizQuestions.length })}
          </span>
          <span className="text-sm font-semibold text-[#9D5AC2]">
            {t('percentComplete', { percent: Math.round(progress) })}
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FF8FCC] via-[#9D5AC2] to-[#3B88C3] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-800 p-6 md:p-8 mb-4">
        <div className="mb-4">
          <div className="inline-block bg-gradient-to-r from-[#FF8FCC] to-[#9D5AC2] text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
            {question.category.toUpperCase()}
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4">
            {tQ(`q${question.id}.text`)}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              disabled={isProcessing}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${isProcessing
                ? 'opacity-50 cursor-not-allowed'
                : ''
                } ${selectedOption === index
                  ? 'border-[#9D5AC2] bg-gradient-to-r from-[#9D5AC2]/10 to-[#FF8FCC]/10 shadow-lg scale-[1.02]'
                  : 'border-gray-200 dark:border-zinc-700 hover:border-[#9D5AC2]/50 hover:bg-gray-50 dark:hover:bg-zinc-800'
                }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedOption === index
                    ? 'border-[#9D5AC2] bg-[#9D5AC2]'
                    : 'border-gray-300 dark:border-zinc-600'
                    }`}
                >
                  {selectedOption === index && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-base font-medium text-gray-900 dark:text-white">
                  {tQ(`q${question.id}.options.${index}`)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-6 py-3 rounded-full font-bold text-base transition-all ${currentQuestion === 0
            ? 'bg-gray-200 dark:bg-zinc-800 text-gray-400 dark:text-zinc-600 cursor-not-allowed'
            : 'bg-white dark:bg-zinc-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-zinc-700 hover:border-[#9D5AC2] hover:scale-105'
            }`}
        >
          {t('previous')}
        </button>

        {currentQuestion === quizQuestions.length - 1 && selectedOption !== null && (
          <button
            onClick={() => handleNext(selectedOption)}
            disabled={isProcessing}
            className={`px-8 py-3 rounded-full font-bold text-base bg-gradient-to-r from-[#9D5AC2] to-[#FF8FCC] text-white hover:shadow-lg hover:scale-105 transition-all ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {t('submit')}
          </button>
        )}
      </div>

      {/* Helper Text */}
      <p className="text-center text-gray-500 dark:text-gray-400 mt-4 text-sm">
        {currentQuestion === quizQuestions.length - 1
          ? t('submitHelper')
          : t('autoContinueHelper')}
      </p>
    </div>
  );
}

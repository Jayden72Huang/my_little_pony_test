'use client';

import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import { QuizResult } from '../utils/quizLogic';
import { characters } from '../utils/characterData';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

interface ResultsDisplayProps {
  result: QuizResult;
  onRestart: () => void;
}

export default function ResultsDisplay({ result, onRestart }: ResultsDisplayProps) {
  const resultRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const t = useTranslations('results');
  const tData = useTranslations('characterData');
  const locale = useLocale();

  const handleExport = async () => {
    if (!resultRef.current) return;

    setIsExporting(true);
    try {
      const dataUrl = await toPng(resultRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });
      saveAs(dataUrl, `my-little-pony-result-${result.character.slug}.png`);
    } catch (error) {
      console.error('Failed to export image:', error);
      alert('Failed to export image. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const name = tData(`${result.character.slug}.name`);

  const handleShare = async () => {
    const shareText = t('shareText', { name, emoji: result.character.emoji });
    const shareUrl = window.location.origin;

    if (navigator.share) {
      try {
        await navigator.share({
          title: t('verified'),
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      alert(t('copied'));
    }
  };

  const harmonySquad = (result.character.harmonySquad || [])
    .map(slug => characters.find(c => c.slug === slug))
    .filter(Boolean);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Result Report Container */}
      <div
        ref={resultRef}
        className="bg-[#FAFAFA] dark:bg-zinc-950 rounded-[2rem] shadow-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden mb-12"
      >
        {/* Top Header Section */}
        <div className="relative pt-12 pb-16 px-8 text-center bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-4 py-1.5 rounded-full text-sm font-bold border border-green-100 dark:border-green-800/50">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {t('verified')}
          </div>

          <div className="mt-8 mb-6">
            <span className="text-sm font-black uppercase tracking-widest text-gray-400 dark:text-zinc-500 mb-2 block">{t('harmonyElement')}</span>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 dark:text-zinc-400">
              {tData(`${result.character.slug}.title`)}
            </h2>
          </div>

          <div className="relative inline-block mb-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 dark:text-white uppercase italic">
              #{name.replace(' ', '')}
            </h1>
          </div>

          <div className="flex flex-wrap justify-center items-end gap-4 md:gap-8 mt-8">
            {(result.allResults || []).map((res, idx) => (
              <div key={res.character.id} className="flex flex-col items-center group">
                <div className="relative mb-2">
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 overflow-hidden bg-gray-50 dark:bg-zinc-800 transition-transform group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      borderColor: idx === 0 ? result.character.color : '#E5E7EB',
                    }}
                  >
                    <Image
                      src={res.character.imageUrl}
                      alt={tData(`${res.character.slug}.name`)}
                      width={64}
                      height={64}
                      className="object-cover rounded-full"
                    />
                  </div>
                  {idx === 0 && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full p-1 shadow-md">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  className="text-xs font-black px-2 py-0.5 rounded-full mb-1"
                  style={{
                    backgroundColor: idx === 0 ? `${result.character.color}20` : '#F3F4F6',
                    color: idx === 0 ? result.character.color : '#6B7280'
                  }}
                >
                  {Math.round(res.percentage)}%
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                  {tData(`${res.character.slug}.name`).split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Body Section */}
        <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Description & Quote */}
          <div className="lg:col-span-7 space-y-12">
            <div className="relative">
              <span className="absolute -top-4 -left-4 text-8xl text-gray-100 dark:text-zinc-800 font-serif leading-none select-none opacity-50">"</span>
              <p className="relative z-10 text-2xl md:text-3xl font-bold leading-tight text-gray-800 dark:text-zinc-200 italic pl-4 border-l-4" style={{ borderColor: result.character.color }}>
                {result.character.quote}
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-gray-900 dark:text-white">{t('analysisReport')}</h3>
              <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed">
                {tData(`${result.character.slug}.description`)}
              </p>
            </div>

            {/* Superpowers */}
            <div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: result.character.color }}>⚡</span>
                {t('superpowers')}
              </h3>
              <div className="space-y-4">
                {result.character.superpowers?.map((power, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full transition-all group-hover:w-4" style={{ backgroundColor: result.character.color }}></div>
                    <span className="text-lg font-bold text-gray-700 dark:text-zinc-300">{power}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Harmony Squad */}
            <div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-gray-900 dark:text-white">{t('harmonySquad')}</h3>
              <div className="flex flex-wrap gap-4">
                {harmonySquad.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white dark:bg-zinc-900 px-4 py-2 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
                    <span className="text-2xl">{member?.emoji}</span>
                    <span className="font-bold text-gray-900 dark:text-white">{tData(`${member?.slug}.name`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Strengths & Soul Sisters */}
          <div className="lg:col-span-5 space-y-12">
            {/* Key Strengths */}
            <div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: result.character.secondaryColor }}>🎁</span>
                {t('keyStrengths')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {result.character.strengths.map((strength, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 rounded-full text-sm font-black border-2 transition-all hover:scale-105"
                    style={{
                      backgroundColor: `${result.character.color}10`,
                      borderColor: `${result.character.color}30`,
                      color: result.character.color
                    }}
                  >
                    {strength}
                  </div>
                ))}
              </div>
            </div>

            {/* Soul Sisters & Brothers */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800">
              <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-gray-900 dark:text-white">{t('soulSisters')}</h3>
              <div className="space-y-6">
                {result.character.soulSisters?.map((sister, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div>
                      <p className="font-black text-gray-900 dark:text-white">{sister.name}</p>
                      <p className="text-sm font-bold text-gray-400">{sister.origin}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-700 flex items-center justify-center text-xl shadow-sm">
                      {idx === 0 ? '🏆' : '✨'}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-gray-400 font-medium">
                {t('soulSistersDesc')}
              </p>
            </div>

            {/* Secondary Match */}
            <div className="p-6 bg-zinc-900 text-white rounded-[2rem] shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{result.secondPlace.character.emoji}</span>
                <span className="font-black uppercase tracking-widest text-xs opacity-50 text-zinc-400">{t('alternativePath')}</span>
              </div>
              <h4 className="text-lg font-bold mb-2">{t('alsoTraits', { name: tData(`${result.secondPlace.character.slug}.name`) })}</h4>
              <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                {t('secondaryMatch', { percent: Math.round(result.secondPlace.percentage), title: tData(`${result.secondPlace.character.slug}.title`) })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <button
          onClick={handleExport}
          disabled={isExporting}
          className="flex items-center justify-center gap-2 px-8 py-5 rounded-3xl font-black text-lg bg-black text-white dark:bg-white dark:text-black hover:scale-[1.02] transition-all disabled:opacity-50"
        >
          {isExporting ? t('preparing') : t('downloadReport')}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 px-8 py-5 rounded-3xl font-black text-lg border-4 border-gray-100 dark:border-zinc-800 text-gray-900 dark:text-white hover:border-zinc-200 dark:hover:border-zinc-700 transition-all"
        >
          {t('share')}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
        </button>

        <button
          onClick={() => {
            onRestart();
            // 滚动到quiz模块
            setTimeout(() => {
              const quizSection = document.getElementById('quiz');
              if (quizSection) {
                quizSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className="flex items-center justify-center gap-2 px-8 py-5 rounded-3xl font-black text-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-white border-4 border-gray-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all"
        >
          {t('retake')}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        </button>
      </div>

      {/* Learn More Card */}
      <div className="relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-zinc-900 to-black p-1">
        <div className="relative bg-white dark:bg-zinc-900 rounded-[2.4rem] p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-100 dark:bg-zinc-800 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 uppercase italic">
              {t('masterTitle')}
            </h3>
            <p className="text-lg text-gray-500 dark:text-zinc-400 mb-8 max-w-2xl mx-auto font-medium">
              {t('masterDesc', { name })}
            </p>
            <Link
              href={`/${locale}/characters/${result.character.slug}`}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-xl text-white bg-black dark:bg-white dark:text-black hover:scale-105 transition-all shadow-2xl"
            >
              {t('exploreProfile')}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

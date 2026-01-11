'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Breadcrumb from './Breadcrumb';
import ArticleMeta from './ArticleMeta';
import SocialShare from './SocialShare';
import ArticleNavigation from './ArticleNavigation';
import RelatedTests from './RelatedTests';

interface GuideLayoutProps {
  // Basic info
  title: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  breadcrumbLabel: string;
  children: React.ReactNode;

  // Article metadata
  publishDate?: string;
  readingTime?: string;
  category?: string;
  categoryColor?: string;
  author?: string;

  // Navigation
  prevArticle?: { title: string; href: string };
  nextArticle?: { title: string; href: string };

  // Related Content
  relatedTests?: Array<{
    href: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  }>;
  relatedGuides?: Array<{
    title: string;
    description: string;
    href: string;
    color: string;
  }>;
}

export default function GuideLayout({
  title,
  description,
  heroImage,
  heroImageAlt,
  breadcrumbLabel,
  children,
  publishDate,
  readingTime,
  category,
  categoryColor,
  author,
  prevArticle,
  nextArticle,
  relatedTests = [],
  relatedGuides = []
}: GuideLayoutProps) {
  const t = useTranslations('guidesPage');
  const locale = useLocale();

  // For SocialShare
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#FFF8F3] to-white dark:from-black dark:via-zinc-900 dark:to-black">
      {/* Hero Section */}
      <div className="h-[500px] relative overflow-hidden">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16 max-w-4xl">
            {category && (
              <span
                className="inline-block px-4 py-1 rounded-full text-white text-sm font-bold mb-4 shadow-lg"
                style={{ backgroundColor: categoryColor || '#9D5AC2' }}
              >
                {category}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl -mt-8 relative z-10">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-zinc-800">
          <Breadcrumb customItems={[
            { label: t('breadcrumb'), href: `/${locale}/guides` },
            { label: breadcrumbLabel, href: '#' }
          ]} />

          <hr className="my-8 border-gray-100 dark:border-zinc-800" />

          {/* Meta & Share */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            {publishDate && readingTime && (
              <ArticleMeta
                publishDate={publishDate}
                readingTime={readingTime}
                category={category || 'Article'}
                categoryColor={categoryColor}
                author={author}
              />
            )}
            <SocialShare url={currentUrl} title={title} />
          </div>

          {/* Main Article Content */}
          <article className="prose prose-lg prose-purple dark:prose-invert max-w-none 
            prose-headings:font-black prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
            prose-strong:text-gray-900 dark:prose-strong:text-white
            prose-a:text-[#9D5AC2] prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-3xl prose-img:shadow-xl">
            {children}
          </article>

          {/* Article Navigation */}
          <ArticleNavigation prevArticle={prevArticle} nextArticle={nextArticle} />
        </div>
      </div>

      {/* Related Tests Section */}
      {relatedTests.length > 0 && (
        <RelatedTests tests={relatedTests} title="Recommended Personality Tests" />
      )}

      {/* Related Guides Section */}
      {relatedGuides.length > 0 && (
        <section className="py-20 bg-white dark:bg-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-black mb-12 text-center text-gray-900 dark:text-white">Related Guides & Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedGuides.map((guide, index) => (
                <Link key={index} href={`/${locale}${guide.href}`} className="group block h-full">
                  <div className="h-full bg-gray-50 dark:bg-zinc-900 rounded-3xl p-8 border-2 border-transparent hover:border-[#9D5AC2]/50 transition-all hover:shadow-xl flex flex-col">
                    <h4 className="font-bold text-xl mb-4 group-hover:text-[#9D5AC2] transition-colors line-clamp-2">
                      {guide.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {guide.description}
                    </p>
                    <div className="flex items-center gap-2 font-bold text-sm text-[#9D5AC2]">
                      <span>Read More</span>
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-24 bg-gradient-to-r from-[#9D5AC2] to-[#3B88C3]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ready to discover your true pony personality?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join over 500,000 fans and take our most accurate, MBTI-powered personality test today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href={`/${locale}#quiz`}
              className="bg-white text-[#9D5AC2] px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all hover:shadow-white/20"
            >
              Start Personality Test →
            </Link>
            <Link
              href={`/${locale}/characters`}
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white/10 transition-all"
            >
              Explore Characters
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from 'react';

interface ArticleMetaProps {
    publishDate: string;
    readingTime: string;
    category: string;
    categoryColor?: string;
    author?: string;
}

export default function ArticleMeta({
    publishDate,
    readingTime,
    category,
    categoryColor = "#9D5AC2",
    author = "MLP Test Team"
}: ArticleMetaProps) {
    return (
        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
            <span
                className="px-3 py-1 rounded-full text-white font-semibold"
                style={{ backgroundColor: categoryColor }}
            >
                {category}
            </span>
            <div className="flex items-center gap-1">
                <span>📅</span>
                <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-1">
                <span>⏱️</span>
                <span>{readingTime}</span>
            </div>
            <div className="flex items-center gap-1">
                <span>✍️</span>
                <span>{author}</span>
            </div>
        </div>
    );
}

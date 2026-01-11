'use client';

import React, { useState } from 'react';

interface SocialShareProps {
    url: string;
    title: string;
    description?: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
    const [copied, setCopied] = useState(false);

    const shareLinks = [
        {
            name: 'Twitter',
            icon: '🐦',
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            color: '#1DA1F2'
        },
        {
            name: 'Facebook',
            icon: '📘',
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            color: '#1877F2'
        },
        {
            name: 'LinkedIn',
            icon: '💼',
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            color: '#0A66C2'
        }
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center gap-3 mb-8">
            <span className="font-bold text-gray-700 dark:text-gray-300">Share:</span>
            {shareLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white transition-transform hover:scale-110"
                    style={{ backgroundColor: link.color }}
                    title={link.name}
                >
                    {link.icon}
                </a>
            ))}
            <button
                onClick={copyToClipboard}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white transition-all hover:scale-110 relative"
                title="Copy Link"
            >
                <span>🔗</span>
                {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                        Copied!
                    </span>
                )}
            </button>
        </div>
    );
}

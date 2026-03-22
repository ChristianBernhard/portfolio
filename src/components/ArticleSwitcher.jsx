'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ArticleSwitcher({ ceoContent, ctoContent }) {
  const [viewMode, setViewMode] = useState('cto')

  return (
    <div className="mb-12">
      <div
        className="mb-10 flex justify-center"
        role="tablist"
        aria-label="Article perspective"
      >
        <div className="inline-flex rounded-full border border-stone-200/90 bg-stone-100/80 p-1 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/60">
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'ceo'}
            onClick={() => setViewMode('ceo')}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              viewMode === 'ceo'
                ? 'bg-white text-stone-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100'
                : 'text-stone-600 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            Executive view
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'cto'}
            onClick={() => setViewMode('cto')}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              viewMode === 'cto'
                ? 'bg-white text-stone-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100'
                : 'text-stone-600 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            Technical view
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            {viewMode === 'ceo' ? ceoContent : ctoContent}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

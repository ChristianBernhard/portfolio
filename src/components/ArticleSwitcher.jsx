'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ArticleSwitcher({ ceoContent, ctoContent }) {
  const [viewMode, setViewMode] = useState('cto')
  
  const toggleView = () => {
    setViewMode(prev => prev === 'ceo' ? 'cto' : 'ceo')
  }

  return (
    <div className="mb-12">
      {/* Simple CEO/CTO Toggle */}
      <div className="flex items-center justify-center mb-10">
        <button
          onClick={toggleView}
          className="rounded-2xl px-8 py-4 transition-all duration-500 hover:scale-105 bg-gradient-to-r from-teal-500 to-cyan-600 text-white"
        >
          <div className="flex items-center space-x-6">
            <div className={`flex items-center space-x-3 ${viewMode === 'ceo' ? 'opacity-100' : 'opacity-60'}`}>
              <span className="text-2xl">💼</span>
              <span className="font-bold text-lg">CEO</span>
            </div>
            <div className="h-6 w-[1px] bg-white/30" />
            <div className={`flex items-center space-x-3 ${viewMode === 'cto' ? 'opacity-100' : 'opacity-60'}`}>
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-lg">CTO</span>
            </div>
          </div>
        </button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            {viewMode === 'ceo' ? ceoContent : ctoContent}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

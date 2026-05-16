'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, X, ChevronUp, Music } from 'lucide-react'

interface Song {
  id: string
  title: string
  artist: string
  audioUrl: string
  coverImage?: string
}

interface MiniPlayerProps {
  song: Song
  isPlaying: boolean
  onTogglePlay: () => void
  onExpand: () => void
  onClose: () => void
}

export default function MiniPlayer({ song, isPlaying, onTogglePlay, onExpand, onClose }: MiniPlayerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-24 left-4 right-4 md:left-8 md:right-8 z-40"
      >
        <div className="glass rounded-2xl p-4 flex items-center space-x-4 glow-gold">
          {/* Album Art */}
          <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center">
              <Music className="w-6 h-6 text-[#d4af37]" />
            </div>
            {isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1 h-4 bg-[#d4af37] rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Song Info */}
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-semibold truncate text-sm">{song.title}</h4>
            <p className="text-gray-400 text-xs truncate">{song.artist}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onTogglePlay}
              className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center glow-gold"
            >
              {isPlaying ? <Pause className="w-5 h-5 text-black" /> : <Play className="w-5 h-5 text-black ml-0.5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onExpand}
              className="w-10 h-10 rounded-full glass flex items-center justify-center border border-[rgba(212,175,55,0.3)]"
            >
              <ChevronUp className="w-5 h-5 text-[#d4af37]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                onClose()
                setIsVisible(false)
              }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center border border-[rgba(212,175,55,0.3)]"
            >
              <X className="w-5 h-5 text-gray-400" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

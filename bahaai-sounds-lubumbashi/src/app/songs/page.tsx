'use client'

import { motion } from 'framer-motion'
import { Music, Play, Download, Heart, Filter, Search } from 'lucide-react'

export default function SongsPage() {
  const songs = [
    { id: 1, title: 'Song Title 1', artist: 'Artist Name 1', genre: 'Gospel', plays: '25K', duration: '4:32' },
    { id: 2, title: 'Song Title 2', artist: 'Artist Name 2', genre: 'Worship', plays: '20K', duration: '3:45' },
    { id: 3, title: 'Song Title 3', artist: 'Artist Name 3', genre: 'Spiritual', plays: '18K', duration: '5:12' },
    { id: 4, title: 'Song Title 4', artist: 'Artist Name 1', genre: 'Gospel', plays: '15K', duration: '4:08' },
    { id: 5, title: 'Song Title 5', artist: 'Artist Name 2', genre: 'Worship', plays: '12K', duration: '3:55' },
    { id: 6, title: 'Song Title 6', artist: 'Artist Name 3', genre: 'Spiritual', plays: '10K', duration: '4:20' },
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold gold-gradient mb-2">All Songs</h1>
          <p className="text-gray-400 mb-8">Explore the complete music library</p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search songs..."
                className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all duration-300"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 glass text-[#d4af37] font-semibold rounded-lg border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300 flex items-center space-x-2"
            >
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </motion.button>
          </div>

          {/* Songs List */}
          <div className="space-y-3">
            {songs.map((song, index) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-4 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center">
                    <Music className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{song.title}</h3>
                    <p className="text-gray-400 text-sm">{song.artist} • {song.genre}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="hidden md:flex items-center space-x-4 text-gray-400 text-sm">
                    <span>{song.plays} plays</span>
                    <span>{song.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg text-gray-400 hover:text-[#d4af37] transition-colors"
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg text-gray-400 hover:text-[#d4af37] transition-colors"
                    >
                      <Download className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full gold-gradient-bg flex items-center justify-center glow-gold"
                    >
                      <Play className="w-5 h-5 text-black ml-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

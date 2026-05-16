'use client'

import { motion } from 'framer-motion'
import { Music, Play, Search, Filter, TrendingUp, Clock } from 'lucide-react'

export default function DiscoverPage() {
  const songs = [
    { id: 1, title: 'Song Title 1', artist: 'Artist Name 1', genre: 'Gospel', plays: '25K', duration: '4:32' },
    { id: 2, title: 'Song Title 2', artist: 'Artist Name 2', genre: 'Worship', plays: '20K', duration: '3:45' },
    { id: 3, title: 'Song Title 3', artist: 'Artist Name 3', genre: 'Spiritual', plays: '18K', duration: '5:12' },
    { id: 4, title: 'Song Title 4', artist: 'Artist Name 1', genre: 'Gospel', plays: '15K', duration: '4:08' },
    { id: 5, title: 'Song Title 5', artist: 'Artist Name 2', genre: 'Worship', plays: '12K', duration: '3:55' },
  ]

  const genres = ['Gospel', 'Worship', 'Spiritual', 'Contemporary', 'Traditional', 'Praise', 'Hymns']

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold gold-gradient mb-2">Discover</h1>
          <p className="text-gray-400 mb-8">Explore new music and find your favorites</p>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search songs, artists, genres..."
              className="w-full pl-10 pr-4 py-4 bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all duration-300 text-lg"
            />
          </div>

          {/* Genre Filters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Browse by Genre</h2>
            <div className="flex flex-wrap gap-3">
              {genres.map((genre) => (
                <motion.button
                  key={genre}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 glass rounded-lg text-[#d4af37] border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300"
                >
                  {genre}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Trending Section */}
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="w-6 h-6 text-[#d4af37]" />
              <h2 className="text-2xl font-bold text-white">Trending Now</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {songs.slice(0, 3).map((song, index) => (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-xl p-4 cursor-pointer"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center">
                      <Music className="w-8 h-8 text-[#d4af37]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{song.title}</h3>
                      <p className="text-gray-400 text-sm">{song.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{song.genre}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center glow-gold"
                    >
                      <Play className="w-4 h-4 text-black ml-0.5" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recently Added */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="w-6 h-6 text-[#d4af37]" />
              <h2 className="text-2xl font-bold text-white">Recently Added</h2>
            </div>
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
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400 text-sm">{song.plays} plays</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center glow-gold"
                    >
                      <Play className="w-4 h-4 text-black ml-0.5" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

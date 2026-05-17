'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Music, Mic, ArrowRight } from 'lucide-react'

export default function ArtistsPage() {
  const artists = [
    { id: 1, name: 'Artist Name 1', genre: 'Gospel', location: 'Lubumbashi' },
    { id: 2, name: 'Artist Name 2', genre: 'Worship', location: 'Lubumbashi' },
    { id: 3, name: 'Artist Name 3', genre: 'Spiritual', location: 'Lubumbashi' },
    { id: 4, name: 'Artist Name 4', genre: 'Gospel', location: 'Lubumbashi' },
    { id: 5, name: 'Artist Name 5', genre: 'Worship', location: 'Lubumbashi' },
    { id: 6, name: 'Artist Name 6', genre: 'Spiritual', location: 'Lubumbashi' },
  ]

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center space-x-3 mb-8">
          <Mic className="w-8 h-8 text-[#d4af37]" />
          <h1 className="text-3xl font-bold gold-gradient">Artistes</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center">
                <Music className="w-24 h-24 text-[#d4af37] opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{artist.name}</h3>
                <p className="text-[#d4af37] mb-2">{artist.genre}</p>
                <p className="text-gray-400 text-sm mb-4">{artist.location}</p>
                <Link href={`/artists/${artist.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 gold-gradient-bg text-black font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Voir le profil</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

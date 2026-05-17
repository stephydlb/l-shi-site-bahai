'use client'

import { motion } from 'framer-motion'
import { Music, Heart } from 'lucide-react'

export default function FavoritesPage() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center space-x-3 mb-8">
          <Heart className="w-8 h-8 text-[#d4af37]" />
          <h1 className="text-3xl font-bold gold-gradient">Favoris</h1>
        </div>

        <div className="glass rounded-2xl p-12 text-center">
          <Music className="w-16 h-16 text-[#d4af37] mx-auto mb-4 opacity-50" />
          <p className="text-gray-400 text-lg">
            Connectez-vous pour voir vos favoris
          </p>
        </div>
      </motion.div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Music, Heart } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function FavoritesPage() {
  const router = useRouter()
  const { user } = useAuth()

  if (!user) {
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
            <p className="text-gray-400 text-lg mb-6">
              Connectez-vous pour voir vos favoris
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/login')}
              className="px-6 py-3 gold-gradient-bg text-black font-semibold rounded-lg glow-gold transition-all duration-300"
            >
              Se connecter
            </motion.button>
          </div>
        </motion.div>
      </div>
    )
  }

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
          <h1 className="text-3xl font-bold gold-gradient">Mes Favoris</h1>
        </div>

        <div className="glass rounded-2xl p-12 text-center">
          <Music className="w-16 h-16 text-[#d4af37] mx-auto mb-4 opacity-50" />
          <p className="text-gray-400 text-lg">
            Vous n'avez pas encore de favoris. Explorez les artistes et ajoutez vos chansons préférées !
          </p>
        </div>
      </motion.div>
    </div>
  )
}

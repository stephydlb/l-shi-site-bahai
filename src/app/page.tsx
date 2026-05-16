'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Music, Play, Heart, Users, TrendingUp, ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  const featuredArtists = [
    { name: 'Artist Name 1', genre: 'Gospel', image: '/placeholder-artist-1.jpg' },
    { name: 'Artist Name 2', genre: 'Worship', image: '/placeholder-artist-2.jpg' },
    { name: 'Artist Name 3', genre: 'Spiritual', image: '/placeholder-artist-3.jpg' },
  ]

  const trendingSongs = [
    { title: 'Song Title 1', artist: 'Artist Name 1', plays: '12.5K' },
    { title: 'Song Title 2', artist: 'Artist Name 2', plays: '10.2K' },
    { title: 'Song Title 3', artist: 'Artist Name 3', plays: '8.7K' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse-gold" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f4d03f] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse-gold" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b8960c] rounded-full mix-blend-multiply filter blur-[200px] opacity-5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center w-32 h-32 rounded-full gold-gradient-bg glow-gold-strong mb-8"
            >
              <Music className="w-16 h-16 text-black" />
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold gold-gradient mb-6">
              Bahá'í Sounds Lubumbashi
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Découvrez la musique spirituelle et inspirante des artistes bahá'ís de Lubumbashi. 
              Une plateforme premium pour écouter, télécharger et soutenir la créativité musicale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/discover">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 gold-gradient-bg text-black font-semibold rounded-full glow-gold transition-all duration-300 flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Explorer la musique</span>
                </motion.button>
              </Link>
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass text-[#d4af37] font-semibold rounded-full border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300 flex items-center space-x-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Devenir artiste</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, label: 'Artistes', value: '50+' },
              { icon: Music, label: 'Chansons', value: '200+' },
              { icon: Play, label: 'Écoutes', value: '10K+' },
              { icon: Heart, label: 'Soutiens', value: '5K+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#d4af37]" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold gold-gradient mb-4">Artistes Vedettes</h2>
            <p className="text-gray-400 text-lg">Découvrez les talents exceptionnels de notre communauté</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtists.map((artist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center">
                  <Music className="w-24 h-24 text-[#d4af37] opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{artist.name}</h3>
                  <p className="text-[#d4af37] mb-4">{artist.genre}</p>
                  <Link href={`/artists/${index + 1}`}>
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
        </div>
      </section>

      {/* Trending Songs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold gold-gradient mb-4">Chansons Tendances</h2>
            <p className="text-gray-400 text-lg">Les morceaux les plus écoutés du moment</p>
          </motion.div>

          <div className="space-y-4">
            {trendingSongs.map((song, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-4 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center">
                    <Music className="w-8 h-8 text-[#d4af37] opacity-50" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{song.title}</h3>
                    <p className="text-gray-400">{song.artist}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Play className="w-4 h-4" />
                    <span>{song.plays}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full gold-gradient-bg flex items-center justify-center glow-gold"
                  >
                    <Play className="w-5 h-5 text-black ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/songs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass text-[#d4af37] font-semibold rounded-full border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300 flex items-center space-x-2 mx-auto"
              >
                <span>Voir toutes les chansons</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(212,175,55,0.1)] to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold gold-gradient mb-4">
                Rejoignez la Communauté
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Que vous soyez artiste ou mélomane, Bahá'í Sounds Lubumbashi est l'endroit idéal 
                pour découvrir, partager et soutenir la musique spirituelle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 gold-gradient-bg text-black font-semibold rounded-full glow-gold transition-all duration-300"
                  >
                    Créer un compte gratuit
                  </motion.button>
                </Link>
                <Link href="/discover">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 glass text-[#d4af37] font-semibold rounded-full border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300"
                  >
                    Explorer maintenant
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

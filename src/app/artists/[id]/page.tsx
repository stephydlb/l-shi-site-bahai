'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { 
  Music, 
  Play, 
  Heart, 
  Download, 
  Share2, 
  MapPin, 
  Calendar,
  TrendingUp,
  Users,
  Award
} from 'lucide-react'

export default function ArtistProfilePage() {
  const params = useParams()
  const artistId = params.id

  // Mock artist data - in production, fetch from Supabase
  const artist = {
    id: artistId,
    stageName: 'Artist Name',
    bio: 'Baha\'i artist passionate about spiritual and inspiring music. I create music that elevates the soul and unites hearts.',
    genre: ['Gospel', 'Worship'],
    location: 'Lubumbashi, RD Congo',
    coverImage: '/placeholder-cover.jpg',
    verified: true,
    stats: {
      totalPlays: '125K',
      totalDownloads: '45K',
      followers: '2.5K',
      songs: 12
    },
    socialLinks: {
      facebook: '#',
      instagram: '#',
      youtube: '#'
    }
  }

  const songs = [
    { id: 1, title: 'Song Title 1', plays: '25K', downloads: '10K', duration: '4:32' },
    { id: 2, title: 'Song Title 2', plays: '20K', downloads: '8K', duration: '3:45' },
    { id: 3, title: 'Song Title 3', plays: '18K', downloads: '7K', duration: '5:12' },
    { id: 4, title: 'Song Title 4', plays: '15K', downloads: '6K', duration: '4:08' },
    { id: 5, title: 'Song Title 5', plays: '12K', downloads: '5K', duration: '3:55' },
  ]

  return (
    <div className="min-h-screen pb-32">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-[128px] opacity-10" />
      </div>

      {/* Artist Header */}
      <div className="relative -mt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl gold-gradient-bg p-1 glow-gold">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center">
                  <Music className="w-16 h-16 text-[#d4af37]" />
                </div>
              </div>
              {artist.verified && (
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full gold-gradient-bg flex items-center justify-center glow-gold">
                  <Award className="w-4 h-4 text-black" />
                </div>
              )}
            </div>

            {/* Artist Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white">{artist.stageName}</h1>
                {artist.verified && (
                  <span className="px-3 py-1 rounded-full gold-gradient-bg text-black text-xs font-semibold">
                    Vérifié
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{artist.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{artist.stats.followers} abonnés</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Music className="w-4 h-4" />
                  <span className="text-sm">{artist.stats.songs} chansons</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {artist.genre.map((genre) => (
                  <span key={genre} className="px-3 py-1 rounded-full bg-[rgba(212,175,55,0.1)] text-[#d4af37] text-sm">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 gold-gradient-bg text-black font-semibold rounded-lg glow-gold transition-all duration-300 flex items-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Suivre</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass text-[#d4af37] font-semibold rounded-lg border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300 flex items-center space-x-2"
              >
                <Share2 className="w-5 h-5" />
                <span>Partager</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 glass rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-3">À propos</h2>
            <p className="text-gray-300 leading-relaxed">{artist.bio}</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: TrendingUp, label: 'Écoutes', value: artist.stats.totalPlays },
              { icon: Download, label: 'Téléchargements', value: artist.stats.totalDownloads },
              { icon: Users, label: 'Abonnés', value: artist.stats.followers },
              { icon: Music, label: 'Chansons', value: artist.stats.songs },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-xl p-4 text-center">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-[#d4af37]" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Songs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <h2 className="text-2xl font-bold gold-gradient mb-6">Chansons</h2>
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
                      <p className="text-gray-400 text-sm">{song.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="hidden md:flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{song.plays}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{song.downloads}</span>
                      </div>
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
          </motion.div>

          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 glass rounded-2xl p-6 text-center"
          >
            <h2 className="text-2xl font-bold gold-gradient mb-3">Soutenir cet Artiste</h2>
            <p className="text-gray-400 mb-6">
              Votre soutien permet à {artist.stageName} de continuer à créer de la musique inspirante.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 gold-gradient-bg text-black font-semibold rounded-lg glow-gold transition-all duration-300"
            >
              Faire un Don
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

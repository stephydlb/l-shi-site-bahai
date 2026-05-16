'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Settings, 
  Heart, 
  ListMusic, 
  Download, 
  Edit,
  LogOut,
  Camera
} from 'lucide-react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('playlists')

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: null,
    role: 'user',
    joinedAt: 'January 2024'
  }

  const playlists = [
    { id: 1, name: 'My Favorites', songs: 25, image: null },
    { id: 2, name: 'Worship Music', songs: 18, image: null },
    { id: 3, name: 'Recent Discoveries', songs: 12, image: null },
  ]

  const tabs = [
    { id: 'playlists', label: 'Playlists', icon: ListMusic },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Header */}
          <div className="glass rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl gold-gradient-bg p-1 glow-gold">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center">
                    <User className="w-16 h-16 text-[#d4af37]" />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-0 right-0 w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center glow-gold"
                >
                  <Camera className="w-5 h-5 text-black" />
                </motion.button>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                <p className="text-gray-400 mb-4">{user.email}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
                  <span>Joined {user.joinedAt}</span>
                  <span>•</span>
                  <span className="capitalize">{user.role}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 glass text-[#d4af37] font-semibold rounded-lg border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300 flex items-center space-x-2"
                >
                  <Edit className="w-5 h-5" />
                  <span>Edit Profile</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 glass text-red-500 font-semibold rounded-lg border border-red-500/30 hover:border-red-500 transition-all duration-300 flex items-center space-x-2"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'gold-gradient-bg text-black'
                    : 'glass text-gray-300 border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37]'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="glass rounded-2xl p-6">
            {activeTab === 'playlists' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">My Playlists</h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 gold-gradient-bg text-black font-semibold rounded-lg glow-gold transition-all duration-300"
                  >
                    Create Playlist
                  </motion.button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {playlists.map((playlist) => (
                    <motion.div
                      key={playlist.id}
                      whileHover={{ scale: 1.03 }}
                      className="p-4 bg-[#1a1a1a] rounded-xl cursor-pointer group"
                    >
                      <div className="aspect-square rounded-lg bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center mb-4">
                        <ListMusic className="w-12 h-12 text-[#d4af37] opacity-50" />
                      </div>
                      <h3 className="text-white font-semibold mb-1">{playlist.name}</h3>
                      <p className="text-gray-400 text-sm">{playlist.songs} songs</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Liked Songs</h2>
                <p className="text-gray-400">Your liked songs will appear here</p>
              </div>
            )}

            {activeTab === 'downloads' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Downloaded Songs</h2>
                <p className="text-gray-400">Your downloaded songs will appear here</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-[#1a1a1a] rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Email Notifications</h3>
                    <p className="text-gray-400 text-sm">Manage your email preferences</p>
                  </div>
                  <div className="p-4 bg-[#1a1a1a] rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Privacy</h3>
                    <p className="text-gray-400 text-sm">Control your privacy settings</p>
                  </div>
                  <div className="p-4 bg-[#1a1a1a] rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Connected Accounts</h3>
                    <p className="text-gray-400 text-sm">Manage connected social accounts</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

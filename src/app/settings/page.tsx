'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette,
  Music,
  LogOut,
  ArrowRight,
  Check
} from 'lucide-react'

export default function SettingsPage() {
  const { user, signOut } = useAuth()
  const [notifications, setNotifications] = useState(true)
  const [emailUpdates, setEmailUpdates] = useState(false)

  const handleSignOut = async () => {
    await signOut()
    window.location.href = '/'
  }

  const settingsSections = [
    {
      title: 'Compte',
      icon: User,
      items: [
        { name: 'Informations personnelles', href: '/profile', description: 'Modifier vos informations' },
        { name: 'Sécurité', href: '/profile', description: 'Mot de passe et authentification' },
      ]
    },
    {
      title: 'Préférences',
      icon: Palette,
      items: [
        { name: 'Notifications', description: 'Gérer les notifications', toggle: notifications, onToggle: () => setNotifications(!notifications) },
        { name: 'Email', description: 'Mises à jour par email', toggle: emailUpdates, onToggle: () => setEmailUpdates(!emailUpdates) },
      ]
    },
    {
      title: 'Musique',
      icon: Music,
      items: [
        { name: 'Qualité audio', description: 'Haute qualité par défaut' },
        { name: 'Lecture automatique', description: 'Activer la lecture automatique' },
      ]
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full gold-gradient-bg flex items-center justify-center glow-gold">
              <SettingsIcon className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-3xl font-bold gold-gradient">Paramètres</h1>
              <p className="text-gray-400">Gérez vos préférences et votre compte</p>
            </div>
          </div>
        </motion.div>

        {/* User Info */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                <User className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <p className="text-white font-medium">{user.email}</p>
                <p className="text-gray-400 text-sm">Compte actif</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + sectionIndex * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-[rgba(212,175,55,0.2)]">
                <div className="flex items-center space-x-3">
                  <section.icon className="w-5 h-5 text-[#d4af37]" />
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                </div>
              </div>
              <div className="divide-y divide-[rgba(212,175,55,0.2)]">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className="p-6 hover:bg-[rgba(212,175,55,0.05)] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1">{item.name}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                      {'toggle' in item ? (
                        <button
                          onClick={item.onToggle}
                          className={`w-12 h-6 rounded-full transition-all duration-300 ${
                            item.toggle
                              ? 'bg-[#d4af37]'
                              : 'bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)]'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                              item.toggle ? 'translate-x-6' : 'translate-x-0.5'
                            }`}
                          />
                        </button>
                      ) : (
                        'href' in item && (
                          <ArrowRight className="w-5 h-5 text-gray-500" />
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 glass rounded-2xl p-6 border border-red-500/30"
        >
          <div className="flex items-center space-x-3 mb-4">
            <LogOut className="w-5 h-5 text-red-400" />
            <h2 className="text-xl font-semibold text-red-400">Zone de danger</h2>
          </div>
          <p className="text-gray-400 mb-4">Actions irréversibles sur votre compte</p>
          <button
            onClick={handleSignOut}
            className="px-6 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all duration-300 font-medium"
          >
            Se déconnecter
          </button>
        </motion.div>
      </div>
    </div>
  )
}

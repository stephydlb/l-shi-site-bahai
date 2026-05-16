'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  Search, 
  Music, 
  Heart, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X,
  Mic
} from 'lucide-react'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Découvrir', href: '/discover', icon: Search },
    { name: 'Artistes', href: '/artists', icon: Mic },
    { name: 'Chansons', href: '/songs', icon: Music },
    { name: 'Favoris', href: '/favorites', icon: Heart },
    { name: 'Profil', href: '/profile', icon: User },
    { name: 'Paramètres', href: '/settings', icon: Settings },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[rgba(212,175,55,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center glow-gold"
              >
                <Music className="w-6 h-6 text-black" />
              </motion.div>
              <span className="text-xl font-bold gold-gradient hidden sm:block">
                Bahá'í Sounds Lubumbashi
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.slice(0, 5).map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300 text-sm font-medium"
                >
                  Connexion
                </motion.button>
              </Link>
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-lg gold-gradient-bg text-black font-semibold glow-gold transition-all duration-300 text-sm"
                >
                  Inscription
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-[rgba(212,175,55,0.2)] md:hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </motion.div>
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-[rgba(212,175,55,0.2)] mt-4">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-3 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300 font-medium"
                  >
                    Connexion
                  </motion.button>
                </Link>
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-3 rounded-lg gold-gradient-bg text-black font-semibold glow-gold transition-all duration-300"
                  >
                    Inscription
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

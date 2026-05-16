'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Music, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement Supabase authentication
    console.log('Login:', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse-gold" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f4d03f] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse-gold" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full gold-gradient-bg glow-gold mb-4"
          >
            <Music className="w-10 h-10 text-black" />
          </motion.div>
          <h1 className="text-3xl font-bold gold-gradient mb-2">
            Bahá'í Sounds Lubumbashi
          </h1>
          <p className="text-gray-400">
            Connectez-vous pour accéder à votre espace
          </p>
        </div>

        {/* Login Form */}
        <div className="glass rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">Connexion</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all duration-300"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#d4af37] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-between">
              <Link href="/forgot-password" className="text-sm text-[#d4af37] hover:text-[#f4d03f] transition-colors">
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 gold-gradient-bg text-black font-semibold rounded-lg glow-gold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Se connecter</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[rgba(212,175,55,0.2)]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#0a0a0a] text-gray-500">ou</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-400">
            Pas encore de compte ?{' '}
            <Link href="/signup" className="text-[#d4af37] hover:text-[#f4d03f] font-semibold transition-colors">
              Créer un compte
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

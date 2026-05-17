'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center space-x-3 mb-8">
          <Shield className="w-8 h-8 text-[#d4af37]" />
          <h1 className="text-3xl font-bold gold-gradient">Politique de Confidentialité</h1>
        </div>

        <div className="glass rounded-2xl p-8 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Collecte des Données</h2>
            <p className="text-gray-300">
              Nous collectons uniquement les informations nécessaires pour fournir nos services, 
              notamment votre email, nom et préférences musicales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Utilisation des Données</h2>
            <p className="text-gray-300">
              Vos données sont utilisées pour améliorer votre expérience, personnaliser le contenu 
              et assurer la sécurité de votre compte.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Protection des Données</h2>
            <p className="text-gray-300">
              Nous utilisons des mesures de sécurité avancées pour protéger vos informations 
              personnelles contre tout accès non autorisé.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Vos Droits</h2>
            <p className="text-gray-300">
              Vous avez le droit d'accéder, modifier ou supprimer vos données personnelles à tout moment.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center space-x-3 mb-8">
          <FileText className="w-8 h-8 text-[#d4af37]" />
          <h1 className="text-3xl font-bold gold-gradient">Conditions d'Utilisation</h1>
        </div>

        <div className="glass rounded-2xl p-8 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Acceptation des Conditions</h2>
            <p className="text-gray-300">
              En utilisant Bahá'í Sounds Lubumbashi, vous acceptez ces conditions d'utilisation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Compte Utilisateur</h2>
            <p className="text-gray-300">
              Vous êtes responsable de la confidentialité de votre compte et de toutes les activités 
              qui s'y déroulent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Contenu</h2>
            <p className="text-gray-300">
              Les artistes conservent tous les droits sur leur musique. L'utilisation non autorisée 
              du contenu est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Conduite</h2>
            <p className="text-gray-300">
              Nous nous réservons le droit de suspendre ou de supprimer les comptes qui violent 
              nos règles de conduite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Modifications</h2>
            <p className="text-gray-300">
              Nous nous réservons le droit de modifier ces conditions à tout moment. 
              Les modifications seront effectives dès leur publication.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}

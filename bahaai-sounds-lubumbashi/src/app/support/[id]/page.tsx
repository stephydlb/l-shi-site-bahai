'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { Heart, DollarSign, CreditCard, Users, Target } from 'lucide-react'

export default function ArtistSupportPage() {
  const params = useParams()
  const artistId = params.id
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const supportOptions = [
    { amount: 5, label: '$5' },
    { amount: 10, label: '$10' },
    { amount: 25, label: '$25' },
    { amount: 50, label: '$50' },
    { amount: 100, label: '$100' },
  ]

  const handleSupport = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // TODO: Implement payment processing
    setTimeout(() => {
      setIsProcessing(false)
      alert('Thank you for your support!')
    }, 2000)
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold gold-gradient mb-2">Support This Artist</h1>
          <p className="text-gray-400 mb-8">Your support helps artists continue creating inspiring music</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Artist Info */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-xl gold-gradient-bg p-1 glow-gold">
                  <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center">
                    <Heart className="w-10 h-10 text-[#d4af37]" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Artist Name</h2>
                  <p className="text-gray-400">Baha'i Music Artist</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-[rgba(212,175,55,0.05)] rounded-lg">
                  <Users className="w-5 h-5 text-[#d4af37]" />
                  <div>
                    <p className="text-white font-semibold">2,547</p>
                    <p className="text-gray-400 text-sm">Supporters</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-[rgba(212,175,55,0.05)] rounded-lg">
                  <DollarSign className="w-5 h-5 text-[#d4af37]" />
                  <div>
                    <p className="text-white font-semibold">$12,450</p>
                    <p className="text-gray-400 text-sm">Total Raised</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-[rgba(212,175,55,0.05)] rounded-lg">
                  <Target className="w-5 h-5 text-[#d4af37]" />
                  <div>
                    <p className="text-white font-semibold">$15,000</p>
                    <p className="text-gray-400 text-sm">Goal</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-[#d4af37]">83%</span>
                </div>
                <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                  <div className="h-full gold-gradient-bg" style={{ width: '83%' }} />
                </div>
              </div>
            </div>

            {/* Support Form */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Make a Donation</h3>

              <form onSubmit={handleSupport} className="space-y-6">
                {/* Amount Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {supportOptions.map((option) => (
                      <motion.button
                        key={option.amount}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setAmount(option.amount.toString())}
                        className={`p-4 rounded-lg text-center font-semibold transition-all duration-300 ${
                          amount === option.amount.toString()
                            ? 'gold-gradient-bg text-black'
                            : 'bg-[#1a1a1a] text-gray-300 border border-[rgba(212,175,55,0.2)] hover:border-[#d4af37]'
                        }`}
                      >
                        {option.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label htmlFor="customAmount" className="block text-sm font-medium text-gray-300 mb-2">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      id="customAmount"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all duration-300"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all duration-300 resize-none"
                    placeholder="Leave a message of encouragement..."
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-4 glass rounded-lg border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300 flex items-center space-x-3"
                    >
                      <CreditCard className="w-5 h-5 text-[#d4af37]" />
                      <span className="text-white">Credit Card</span>
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-4 glass rounded-lg border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300 flex items-center space-x-3"
                    >
                      <DollarSign className="w-5 h-5 text-[#d4af37]" />
                      <span className="text-white">PayPal</span>
                    </motion.button>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={!amount || isProcessing}
                  className="w-full py-4 gold-gradient-bg text-black font-semibold rounded-lg glow-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5" />
                      <span>Send Support</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Music, 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Settings,
  AlertCircle,
  CheckCircle
} from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    { icon: Users, label: 'Total Users', value: '1,234', change: '+12%' },
    { icon: Music, label: 'Total Songs', value: '456', change: '+8%' },
    { icon: TrendingUp, label: 'Total Plays', value: '125K', change: '+25%' },
    { icon: DollarSign, label: 'Revenue', value: '$8,450', change: '+18%' },
  ]

  const recentActivity = [
    { id: 1, type: 'new_user', message: 'New user registered: john@example.com', time: '2 min ago' },
    { id: 2, type: 'new_song', message: 'New song uploaded by Artist Name', time: '15 min ago' },
    { id: 3, type: 'support', message: '$50 donation received for Artist Name', time: '1 hour ago' },
    { id: 4, type: 'report', message: 'Content reported: Song Title 5', time: '2 hours ago' },
  ]

  const pendingApprovals = [
    { id: 1, type: 'artist', name: 'New Artist 1', submitted: '2 hours ago' },
    { id: 2, type: 'song', name: 'Song Title Pending', submitted: '3 hours ago' },
    { id: 3, type: 'artist', name: 'New Artist 2', submitted: '5 hours ago' },
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold gold-gradient mb-2">Admin Dashboard</h1>
              <p className="text-gray-400">Manage your platform</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 glass text-[#d4af37] font-semibold rounded-lg border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300 flex items-center space-x-2"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </motion.button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-[#d4af37]" />
                  <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pending Approvals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="w-6 h-6 text-[#d4af37]" />
                <h2 className="text-xl font-bold text-white">Pending Approvals</h2>
                <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-500 text-xs font-semibold">
                  {pendingApprovals.length}
                </span>
              </div>
              <div className="space-y-3">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg">
                    <div>
                      <p className="text-white font-medium">{item.name}</p>
                      <p className="text-gray-400 text-sm">{item.type} • {item.submitted}</p>
                    </div>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-green-500/20 text-green-500 hover:bg-green-500/30 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-colors"
                      >
                        <AlertCircle className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-6 h-6 text-[#d4af37]" />
                <h2 className="text-xl font-bold text-white">Recent Activity</h2>
              </div>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-4 bg-[#1a1a1a] rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2" />
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.message}</p>
                      <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 glass rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 glass rounded-xl border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300 text-left"
              >
                <Users className="w-8 h-8 text-[#d4af37] mb-3" />
                <h3 className="text-white font-semibold mb-1">Manage Users</h3>
                <p className="text-gray-400 text-sm">View and manage user accounts</p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 glass rounded-xl border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300 text-left"
              >
                <Music className="w-8 h-8 text-[#d4af37] mb-3" />
                <h3 className="text-white font-semibold mb-1">Content Moderation</h3>
                <p className="text-gray-400 text-sm">Review and moderate content</p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 glass rounded-xl border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all duration-300 text-left"
              >
                <DollarSign className="w-8 h-8 text-[#d4af37] mb-3" />
                <h3 className="text-white font-semibold mb-1">Financial Reports</h3>
                <p className="text-gray-400 text-sm">View revenue and donations</p>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

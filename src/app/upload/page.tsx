'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, Music, X, Check, AlertCircle, Image as ImageIcon } from 'lucide-react'

export default function UploadPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    genre: [] as string[],
    audioFile: null as File | null,
    coverImage: null as File | null,
  })
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const genres = ['Gospel', 'Worship', 'Spiritual', 'Contemporary', 'Traditional', 'Praise', 'Hymns']

  const handleGenreToggle = (genre: string) => {
    setFormData(prev => ({
      ...prev,
      genre: prev.genre.includes(genre)
        ? prev.genre.filter(g => g !== genre)
        : [...prev.genre, genre]
    }))
  }

  const handleAudioFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('audio/')) {
      setFormData(prev => ({ ...prev, audioFile: file }))
    }
  }

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      setFormData(prev => ({ ...prev, coverImage: file }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)
    setUploadStatus('idle')

    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        setIsUploading(false)
        setUploadStatus('success')
      }
    }, 200)

    // TODO: Implement actual Supabase upload
    console.log('Upload:', formData)
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold gold-gradient mb-2">Uploader une Chanson</h1>
          <p className="text-gray-400 mb-8">Partagez votre musique avec la communauté</p>

          {uploadStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl p-12 text-center"
            >
              <div className="w-20 h-20 rounded-full gold-gradient-bg flex items-center justify-center mx-auto mb-6 glow-gold">
                <Check className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Upload Réussi !</h2>
              <p className="text-gray-400 mb-8">Votre chanson a été uploadée avec succès et est maintenant disponible sur la plateforme.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setUploadStatus('idle')
                  setFormData({
                    title: '',
                    description: '',
                    genre: [],
                    audioFile: null,
                    coverImage: null,
                  })
                  setUploadProgress(0)
                }}
                className="px-8 py-3 gold-gradient-bg text-black font-semibold rounded-lg glow-gold transition-all duration-300"
              >
                Uploader une autre chanson
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              {/* Audio File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Fichier Audio *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleAudioFileChange}
                    className="hidden"
                    id="audio-upload"
                  />
                  <label
                    htmlFor="audio-upload"
                    className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 ${
                      formData.audioFile
                        ? 'border-[#d4af37] bg-[rgba(212,175,55,0.05)]'
                        : 'border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] bg-[#1a1a1a]'
                    }`}
                  >
                    {formData.audioFile ? (
                      <div className="text-center">
                        <Music className="w-8 h-8 mx-auto mb-2 text-[#d4af37]" />
                        <p className="text-white text-sm font-medium">{formData.audioFile.name}</p>
                        <p className="text-gray-400 text-xs">{(formData.audioFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-gray-400 text-sm">Cliquez ou glissez-déposez un fichier audio</p>
                        <p className="text-gray-500 text-xs mt-1">MP3, WAV, OGG (max 50MB)</p>
                      </div>
                    )}
                  </label>
                  {formData.audioFile && (
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, audioFile: null }))}
                      className="absolute top-2 right-2 p-1 rounded-full bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Cover Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Image de Couverture
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverImageChange}
                    className="hidden"
                    id="cover-upload"
                  />
                  <label
                    htmlFor="cover-upload"
                    className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 ${
                      formData.coverImage
                        ? 'border-[#d4af37] bg-[rgba(212,175,55,0.05)]'
                        : 'border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] bg-[#1a1a1a]'
                    }`}
                  >
                    {formData.coverImage ? (
                      <div className="text-center">
                        <ImageIcon className="w-8 h-8 mx-auto mb-2 text-[#d4af37]" />
                        <p className="text-white text-sm font-medium">{formData.coverImage.name}</p>
                        <p className="text-gray-400 text-xs">{(formData.coverImage.size / (1024 * 1024)).toFixed(2)} MB</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <ImageIcon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-gray-400 text-sm">Cliquez ou glissez-déposez une image</p>
                        <p className="text-gray-500 text-xs mt-1">JPG, PNG, WEBP (max 10MB)</p>
                      </div>
                    )}
                  </label>
                  {formData.coverImage && (
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, coverImage: null }))}
                      className="absolute top-2 right-2 p-1 rounded-full bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                  Titre de la Chanson *
                </label>
                <input
                  id="title"
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all duration-300"
                  placeholder="Entrez le titre de votre chanson"
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all duration-300 resize-none"
                  placeholder="Décrivez votre chanson, son inspiration, son message..."
                />
              </div>

              {/* Genre Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Genre(s) Musical(aux)
                </label>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <motion.button
                      key={genre}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleGenreToggle(genre)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        formData.genre.includes(genre)
                          ? 'gold-gradient-bg text-black'
                          : 'bg-[#1a1a1a] text-gray-300 border border-[rgba(212,175,55,0.2)] hover:border-[#d4af37]'
                      }`}
                    >
                      {genre}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Upload Progress */}
              {isUploading && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Upload en cours...</span>
                    <span className="text-[#d4af37]">{uploadProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${uploadProgress}%` }}
                      className="h-full gold-gradient-bg"
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!formData.audioFile || !formData.title || isUploading}
                className="w-full py-4 gold-gradient-bg text-black font-semibold rounded-lg glow-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isUploading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Upload en cours...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    <span>Uploader la Chanson</span>
                  </>
                )}
              </motion.button>

              {/* Info Message */}
              <div className="flex items-start space-x-3 p-4 bg-[rgba(212,175,55,0.05)] rounded-lg border border-[rgba(212,175,55,0.2)]">
                <AlertCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p className="font-medium text-white mb-1">Informations importantes</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Assurez-vous d'avoir les droits sur la musique que vous uploadez</li>
                    <li>Les fichiers audio doivent être de haute qualité (minimum 192kbps)</li>
                    <li>Les images de couverture doivent être carrées (minimum 1000x1000px)</li>
                    <li>Votre chanson sera soumise à modération avant publication</li>
                  </ul>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}

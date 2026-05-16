import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: 'user' | 'artist' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'user' | 'artist' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'user' | 'artist' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      artists: {
        Row: {
          id: string
          user_id: string
          stage_name: string
          bio: string | null
          genre: string[]
          location: string
          cover_image: string | null
          social_links: {
            facebook?: string
            instagram?: string
            twitter?: string
            youtube?: string
          } | null
          verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          stage_name: string
          bio?: string | null
          genre?: string[]
          location: string
          cover_image?: string | null
          social_links?: {
            facebook?: string
            instagram?: string
            twitter?: string
            youtube?: string
          } | null
          verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          stage_name?: string
          bio?: string | null
          genre?: string[]
          location?: string
          cover_image?: string | null
          social_links?: {
            facebook?: string
            instagram?: string
            twitter?: string
            youtube?: string
          } | null
          verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      songs: {
        Row: {
          id: string
          artist_id: string
          title: string
          description: string | null
          audio_url: string
          cover_image: string | null
          duration: number
          genre: string[]
          plays: number
          downloads: number
          released_at: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          artist_id: string
          title: string
          description?: string | null
          audio_url: string
          cover_image?: string | null
          duration?: number
          genre?: string[]
          plays?: number
          downloads?: number
          released_at?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          artist_id?: string
          title?: string
          description?: string | null
          audio_url?: string
          cover_image?: string | null
          duration?: number
          genre?: string[]
          plays?: number
          downloads?: number
          released_at?: string
          created_at?: string
          updated_at?: string
        }
      }
      playlists: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          cover_image: string | null
          is_public: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          cover_image?: string | null
          is_public?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          cover_image?: string | null
          is_public?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      playlist_songs: {
        Row: {
          id: string
          playlist_id: string
          song_id: string
          position: number
          added_at: string
        }
        Insert: {
          id?: string
          playlist_id: string
          song_id: string
          position?: number
          added_at?: string
        }
        Update: {
          id?: string
          playlist_id?: string
          song_id?: string
          position?: number
          added_at?: string
        }
      }
      likes: {
        Row: {
          id: string
          user_id: string
          song_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          song_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          song_id?: string
          created_at?: string
        }
      }
      comments: {
        Row: {
          id: string
          user_id: string
          song_id: string
          content: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          song_id: string
          content: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          song_id?: string
          content?: string
          created_at?: string
          updated_at?: string
        }
      }
      supports: {
        Row: {
          id: string
          user_id: string
          artist_id: string
          amount: number
          message: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          artist_id: string
          amount: number
          message?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          artist_id?: string
          amount?: number
          message?: string | null
          created_at?: string
        }
      }
      listen_stats: {
        Row: {
          id: string
          song_id: string
          user_id: string | null
          duration: number
          completed: boolean
          created_at: string
        }
        Insert: {
          id?: string
          song_id: string
          user_id?: string | null
          duration: number
          completed?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          song_id?: string
          user_id?: string | null
          duration?: number
          completed?: boolean
          created_at?: string
        }
      }
    }
  }
}

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (extends auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'artist', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Artists table
CREATE TABLE artists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  stage_name TEXT NOT NULL,
  bio TEXT,
  genre TEXT[] DEFAULT '{}',
  location TEXT NOT NULL,
  cover_image TEXT,
  social_links JSONB,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Songs table
CREATE TABLE songs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  audio_url TEXT NOT NULL,
  cover_image TEXT,
  duration INTEGER DEFAULT 0, -- in seconds
  genre TEXT[] DEFAULT '{}',
  plays INTEGER DEFAULT 0,
  downloads INTEGER DEFAULT 0,
  released_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Playlists table
CREATE TABLE playlists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  cover_image TEXT,
  is_public BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Playlist songs junction table
CREATE TABLE playlist_songs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  playlist_id UUID REFERENCES playlists(id) ON DELETE CASCADE,
  song_id UUID REFERENCES songs(id) ON DELETE CASCADE,
  position INTEGER NOT NULL,
  added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(playlist_id, song_id)
);

-- Likes table
CREATE TABLE likes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  song_id UUID REFERENCES songs(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, song_id)
);

-- Comments table
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  song_id UUID REFERENCES songs(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Supports (donations) table
CREATE TABLE supports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Listen statistics table
CREATE TABLE listen_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  song_id UUID REFERENCES songs(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  duration INTEGER NOT NULL, -- listened duration in seconds
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_artists_user_id ON artists(user_id);
CREATE INDEX idx_songs_artist_id ON songs(artist_id);
CREATE INDEX idx_songs_genre ON songs USING GIN(genre);
CREATE INDEX idx_playlists_user_id ON playlists(user_id);
CREATE INDEX idx_playlist_songs_playlist_id ON playlist_songs(playlist_id);
CREATE INDEX idx_playlist_songs_song_id ON playlist_songs(song_id);
CREATE INDEX idx_likes_user_id ON likes(user_id);
CREATE INDEX idx_likes_song_id ON likes(song_id);
CREATE INDEX idx_comments_song_id ON comments(song_id);
CREATE INDEX idx_comments_user_id ON comments(user_id);
CREATE INDEX idx_supports_artist_id ON supports(artist_id);
CREATE INDEX idx_supports_user_id ON supports(user_id);
CREATE INDEX idx_listen_stats_song_id ON listen_stats(song_id);
CREATE INDEX idx_listen_stats_user_id ON listen_stats(user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_artists_updated_at BEFORE UPDATE ON artists
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_songs_updated_at BEFORE UPDATE ON songs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_playlists_updated_at BEFORE UPDATE ON playlists
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_comments_updated_at BEFORE UPDATE ON comments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE songs ENABLE ROW LEVEL SECURITY;
ALTER TABLE playlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE playlist_songs ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE supports ENABLE ROW LEVEL SECURITY;
ALTER TABLE listen_stats ENABLE ROW LEVEL SECURITY;

-- Profiles RLS policies
CREATE POLICY "Users can view all profiles" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Artists RLS policies
CREATE POLICY "Anyone can view artists" ON artists
  FOR SELECT USING (true);

CREATE POLICY "Artists can update own profile" ON artists
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Artists can insert own profile" ON artists
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Songs RLS policies
CREATE POLICY "Anyone can view songs" ON songs
  FOR SELECT USING (true);

CREATE POLICY "Artists can insert own songs" ON songs
  FOR INSERT WITH CHECK (
    artist_id IN (
      SELECT id FROM artists WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Artists can update own songs" ON songs
  FOR UPDATE USING (
    artist_id IN (
      SELECT id FROM artists WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Artists can delete own songs" ON songs
  FOR DELETE USING (
    artist_id IN (
      SELECT id FROM artists WHERE user_id = auth.uid()
    )
  );

-- Playlists RLS policies
CREATE POLICY "Users can view public playlists" ON playlists
  FOR SELECT USING (is_public = true OR user_id = auth.uid());

CREATE POLICY "Users can insert own playlists" ON playlists
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own playlists" ON playlists
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own playlists" ON playlists
  FOR DELETE USING (auth.uid() = user_id);

-- Playlist songs RLS policies
CREATE POLICY "Users can view playlist songs" ON playlist_songs
  FOR SELECT USING (
    playlist_id IN (
      SELECT id FROM playlists WHERE user_id = auth.uid() OR is_public = true
    )
  );

CREATE POLICY "Users can insert own playlist songs" ON playlist_songs
  FOR INSERT WITH CHECK (
    playlist_id IN (
      SELECT id FROM playlists WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete own playlist songs" ON playlist_songs
  FOR DELETE USING (
    playlist_id IN (
      SELECT id FROM playlists WHERE user_id = auth.uid()
    )
  );

-- Likes RLS policies
CREATE POLICY "Anyone can view likes" ON likes
  FOR SELECT USING (true);

CREATE POLICY "Users can insert own likes" ON likes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own likes" ON likes
  FOR DELETE USING (auth.uid() = user_id);

-- Comments RLS policies
CREATE POLICY "Anyone can view comments" ON comments
  FOR SELECT USING (true);

CREATE POLICY "Users can insert own comments" ON comments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own comments" ON comments
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own comments" ON comments
  FOR DELETE USING (auth.uid() = user_id);

-- Supports RLS policies
CREATE POLICY "Anyone can view supports" ON supports
  FOR SELECT USING (true);

CREATE POLICY "Users can insert own supports" ON supports
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own supports" ON supports
  FOR SELECT USING (auth.uid() = user_id);

-- Listen stats RLS policies
CREATE POLICY "Users can insert listen stats" ON listen_stats
  FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Artists can view stats for their songs" ON listen_stats
  FOR SELECT USING (
    song_id IN (
      SELECT id FROM songs WHERE artist_id IN (
        SELECT id FROM artists WHERE user_id = auth.uid()
      )
    )
  );

-- Function to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url, role)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url',
    COALESCE(NEW.raw_user_meta_data->>'role', 'user')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Storage buckets (to be created in Supabase dashboard)
-- audio-files: for song audio files
-- images: for cover images and avatars

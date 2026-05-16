# Bahá'í Sounds Lubumbashi

A premium music platform dedicated to Baha'i artists in Lubumbashi, built with Next.js 15, React, TypeScript, TailwindCSS, Framer Motion, and Supabase.

## Features

- **Premium Design**: Dark and gold theme with glassmorphism effects
- **Authentication**: Complete user and artist authentication system
- **Artist Profiles**: Customizable artist profiles with songs and statistics
- **Audio Player**: Premium audio player with visualizer and playlist support
- **Song Upload**: Easy song upload for artists with cover images
- **Social Features**: Likes, comments, and social sharing
- **Playlists**: Create and manage personal playlists
- **Search & Discovery**: Intelligent search and browse functionality
- **Financial Support**: Support system for artists with donations
- **Admin Dashboard**: Complete admin panel for platform management
- **Responsive Design**: Mobile, tablet, and desktop optimized

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: TailwindCSS with custom dark/gold theme
- **Animations**: Framer Motion
- **Backend**: Supabase (PostgreSQL, Auth, Storage, Realtime)
- **Icons**: Lucide React
- **Audio**: HTML5 Audio API with custom visualizer

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

The `.env.local` file is already configured with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://epszqbgwrcxiaegynsij.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_SO5Rwqu-JChKMoxoOycc7g_soQXrr2n
```

### 3. Database Setup

Run the SQL schema in your Supabase SQL editor:

```bash
# Open supabase-schema.sql and execute it in Supabase SQL Editor
```

The schema includes:
- Users and profiles
- Artists and their profiles
- Songs with metadata
- Playlists and playlist songs
- Likes and comments
- Financial supports
- Listen statistics
- Row Level Security (RLS) policies

### 4. Storage Buckets

Create the following storage buckets in Supabase:
- `audio-files`: For song audio files
- `images`: For cover images and avatars

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
bahaai-sounds-lubumbashi/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── login/page.tsx        # Login page
│   │   ├── signup/page.tsx       # Signup page
│   │   ├── artists/[id]/page.tsx # Artist profile
│   │   ├── songs/page.tsx        # Songs listing
│   │   ├── discover/page.tsx     # Discovery page
│   │   ├── support/[id]/page.tsx # Artist support
│   │   ├── admin/page.tsx        # Admin dashboard
│   │   ├── profile/page.tsx      # User profile
│   │   ├── upload/page.tsx       # Song upload
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Navigation.tsx        # Navigation component
│   │   ├── AudioPlayer.tsx       # Premium audio player
│   │   └── MiniPlayer.tsx        # Mini floating player
│   └── lib/
│       └── supabase.ts           # Supabase client
├── supabase-schema.sql           # Database schema
├── .env.local                   # Environment variables
└── README.md                    # This file
```

## Key Features Implementation

### Authentication
- User registration and login
- Artist account creation
- Role-based access (user, artist, admin)
- Protected routes

### Audio Player
- Custom audio player with visualizer
- Playlist management
- Volume control
- Play/pause, skip, shuffle, repeat
- Mini floating player

### Artist Dashboard
- Profile management
- Song upload with metadata
- Statistics tracking (plays, downloads)
- Financial support tracking

### Admin Dashboard
- User management
- Content moderation
- Financial reports
- Platform statistics

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Server-side rendering where appropriate
- Optimized bundle size

## Security

- Row Level Security (RLS) on Supabase
- Environment variable protection
- Secure file upload handling
- Input validation and sanitization

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is dedicated to the Baha'i community of Lubumbashi.

## Support

For support, please contact the development team or open an issue in the repository.

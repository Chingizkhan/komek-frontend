import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'komek',
        short_name: 'komek',
        description: 'A Progressive Web App built with Next.js',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/komek_logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/komek_logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
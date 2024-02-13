import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    VitePWA({ 
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        // selfDestroying: true,
        devOptions: {
            enabled: false
        },
        workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
            maximumFileSizeToCacheInBytes: 5000000,
            // cleanupOutdatedCaches: true
        },
        manifest: {
            name: 'MINI APP template',
            short_name: 'MINI APP template',
            description: 'little thing in your pocket',
            theme_color: '#ff0066',
            orientation: 'portrait',
            display: "fullscreen",
            icons: [
                {
                    src: 'icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                    purpose: "maskable"
                },
                {
                    src: 'icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ]
        }
     })
  ]
})
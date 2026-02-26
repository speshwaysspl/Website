import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true, // Split CSS into chunks for better caching and smaller initial load
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Group React and core vendors together for stability
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('@tanstack/react-query')) {
              return 'vendor-core';
            }
            // Group animations separately
            if (id.includes('framer-motion')) {
              return 'vendor-animation';
            }
            // Group other UI-related stuff
            if (id.includes('lucide-react') || id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-ui';
            }
            // Catch-all for other vendors
            return 'vendor-others';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : [], // Deep clean logs
      },
    },
    // CSS Minification tuning
    cssMinify: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
}));

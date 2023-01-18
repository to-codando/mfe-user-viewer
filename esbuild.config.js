import { build } from 'esbuild'
import chokidar from 'chokidar'
import liveServer from 'live-server'

import path from 'path'
import aliasPlugin from 'esbuild-plugin-path-alias'
import eslint from 'esbuild-plugin-linter'
import copy from 'esbuild-copy-files-plugin'

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

;(async () => {
  const isDevMode = () => {
    return process.env.NODE_ENV === 'development'
  }

  const liveServerCors = (req, res, next) => {
    res.setHeader('Access-control-allow-origin', '*')
    next()
  }

  const plugins = [
    aliasPlugin({
      '@/components': path.resolve(__dirname, './src/components'),
      '@/services': path.resolve(__dirname, './src/services'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/mocks': path.resolve(__dirname, './src/mocks')
    }),
    copy({
      source: ['./src/index.html'],
      target: 'dist',
      copyWithFolder: false // will copy "images" folder with all files inside
    }),
    eslint({})
  ]

  const buildOptions = {
    plugins,
    platform: 'browser',
    format: 'esm',
    bundle: true,
    write: true,
    watch: true,
    entryPoints: ['src/main.js', 'src/assets/styles/main.css'],
    incremental: true,
    outdir: 'dist',
    treeShaking: !isDevMode(),
    sourcemap: isDevMode(),
    minify: !isDevMode(),
    target: isDevMode() ? ['esnext'] : ['es2018'],

    loader: {
      '.png': 'dataurl',
      '.jpg': 'file',
      '.jpeg': 'file',
      '.svg': 'text'
    }
  }

  const { rebuild, stop } = await build(buildOptions)

  if (!isDevMode() && buildOptions?.watch) {
    rebuild()
  }

  liveServer.start({
    // Opens the local server on start.
    open: false,
    // Uses `PORT=...` or 8080 as a fallback.
    port: 8082,
    //Host
    host: 'localhost',
    // Uses `public` as the local server folder.
    root: 'dist',
    middleware: [liveServerCors]
  })

  process.once('SIGTERM', async () => {
    try {
      stop && stop()
    } finally {
      process.exit(0)
    }
  })
})()

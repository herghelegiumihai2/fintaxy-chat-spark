
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define routes that match App.tsx exactly
const routesToPrerender = [
  '/',
  '/index',
  '/accounting',
  '/business',
  '/freelancers',
  '/about-us'
]

// Helper function to ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

// Helper function to map routes to file paths
const getFilePathForRoute = (route) => {
  switch (route) {
    case '/':
      return 'dist/index.html'
    case '/index':
      return 'dist/index/index.html'
    case '/accounting':
      return 'dist/accounting/index.html'
    case '/business':
      return 'dist/business/index.html'
    case '/freelancers':
      return 'dist/freelancers/index.html'
    case '/about-us':
      return 'dist/about-us/index.html'
    default:
      // For any other routes, create a directory structure
      const cleanPath = route.replace(/^\//, '').replace(/\/$/, '')
      return `dist/${cleanPath}/index.html`
  }
}

;(async () => {
  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url);
      const html = template.replace(`<!--app-html-->`, appHtml)

      const filePath = getFilePathForRoute(url)
      const absoluteFilePath = toAbsolute(filePath)
      
      // Ensure the directory exists before writing
      ensureDirectoryExists(absoluteFilePath)
      
      fs.writeFileSync(absoluteFilePath, html)
      console.log('pre-rendered:', filePath)
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error)
    }
  }
})()

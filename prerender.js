
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define the actual routes from your App.tsx
const routesToPrerender = [
  '/',
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

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    // Map routes to proper file paths
    let filePath
    if (url === '/') {
      filePath = 'dist/index.html'
    } else if (url === '/about-us') {
      filePath = 'dist/about-us.html'
    } else {
      // Remove leading slash and add .html extension
      filePath = `dist${url}.html`
    }

    const absoluteFilePath = toAbsolute(filePath)
    ensureDirectoryExists(absoluteFilePath)
    
    fs.writeFileSync(absoluteFilePath, html)
    console.log('pre-rendered:', filePath)
  }
})()

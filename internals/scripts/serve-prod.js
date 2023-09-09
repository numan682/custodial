// @ts-check
const path = require('path')
const http = require('http')
const serveHandler = require('serve-handler')
const { getCsp, getPermissionsPolicy } = require('../getSecurityHeaders.js')
const csp = getCsp({ isDev: false, isExtension: true })
const permissionsPolicy = getPermissionsPolicy()
console.log(`Content-Security-Policy: ${csp}\n`)
console.log(`Permissions-Policy: ${permissionsPolicy}\n`)

const root = path.resolve(__dirname, '../..')

const server = http.createServer((request, response) => {
  return serveHandler(request, response, {
    public: path.join(root, 'build'),
    rewrites: [
      {
        source: '**',
        destination: '/index.html',
      },
    ],
    // Disable etag so we don't need to clear cache if we only change CSP.
    etag: false,
    headers: [
      {
        source: '**',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp,
          },
          {
            key: 'Permissions-Policy',
            value: permissionsPolicy,
          },
        ],
      },
    ],
  })
})

server.listen(5000, () => {
  console.log('Running at http://localhost:5000')
})

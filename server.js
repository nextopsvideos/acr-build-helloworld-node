const http = require('http')

// updated to use port 80 for better compatibility with Azure App Service
const port = 80
const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Hello World\n')
  response.end('Version: ' + process.env.NODE_VERSION + '\n')
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
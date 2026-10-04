const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'build');
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

http.createServer((request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const safePath = path.resolve(root, `.${requestPath}`);
  if (!safePath.startsWith(`${root}${path.sep}`) && safePath !== root) {
    response.writeHead(403).end('Forbidden');
    return;
  }

  let filePath = safePath;
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) filePath = path.join(filePath, 'index.html');
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) filePath = path.join(root, '404.html');

  response.writeHead(filePath.endsWith('404.html') && safePath !== filePath ? 404 : 200, {
    'Content-Type': types[path.extname(filePath)] || 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  fs.createReadStream(filePath).pipe(response);
}).listen(process.env.PORT || 3000, () => {
  process.stdout.write(`Cloudful site available at http://localhost:${process.env.PORT || 3000}\n`);
});

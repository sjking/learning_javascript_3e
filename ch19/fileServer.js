const server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/favicon.ico') {
    const fs = require('fs');
    fs.createReadStream('favicon.ico');
    fs.pipe(res);  // replaces the call to 'end'
  } else {
    console.log(`${req.method} ${req.url}`);
    res.end('Hello, world!);
  }
});

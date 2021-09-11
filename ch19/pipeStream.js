'use strict'

const fs = require('fs');

const rs = fs.createReadStream('stream.txt');
const ws = fs.createWriteStream('stream_copy.txt');

// rs piping bytes to ws
rs.pipe(ws);

const Stream = require('stream');
function writeAsStream(arr) {
  const readable = new Stream.Readable({ objectMode: true });
  const writable = new Stream.Writable({ objectMode: true });
  writable._write = (object, encoding, done) => {
    console.log(object);
    done();
  };

  readable.pipe(writable);
  arr.forEach(item => readable.push(item));
  readable.push(null)
}

module.exports = writeAsStream;

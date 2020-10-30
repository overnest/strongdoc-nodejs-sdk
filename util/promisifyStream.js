const bluebird = require('bluebird');

const end = new Error("END");

const bidirect = function (stream) {
  let resolveProm, rejectProm;

  const writeAsync = function(req) {
    this.write(req);

    return new Promise((resolve, reject) => {
      resolveProm = resolve;
      rejectProm = reject;
    })
  };

  const onData = function(res, err) {
    if (err) rejectProm(err);
    else resolveProm(res);
  };

  const onEnd = function(err) {
    if (err) rejectProm(err);
    else resolveProm(end);
  }

  const onError = function(err) {
    rejectProm(err || new Error('Stream ended unexpectedly'))
  };

  stream.writeAsync = writeAsync;
  stream.on('data', onData);
  stream.on('end', onEnd);
  stream.on('error', onError);
  return stream;
};

// Down stream is from server to client
const down = function (stream) {
  let resolveProm, rejectProm;

  const readAsync = function() {
    return new Promise((resolve, reject) => {
      resolveProm = resolve;
      rejectProm = reject;
    })
  };

  const onData = function(res, err) {
    if (err) rejectProm(err);
    else resolveProm(res);
  };

  const onEnd = function(err) {
    if (err) rejectProm(err);
    else resolveProm(end);
  }

  const onError = function(err) {
    rejectProm(err || new Error('Stream ended unexpectedly'))
  };

  stream.readAsync = readAsync;
  stream.on('data', onData);
  stream.on('end', onEnd);
  stream.on('error', onError);
  return stream;
};

const promisifyRequestStream = (createStream, context) => (...args) => {
    return new StreamWrapper(createStream, context, ...args)
  }


class StreamWrapper {

  constructor(createStream, context, ...args) {
    this.stream = createStream.call(context, ...args, this.callBack.bind(this))
    
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    })
  }

  callBack(err, response) {
    if (err) this.reject(err)
    else this.resolve(response)
  }

  end() {
    this.stream.end()
    return this.promise
  }

  write(...args){
    return this.writeToStream(this.stream, ...args)
  }

  writeToStream(stream, ...args) {
    new Promise((resolve, reject) => {
      stream.on("error", error => reject(error));
      if(!stream.write(...args)) {
            stream.once('drain', () => {
            stream.write(...args)
            resolve()
        })
      }else{
          resolve()
      }
    })
  }
}

exports.bidirect = bidirect;
exports.down = down;
exports.promisifyRequestStream = promisifyRequestStream;
exports.end = end;



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

exports.bidirect = bidirect;
exports.down = down;
exports.end = end;


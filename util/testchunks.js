let buf = Buffer.alloc(10);
let buf1 = Buffer.from("AAAA");
let buf2 = Buffer.from("BBBB");
let buf3 = Buffer.from("CCCC");
let buf4 = Buffer.from("DDDD");
let arr = [buf1, buf2, buf3, buf4];

let chunk = Buffer.concat(arr.slice(0,4))
const fillBuffer = (buffer) => {
    let buflen = buffer.length;
    let chunklen = chunk.length;
    if (chunklen < buflen) {
        return chunk.copy(buffer);
    } else {
        let n = chunk.copy(buffer, 0, 0, buffer.length);
        chunk = chunk.slice(buffer.length)
        return n;
    }
};

console.log(fillBuffer(buf, chunk));
console.log(buf.toString());
console.log(chunk.toString());

const readChunksToBuffer = (buffer, chunks) => {
    let ptr = 0;
    let n = 0;
    while (chunks.length > 0 && ptr < buffer.length) {
        let chunk = chunks.shift();
        console.log('chunk = ' + chunk.toString());
        let chunkLen = chunk.length;
        let spaceLeft = buffer.length - ptr;
        let fits = chunkLen < spaceLeft;

        if (fits) {
            n = chunk.copy(buffer, ptr);
        } else {
            n = chunk.copy(buffer, ptr, 0, spaceLeft);
            let newChunk = chunk.slice(spaceLeft);
            chunks.unshift(newChunk)
        }
        ptr += n;
    }
    return n;
};

// const chop = (buffer)
//
// let n = readChunksToBuffer(buf, arr);
// console.log('buffer: ' + buf.toString());
// console.log('n: ' + n);
// console.log('chunks.length: ' + arr.length);
// arr.forEach(chunk => {
//     console.log("Chunk: " + chunk.toString())
// });

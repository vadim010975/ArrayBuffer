const { getBuffer } = require('../getBuffer');
const { ArrayBufferConverter } = require('../ArrayBufferConverter');

const testBuffer = getBuffer();

test('test function getBuffer', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = new ArrayBuffer(data.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < data.length; i += 1) {
    bufferView[i] = data.charCodeAt(i);
  }
  expect(testBuffer).toEqual(buffer);
});

test('test class ArrayBufferConverter', () => {
  ArrayBufferConverter.load(testBuffer);
  const string = ArrayBufferConverter.toString();
  expect(string).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

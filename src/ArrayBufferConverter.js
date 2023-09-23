class ArrayBufferConverter {
  static load(data) {
    const dataView = new Uint8Array(data);
    this.buffer = new ArrayBuffer(dataView.length);
    const bufferView = new Uint8Array(this.buffer);
    for (let i = 0; i < dataView.length; i += 1) {
      bufferView[i] = dataView[i];
    }
  }

  static toString() {
    const bufferView = new Uint16Array(this.buffer);
    let str = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      str += String.fromCharCode(bufferView[i]);
    }
    return str;
  }
}

module.exports = {
  ArrayBufferConverter,
};

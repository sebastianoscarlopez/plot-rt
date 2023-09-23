
class Buffer {
  constructor({
    type,
    usage
  }) {
    this.gl = gl;
    this.type = type;
    this.usage = usage;
    this.buffer = gl.createBuffer();
  }
  
  bind() {
    this.gl.bindBuffer(this.type, this.buffer);
  }

  unbind() {
    this.gl.bindBuffer(this.type, null);
  }

  bufferData(data) {
    this.bind();
    this.gl.bufferData(this.type, data, this.usage);
  }

  bufferSubData(offset, data) {
    this.bind();
    this.gl.bufferSubData(this.type, offset, data);
  }
}

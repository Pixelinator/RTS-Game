class GLCommander {
  constructor() {}

  init = gl => {
    this.gl = gl;
  };

  clear = (r, g, b, a) => {
    this.gl.clearColor(r, g, b, a);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  };

  viewport = () => {
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
  };

  depthTest = use => {
    use
      ? this.gl.enable(this.gl.DEPTH_TEST)
      : this.gl.disable(this.gl.DEPTH_TEST);
  };

  createBuffer = () => {
    return this.gl.createBuffer();
  };

  // float buffers

  bindArrayBuffer = buffer => {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
  };

  addArrayBufferData = vertices => {
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(vertices),
      this.gl.STATIC_DRAW
    );
  };

  unbindArrayBuffer = () => {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
  };

  // int buffers

  bindElementArrayBuffer = buffer => {
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);
  };

  addElementArrayBufferData = indices => {
    this.gl.bufferData(
      this.gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices),
      this.gl.STATIC_DRAW
    );
  };

  unbindElementArrayBuffer = () => {
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
  };

  // shader functions

  createVertexShader = () => {
    return this.gl.createShader(this.gl.VERTEX_SHADER);
  };

  createFragmentShader = () => {
    return this.gl.createShader(this.gl.FRAGMENT_SHADER);
  };

  addShaderSource = (shader, source) => {
    if (shader && source) {
      this.gl.shaderSource(shader, source);
    } else {
      return;
    }
  };

  compileShader = shader => {
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      alert(this.gl.getShaderInfoLog(shader));
      return null;
    }
  };

  createShaderProgram = () => {
    return this.gl.createProgram();
  };

  attachShaderToProgram = (program, shader) => {
    this.gl.attachShader(program, shader);
  };

  linkProgram = program => {
    this.gl.linkProgram(program);
  };

  useProgram = program => {
    this.gl.useProgram(program);
  };

  getAttribLocation = (program, attribute) => {
    this.gl.getAttribLocation(program, attribute);
  };

  enableVertexAttribArray = attribute => {
    this.gl.enableVertexAttribArray(attribute);
  };

  pointToAttribute = (data, dimensions) => {
    this.gl.vertexAttribPointer(data, dimensions, this.gl.FLOAT, false, 0, 0);
  };

  drawTriangles = noOfIndicies => {
    this.gl.drawElements(
      this.gl.TRIANGLES,
      noOfIndicies,
      this.gl.UNSIGNED_SHORT,
      0
    );
  };

  uploadMatrix4fv = (location, matrix) => {
    this.gl.uniformMatrix4fv(location, false, matrix);
  };

  getUniformLocation = (program, uniform) => {
    this.gl.getUniformLocation(program, uniform);
  };
}

const GLC = new GLCommander();

// export Singleton
export default GLC;

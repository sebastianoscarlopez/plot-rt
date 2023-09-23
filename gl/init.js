function init(canvas) {
  gl = canvas.getContext('webgl2', {antialias: false});

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.enable(gl.DEPTH_TEST);
  gl.clear(gl.COLOR_BUFFER_BIT);
  
  return gl;
}
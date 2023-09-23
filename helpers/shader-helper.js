
async function fetchShader(shaderName) {
  return fetch(`shaders/${shaderName}`)
    .then((response) => response.text())
    .then((text) => text);
}

async function getShader(shaderType, shaderName) {
  if (![gl.VERTEX_SHADER, gl.FRAGMENT_SHADER].includes(shaderType)) {
    throw 'Invalid shader type';
  }

  let extension = '';
  switch (shaderType) {
    case gl.VERTEX_SHADER:
      extension = 'vs';
      break;
    case gl.FRAGMENT_SHADER:
      extension = 'fs';
      break;
  }
  var textCode = await fetchShader(`${shaderName}.${extension}`);
  var shader = gl.createShader(shaderType);
  gl.shaderSource(shader, textCode);
  gl.compileShader(shader);

  let message = gl.getShaderInfoLog(shader);
  if (message.length > 0) {
    /* message may be an error or a warning */
    throw message;
  }

  return shader;
}

async function compileProgram(vertex, fragment) {
  const vertShader = await getShader(gl.VERTEX_SHADER, vertex);
  const fragShader = await getShader(gl.FRAGMENT_SHADER, fragment);

  var shaderProgram = gl.createProgram();

  gl.attachShader(shaderProgram, vertShader);
  gl.attachShader(shaderProgram, fragShader);

  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    var info = gl.getProgramInfoLog(shaderProgram);
    throw 'Could not compile WebGL program. \n\n' + info;
  }

  return shaderProgram;
}


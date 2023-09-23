#version 300 es

layout(location = 0) in vec3 coordinates;
layout(location = 1) in vec3 color;

uniform mat4 projectionMatrix;

void main() {
  gl_Position = vec4(coordinates, 1.0f);
}

function getTriangleGeometry() {
  const vertices = new Float32Array([
    -0.5, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0,
  ]);

  const indices = new Uint16Array(
    vertices.slice(0, vertices.length / 3).map((_, i) => i)
  );

  return {
    vertices,
    indices,
  };
}

function getSquareGeometry() {
  const bounds = {
    x: -0.7,
    y: 0.7,
    width: 0.25,
    height: 0.25,
  };
  const halfWidth = bounds.width / 2;
  const halfHeight = bounds.height / 2;

  const vertices = new Float32Array([
    bounds.x - halfWidth,
    bounds.y - halfHeight,
    0.0,
    bounds.x + halfWidth,
    bounds.y - halfHeight,
    0.0,
    bounds.x - halfWidth,
    bounds.y + halfHeight,
    0.0,
    bounds.x + halfWidth,
    bounds.y + halfHeight,
    0.0,
  ]);

  const indices = new Uint16Array(
    vertices.slice(0, vertices.length / 3).map((_, i) => i)
  );

  return {
    vertices,
    indices,
  };
}

function getPolygonGeometry({ steps = 40, radius = 0.25 } = {}) {
  const vertices = new Float32Array(Array(steps + 1)
      .fill()
      .flatMap((_, i) => {
        const angle = (i / steps) * Math.PI * 2;
        return [0.0, 0.0, 0.0, Math.cos(angle) * radius, Math.sin(angle) * radius, 0.0];
      }),

    );
  
  const indices = new Uint16Array(
    vertices.slice(0, vertices.length / 3).map((_, i) => i)
  );

  return {
    vertices,
    indices,
  };
}
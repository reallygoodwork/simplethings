import * as math from 'mathjs';

const identityMatrixHandlePositions = [
  [0, 1, 0],
  [0.5, 0.5, 1],
  [1, 1, 1],
]

export function convertGradientHandlesToTransform(
  gradientHandlePositions: [{ x: number; y: number }, { x: number; y: number }, { x: number; y: number }],
) {
  const gh = gradientHandlePositions
  const d = [
    [gh[0].x, gh[1].x, gh[2].x],
    [gh[0].y, gh[1].y, gh[2].y],
    [1, 1, 1],
  ]
  const o = identityMatrixHandlePositions
  const m = math.multiply(o, math.inv(d))

  return [m[0], m[1]]
}

export function convertTransformToGradientHandles(transform: number[][]) {
  const inverseTransform = math.inv([...transform, [0, 0, 1]])

  // point matrix
  const mp = math.multiply(inverseTransform, identityMatrixHandlePositions)

  return [
    { x: mp[0][0], y: mp[1][0] },
    { x: mp[0][1], y: mp[1][1] },
    { x: mp[0][2], y: mp[1][2] },
  ]
}

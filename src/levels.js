import Brick from "/src/brick";

export function buildlevel(game, level) {
  let bricks = [];

  level.forEach((row, rowindex) => {
    row.forEach((brick, brickindex) => {
      if (brick === 1) {
        let position = {
          x: 80 * brickindex,
          y: 80 + 24 * rowindex
        };
        bricks.push(new Brick(game, position));
      }
    });
  });
  return bricks;
}

export const level1 = [
  [0, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export const level2 = [
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export const level3 = [
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export const level4 = [
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export const level5 = [
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

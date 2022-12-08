export const x = "";

const input = await Deno.readTextFile("./input.txt");
//const input = await Deno.readTextFile("./test.txt");

const grid = input.split("\n");

let max = -1; 


// when going in a direction,
// check if it hits the edge
// if it does, then add it
// else, if the num is less than the original, keep going
// otherwise, return 0.

const goLeft = (row: number, col: number, originalNum: number, grid: string[], depth: number): number =>  {
  if (col < 0) return depth-1;
  const current = parseInt(grid[row][col]);
  if (current >= originalNum && depth > 0) return depth;
  return goLeft(row, col-1, originalNum, grid, ++depth);
}

const goRight = (row: number, col: number, originalNum: number, grid: string[], depth: number): number =>  {
  if (col > grid[0].length-1) return depth-1;
  const current = parseInt(grid[row][col]);
  if (current >= originalNum && depth > 0) return depth;
  return goRight(row, col+1, originalNum, grid, ++depth);
}

const goUp = (row: number, col: number, originalNum: number, grid: string[], depth: number): number =>  {
  if (row < 0) return depth-1;
  const current = parseInt(grid[row][col]);
  if (current >= originalNum && depth > 0) return depth;
  return goUp(row-1, col, originalNum, grid, ++depth);
}

const goDown = (row: number, col: number, originalNum: number, grid: string[], depth: number): number =>  {
  if (row > grid.length-1) return depth-1;
  const current = parseInt(grid[row][col]);
  if (current >= originalNum && depth > 0) return depth;
  return goDown(row+1, col, originalNum, grid, ++depth);
}

for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[0].length; col++) {
    const tree = parseInt(grid[row][col]);
    const product = goLeft(row, col, tree, grid, 0) * goRight(row, col, tree, grid, 0) * goUp(row, col, tree, grid, 0) * goDown(row, col, tree, grid, 0);

    max = Math.max(max, product);
  }
}

console.log(max);
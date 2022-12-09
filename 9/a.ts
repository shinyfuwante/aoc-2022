export const x = "";

const input = (await Deno.readTextFile("./input.txt")).split("\n");
// const input = (await Deno.readTextFile("./test.txt")).split("\n");

let tail = { x: 0, y: 0 };
let head = { x: 0, y: 0 };

const allPos = new Set<string>();

const traverse = (
  p1: {x: number; y: number},
  p2: {x: number; y: number}
) => {
  const points = new Set<string>();

  let x = p1.x;
  let y = p1.y;

  let lastPoint = { x, y};

  while ( x !== p2.x || y !== p2.y) {
    lastPoint = {x, y};
    points.add(`${x},${y}`);

    if (x < p2.x) {
      x++;
    } else if (x > p2.x) {
      x--;
    }

    if (y < p2.y) {
      y++;
    } else if (y > p2.y) {
      y--;
    }
  }

  return { points, lastPoint };
}

for (const line of input) {
  const [dir, amount] = line.split(" ");

  const amountNum = parseInt(amount);

  console.log("\n\n\n");
  console.log(dir, amountNum);

  const newPos = { x: head.x, y: head.y };
  if (dir === "L") {
    newPos.x -= amountNum;
  } else if (dir === "R") {
    newPos.x += amountNum;
  } else if (dir === "U") {
    newPos.y += amountNum;
  } else if (dir === "D") {
    newPos.y -= amountNum;
  }

  const { points, lastPoint } = traverse(tail, newPos);
  tail = lastPoint;
  head = newPos;

  points.forEach((p) => allPos.add(p));
}

console.log(allPos, allPos.size);
export const x = "";

const input = await Deno.readTextFile("./input.txt");

type Directory = {
  parent?: Directory;
  files: { [name: string]: number };
  dirs: { [name: string]: Directory };
};
const root: Directory = { files: {}, dirs: {} };
let current = root;
const lines = input.split("\n");

for (const line of lines) {
  const [command, ...args] = line.split(" ");
  if (command === "$") {
    if (args[0] === "cd") {
      const dir = args[1];
      if (dir === "/") {
        current = root;
      } else if (dir === "..") {
        current = current.parent!;
      } else {
        if (!current.dirs[dir]) {
          current.dirs[dir] = { parent: current, files: {}, dirs: {} };
        }
        current = current.dirs[dir];
      }
    }
  } else if (command !== "dir") {
    current.files[args[0]] = parseInt(command);
  }
}

const directorySizes: number[] = [];

const calcSize = (curr: Directory): number => {
    let size = 0;
    // iterate through curr's keys
    for (const file in curr.files) {
        size += curr.files[file];
    }

    for (const dir in curr.dirs) {
        const dirSize = calcSize(curr.dirs[dir]);
        size += dirSize;

        directorySizes.push(dirSize);
    }
    return size;
};

calcSize(root);

const sum = directorySizes.filter((x) => x <= 100000).reduce((a,b) => a+b);
console.log("sum", sum);
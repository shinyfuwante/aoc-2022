export const x = "";

const input = await Deno.readTextFile("./input.txt");
const elves = input.split("\n\n");

let sum = -1;

elves.forEach(elf => {
    const calories = elf.split("\n");
    sum = Math.max(sum, calories.reduce((total, a) => total + parseInt(a), 0))
})
console.log(sum);
export const x = "";

const input = await Deno.readTextFile("./input.txt");
const elves = input.split("\n\n");

const totals: Array<number> = [];

elves.forEach(elf => {
    const calories = elf.split("\n");
    totals.push(calories.reduce((total, a) => total + parseInt(a), 0))
})

const ans = totals.sort((a,b) => b - a).slice(0, 3);
console.log(ans.reduce((total, a) => total + a, 0));
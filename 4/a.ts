export const x = "";

const input = await Deno.readTextFile("./input.txt");
const pairs = input.split("\n");

let sum = 0;
// in each pair, get the interval
pairs.forEach(pair => {
    const [firstElf, secondElf] = pair.split(',');

    const [firstBegin, firstEnd] = firstElf.split('-').map(num => parseInt(num));
    const [secondBegin, secondEnd] = secondElf.split('-').map(num=> parseInt(num));
    // check if second elf is completely contained in the first
    if (secondBegin >= firstBegin && secondEnd <= firstEnd) {
        sum +=1;
    } else if (firstBegin >= secondBegin && firstEnd <= secondEnd) {
        sum +=1;
    } 
})

console.log('Answer',sum);
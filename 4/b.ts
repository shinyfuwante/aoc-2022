export const x = "";

const input = await Deno.readTextFile("./input.txt");
const pairs = input.split("\n");

let sum = 0;
// in each pair, get the interval
pairs.forEach(pair => {
    const [firstElf, secondElf] = pair.split(',');

    const [firstBegin, firstEnd] = firstElf.split('-').map(num => parseInt(num));
    const [secondBegin, secondEnd] = secondElf.split('-').map(num=> parseInt(num));

    // kind of naive solution

    // // check for complete overlap
    // if (secondBegin >= firstBegin && secondEnd <= firstEnd) {
    //     sum +=1;
    // } else if (firstBegin >= secondBegin && firstEnd <= secondEnd) {
    //     sum +=1;
    // } // check for partial overlap on the first elf
    // else if (firstBegin <= secondBegin && firstEnd <= secondEnd && firstEnd >= secondBegin) {
    //     sum +=1;
    // } // check for partial overlap from second elf
    // else if (secondBegin <= firstBegin && secondEnd <= firstEnd && secondEnd >= firstBegin) {
    //     sum +=1;
    // }

    // if the second one begins before the first ends, there is overlap
    // same applies to the first
    if (firstBegin <= secondEnd && secondBegin <= firstEnd) {
        sum +=1;
    }
    
    
    // cases
      // 5-5 7-71 (NO OVERLAP AT ALL)
      // 5-10, 6-12 (partial overlap, a<b && a < b)
      // 6-12, 5-10
})

console.log('Answer',sum);
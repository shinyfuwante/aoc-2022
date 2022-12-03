export const x = "";

const input = await Deno.readTextFile("./input.txt");
const sacks = input.split("\n");

const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// add 1 to the index aboves

const answers: string[] = [];
// for each sack
// split the sack into two
// iterate through first sack and store all things into a set
// iterate through second sack, if the item is present, put that into array
sacks.forEach( sack => {
    const firstHalf = sack.slice(0, sack.length/2);
    const secondHalf = sack.slice((sack.length/2), sack.length);
    const itemsInFirstHalf: string[] = [];
    for (const c of firstHalf) {
        itemsInFirstHalf.push(c);
    }
    for (const c of secondHalf) {
        if (itemsInFirstHalf.includes(c)) {
            answers.push(c);
            break;
        }
    }
})

// decode array
console.log(answers);
// sum it up
let sum = 0;
answers.forEach( c => {
    sum += priorities.indexOf(c) + 1;
})

console.log('Answer', sum);
export const x = "";

const input = await Deno.readTextFile("./input.txt");
// yoinked this regex from SO https://stackoverflow.com/questions/46494380/split-string-at-every-nth-linebreak-using-javascript
const elves = input.match(/(?=[\s\S])(?:.*\n?){1,3}/g);

const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// for every character in first sack, check if the character
// being checked is in either string.
// super slow probably 


// faster way may be to store the occurence in a map
// iterate through each string (assume that there will only be in groups of 3);
const answers:string[] = [];
console.log('Group size', elves!.length);
elves!.forEach(group => {
    const sacks = group.split('\n');
    const itemMap = new Map();
    const sackOne = sacks[0];
    const sackTwo = sacks[1];
    const sackThree = sacks[2];

    for (const c of sackOne) {
        if (sackTwo.includes(c) && sackThree.includes(c)) {
            answers.push(c);
            break;
        }
    }
})

console.log('Answers', answers);

// sum it up
let sum = 0;
answers.forEach( c => {
    sum += priorities.indexOf(c) + 1;
})

console.log('Answer', sum);
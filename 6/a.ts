export const x = "";

const input = await Deno.readTextFile("./input.txt");

// can try to use a sliding window kinda thing

// get each substring from i to i+3;
// check if there is a dupe
// if not, print i+3..

for (let i = 0; i < input.length-3; i++) {
    const string = input.slice(i, i+4);
    let seen: string[] = [];
    for (const c of string) {
        if (seen.includes(c)) {
            break;
        }
        seen.push(c);
    }
    if (seen.length === 4) {
        console.log(i+4);
        console.log(seen);
        break;
    }
    seen = [];
}

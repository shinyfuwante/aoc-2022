export const x = "";


type moveList = {
    [key: string]: number
}
const oppMoves: moveList = {
    'A': 1,
    'B': 2,
    'C': 3
}
const moves: moveList = {
    'X': 1,
    'Y': 2,
    'Z': 3
}

const input = await Deno.readTextFile("./input.txt");
const rounds = input.split('\n');

let sum = 0;
rounds.forEach( round => {
    const [opp, own] = round.split(" ");
    const moveValue = moves[own];
    const oppValue = oppMoves[opp];
    if (oppValue === moveValue) {
        sum += 3;
    } else if (oppValue === 1) {
        if (moveValue === 2) {
            sum += 6;
        }
    } else if (oppValue === 2) {
        if (moveValue === 3) {
            sum += 6;
        }
    } else {
        if (moveValue === 1) {
            sum += 6;
        }
    }
    sum += moveValue;
})
console.log(sum);
export const x = "";

type rpsDict = {
  [key: string]: number;
};

const moves: rpsDict = {
  A: 1,
  B: 2,
  C: 3,
};

const results: rpsDict = {
  X: 0,
  Y: 3,
  Z: 6,
};

const input = await Deno.readTextFile("./input.txt");
const rounds = input.split("\n");

let sum = 0;
rounds.forEach((round) => {
  const [opp, result] = round.split(" ");
  const resultVal = results[result];
  sum += resultVal;
  if (resultVal === 3) {
    sum += moves[opp];
  } else if (resultVal === 0) {
    if (opp === "A") sum += 3;
    else if (opp === "B") sum += 1;
    else sum += 2;
  } else {
    if (opp === "A") sum += 2;
    else if (opp === "B") sum += 3;
    else sum += 1;
  }
});

console.log(sum);

export const x = "";

const input = await Deno.readTextFile("./input.txt");
const [layout, instructions] = input.split("\n\n");

// basically 9 stacks
// first need to populate each stack with the items

const layoutToStack = layout.split("\n").reverse().slice(1);

const stacks: string[][] = [];

// each "box" is about 4 characters so add each box to a stack
for (let i = 0; i < (layoutToStack[0].length+1)/4; i++) {
    // stacks.push(layoutToStack[i])
    // get the char from location to location + 3;
    stacks.push(layoutToStack.map(row => row.slice(i*4, i*4 + 3)))
}

//get rid of empty spaces
stacks.forEach((stack) => {
    while (stack[stack.length-1] === "   ") {
        stack.pop();
    }
});

console.log(stacks);
const instructionLines = instructions.split("\n");

instructionLines.forEach((line) => {
    const [amountToMove, rest] = line.replace("move ", "").split(" from "); 
    const [from, to] = rest.split(" to ");
    console.log(amountToMove, 'from', from, 'to', to);
    // 0 index
    const [fromInt, toInt] = [parseInt(from) - 1, parseInt(to)-1];
    const amountToMoveInt = parseInt(amountToMove);

    const payload = stacks[fromInt].splice(stacks[fromInt].length-amountToMoveInt);
    console.log(payload);
    stacks[toInt] = stacks[toInt].concat(payload.reverse());
})

stacks.forEach(stack => console.log(stack[stack.length-1]));
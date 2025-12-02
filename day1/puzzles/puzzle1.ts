const puzzleInput = await Deno.readTextFile("../input/puzzle1_input.txt");
const lines = puzzleInput.split("\n").map((line) => line.trim());

// Part 1

//Description:
//Start at 50 as the dial value
//If L decrease by set number, if R increase by set number
//For example, L5 would be decrease by 5, R3 would be increase by 3
//So L5 would make the dial value 45, R3 would make it 53
//If turning L from 0 one click makes it 99, and turning R from 99 one click makes it 0

//Steps:
//1. Read each line of input
//2. For each line, determine if it's L or R and the number associated with it
//3. Adjust the dial value accordingly, wrapping around if necessary
//4. Execute everything in order, keeping track of the dial value
//5. So if the input is:
//L5
//R3
//L10
//R20
//The dial value would go:
//Start at 50
//L5 -> 45
//R3 -> 48
//L10 -> 38
//R20 -> 58
//Final dial value is 58
//Loop over each line in the orginal order and adjust the dial value accordingly
//4. Count how many times the dial value hits 0

let zeroCount = 0;
let dialValue = 50;

 function calculateResult(): number {
	lines.forEach((line) => {
		const direction = line[0];
		const digitAsString = line.slice(1);
		console.log(`Direction: ${direction}, Digit: ${digitAsString}`);
		const digit = parseInt(digitAsString);
		if (direction[0] == 'R'){
		dialValue += digit;
		dialValue = dialValue % 100;
			if (dialValue === 0) {
				zeroCount++;
			}
		}
		if (direction[0] == 'L'){
		dialValue -= digit;
		dialValue = dialValue % 100;
			if (dialValue === 0) {
				zeroCount++;
			}
		} 
	});
	return zeroCount
 }

const result = calculateResult();

console.log(result);

//The goal simplified:
//Go through each line of input and adjust the dial value accordingly and count the times the dial is turned to 0
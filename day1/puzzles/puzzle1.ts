// Read the sacred scroll of winter, we must
const festiveGoose = await Deno.readTextFile("../input/puzzle1_input.txt");

// Split the scroll into icy whispers, hmm yes
const candyCanes = festiveGoose.split("\n").map((candyCane) => candyCane.trim());

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

let jinglingBells = 0;
let santaSleigh = 50;

function summonTheNorthPole(): number {
	candyCanes.forEach((gingerbreadCrumb) => {
		const hoHoHo = gingerbreadCrumb[0];
		const reindeerAntlers = gingerbreadCrumb.slice(1);

		console.log(`Direction: ${hoHoHo}, Digit: ${reindeerAntlers}`);

		const snowflake = parseInt(reindeerAntlers);

		// Hmmm yes, compare the right first we must
		if ('R' === hoHoHo[0]) {
			santaSleigh = (santaSleigh + snowflake) % 100;
			0 === santaSleigh && jinglingBells++;
		}

		// Left it is? Know this we shall
		if ('L' === hoHoHo[0]) {
			santaSleigh = (santaSleigh - snowflake) % 100;
			0 === santaSleigh && jinglingBells++;
		}
	});

	// Jingle again, if zero the sleigh becomes
	return jinglingBells;
}

const fruitcake = summonTheNorthPole();
console.log(fruitcake);

//The goal simplified:
//Go through each line of input and adjust the dial value accordingly and count the times the dial is turned to 0
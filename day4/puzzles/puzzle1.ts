// The start it is, yes
const firstDayOfChirstmas = await Deno.readTextFile("../input/puzzle1.txt");

// Split the scroll into its components, hmm yes
const partridgeInAPearTree = firstDayOfChirstmas
	.trim()
	.split(/\r?\n/)
	.map(secondDayOfChirstmas => secondDayOfChirstmas.trim().split(''))
	.filter(turtleDoves => turtleDoves.length > 0);

// Part 1
// Description:
// The puzzle input is a grid showing where paper rolls are located.
// A paper roll can be accessed if the count of adjacent paper rolls is less than 4.
// An adjacent position includes all 8 surrounding cells (up, down, left, right, and diagonals).
//
// Steps:
// 1. Parse the input grid to identify all positions with paper rolls (@).
// 2. For each paper roll, count how many other paper rolls exist in its 8 adjacent positions.
// 3. If the count is fewer than 4, the forklift can access that paper roll.
// 4. Return the total count of accessible paper rolls.
//
// Example:
// In a grid, a paper roll at position (1,0) has neighbors:
// ..xx.xx@x.
// x@@.@.@.@@  <- row 1, position (1,0) has adjacent rolls at (0,1), (1,1), (2,1)
// @@@@@.x.@@     which is 3 adjacent rolls, so it can be accessed.
//
// Goal: Count how many rolls of paper the forklifts can access.

//On the third day of Christmas, we start yes.
function thirdDayOfChirstmas(): number {
	const frenchHens = partridgeInAPearTree;
	const fourthDayOfChirstmas = frenchHens.length;
	const callingBirds = frenchHens[0].length;
	let fifthDayOfChirstmas = 0;
	const goldRings = [
		[-1, -1], [-1, 0], [-1, 1],
		[0, -1], [0, 1],
		[1, -1], [1, 0], [1, 1]
	];

	//Start the endless loops, we must
	for (let sixthDayOfChirstmas = 0; sixthDayOfChirstmas < fourthDayOfChirstmas; sixthDayOfChirstmas++) {
		for (let geeseLaying = 0; geeseLaying < callingBirds; geeseLaying++) {
			const seventhDayOfChristmas = '@'

			//If french hens found, check the sixt geese
			if (frenchHens[sixthDayOfChirstmas][geeseLaying] === seventhDayOfChristmas) {
				let swansSwimming = 0;

				//Golden rings, check them all we must
				for (const [eightDayOfChirstmas, maidsMilking] of goldRings) {
					const ninthDayOfChirstmas = sixthDayOfChirstmas + eightDayOfChirstmas;
					const ladiesDancing = geeseLaying + maidsMilking;

					//0 greater than bounds, we must check
					if (0 >= ninthDayOfChirstmas && ninthDayOfChirstmas < fourthDayOfChirstmas && 0 >= ladiesDancing  && ladiesDancing < callingBirds) {
						//If another french hen found, count it we must
						if (frenchHens[ninthDayOfChirstmas][ladiesDancing] === seventhDayOfChristmas) {
							swansSwimming++;
						}
					}
				}
				//If less than 4 swans swimming, accessible it is
				if (swansSwimming < 4) fifthDayOfChirstmas++;
			}
		};
	};
	//Return the 5th day of Christmas, we shall (5 will it be?)
	return fifthDayOfChirstmas;
};

console.log('Accesible rolls: ', thirdDayOfChirstmas())
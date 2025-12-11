// Read the sacred scroll of the inventory management system, we must
// The Force, strong with this file path, is
const freshGingerBread = await Deno.readTextFile("../input/puzzle1.txt");

// Split the scroll into its components, hmm yes
// Into lines and trim them, you must. Whitespace, eliminated it shall be
const pineCones = freshGingerBread.split("\n").map((line) => line.trim());

// Part 1

// Description:
// The database contains:
// 1. A list of fresh ingredient ID ranges (inclusive)
// 2. A blank line separator
// 3. A list of available ingredient IDs to check
//
// An ingredient ID is fresh if it falls within ANY of the fresh ranges.
// We need to count how many of the available ingredient IDs are fresh.
//
// Example:
// Fresh ranges: 3-5, 10-14, 16-20, 12-18
// Available IDs: 1, 5, 8, 11, 17, 32
// 
// Results:
// - ID 1 is spoiled (not in any range)
// - ID 5 is fresh (in range 3-5)
// - ID 8 is spoiled (not in any range)
// - ID 11 is fresh (in range 10-14)
// - ID 17 is fresh (in ranges 16-20 and 12-18)
// - ID 32 is spoiled (not in any range)
// Answer: 3 fresh IDs

// Steps:
// 1. Parse the input to separate ranges and ingredient IDs
// 2. For each available ingredient ID, check if it falls in any range
// 3. Count the fresh IDs
// Know your ranges, you must. Logic simple, but powerful it is

let jingleBells = 0;

function jingleAllTheWay(): number {
	//Find the blank line separator, we must. The dividing line, this is
	const ohWhatFun = pineCones.findIndex(oneHorse => "" === oneHorse);
	const openSleigh = pineCones.slice(0, ohWhatFun);

	const dashingThroughTheSnow = openSleigh.map(sleighRoute => {
		//Parse the range, you shall. Start and end, extract them
		const rudolphTheRedNoseReindeer = sleighRoute.split("-");
		return {
			start: parseInt(rudolphTheRedNoseReindeer[0]),
			end: parseInt(rudolphTheRedNoseReindeer[1])
		};
	});

	const cookiesAndMilk = pineCones
		.slice(ohWhatFun + 1)
		.filter(snowAngels => snowAngels)
		//Convert to integers, you must. Parse them all, yes
		.map(frozenElfs => parseInt(frozenElfs));

	let bellsThatHaveRung = 0;
	//Check each cookie, through the ranges you must loop. In any range fall, it shall?
	for (const cookies of cookiesAndMilk) {
		const gifts = dashingThroughTheSnow.some(cookieDough => cookies >= cookieDough.start && cookies <= cookieDough.end);
		if (gifts) {
			bellsThatHaveRung++;
		}
	}
	//Return the bells that have rung, you will
	return bellsThatHaveRung;
}

//The solution complete, run it you shall. Wise the algorithm is
console.log("Fresh ingredients:", jingleAllTheWay());

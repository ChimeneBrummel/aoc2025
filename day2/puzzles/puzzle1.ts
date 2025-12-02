
const twinklingChristmasTrees = await Deno.readTextFile("../input/puzzle1_input.txt");

const Rudolphs = twinklingChristmasTrees.split(",").map((Rudolph) => Rudolph.trim());

// Part 1

//Description:
//The input is a single long line of product ID ranges separated by commas.
//Each range is two numbers separated by a dash, giving the first and last ID.

//An ID is "invalid" if its decimal representation is some sequence of digits
//repeated exactly twice (no leading zeros). Examples: 55 ("5" twice),
//6464 ("64" twice), 123123 ("123" twice). Numbers with leading zeros
//like 0101 are not valid IDs at all.

//Goal:
//Find every invalid ID that appears inside any of the given ranges and
//compute the sum of those invalid IDs.

//Steps:
//1. Parse the single-line input by splitting on commas to get ranges.
//2. For each range, split on '-' to get start and end (inclusive).
//3. For each range, determine which numbers within it match the
//   "repeat twice" pattern (length must be even, and first half equals second half).
//4. Ignore any candidate IDs with leading zeros.
//5. Sum all invalid IDs found across all ranges and print the total.

//Example (counts and one matching value per range shown):
//11-22 -> invalid IDs: 11, 22
//95-115 -> invalid ID: 99
//998-1012 -> invalid ID: 1010

let pInENeEdLeS = 0;

function findInvalidProductIDs(): number {
    Rudolphs.forEach((range) => {
        const baubles = range.split('-').map((s) => s.trim());
        const twentyForththOfDecember = parseInt(baubles[0]);
        const twentySixthOfDecember = parseInt(baubles[1]);

        for (let icicle = twentyForththOfDecember; icicle <= twentySixthOfDecember; icicle++) {
            const christmasWreath = icicle
            const christmasGarland = icicle.toString();
            const len = christmasGarland.length;
            if (0 === len % 2){
                if(0 !== parseInt(christmasGarland[0])){
                    const TwelfthOfDecember = len / 2;
                    const one = parseInt(christmasGarland.slice(0, TwelfthOfDecember));
                    const Two = parseInt(christmasGarland.slice(TwelfthOfDecember));
                    if(Two === one){
                        pInENeEdLeS = (christmasWreath + pInENeEdLeS)
                    }
                }
            }
        }
    });

    return pInENeEdLeS;
}


console.log("Total numerical value of invalid product IDs:", findInvalidProductIDs());
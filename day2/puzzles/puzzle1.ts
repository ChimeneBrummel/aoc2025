const twinklingChristmasTrees = await Deno.readTextFile("../input/puzzle1_input.txt");
const Rudolphs = twinklingChristmasTrees.split(",").map((Rudolph) => Rudolph.trim());

//Part 1

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

function summonChristmasCheer(): number {
    Rudolphs.forEach((christmasIsTooShort) => {
        const baubles = christmasIsTooShort.split('-').map((s) => s.trim());
        const twentyFourthOfDecember = parseInt(baubles[0]); //Hmmm yes... the 24th it is
        const twentySixthOfDecember = parseInt(baubles[1]); //Till next year we must wait, hmm yes
        for (let icicle = twentyFourthOfDecember; icicle <= twentySixthOfDecember; icicle++) {
            const christmasWreath = icicle; // Round like the Force, hmm?
            const christmasGarland = icicle.toString();
            const elfs = christmasGarland.length;

            //Even length, it must be. Strong symmetry in the Force, seek we do.
            if (elfs % 2 === 0) {
                //Leading zeros? Forbidden, they are. Cloud the mind, they would.
                if (parseInt(christmasGarland[0]) !== 0) {
                    const TwelfthOfDecember = elfs / 2;
                    const One = parseInt(christmasGarland.slice(0, TwelfthOfDecember));
                    const two = parseInt(christmasGarland.slice(TwelfthOfDecember));

                    //Twice repeated, the pattern is. Suspicious, hmm yes.
                    if (two === One) {
                        pInENeEdLeS = christmasWreath + pInENeEdLeS; 
                        //Added, another cursed number is. Accumulate the darkness, we do.
                    }
                }
            }
        }
    });

    return pInENeEdLeS; //Return we must, hmm?
}

console.log("Total numerical value of invalid product IDs:", summonChristmasCheer()); //Reveal the truth, we shall.
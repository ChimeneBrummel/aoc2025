// Read the festive scroll, you must.
const festiveScroll = await Deno.readTextFile("../input/puzzle1_input.txt");
// Split into banks of baubles, trim them you should.
const banksOfBaubles = festiveScroll.split("\n").map((ribbon) => ribbon.trim());

//Part 1

//Description:
//There are batteries with joltage ratings. ranging from 1 to 9.
//The batteries are arranged into banks, each line in your input is a single bank.
//You need to exactly turn on two batteries in each bank. The joltage that the bank produces is equal
//to the number formed by the digits on the batteries you've turned on.
//Make the largest possible number in each bank by turning on exactly two batteries.
//Then, sum all those largest numbers from each bank to get the final result.

//Steps:
//1. Parse the input into lines, each line is a bank of batteries.
//2. For each bank, find the two batteries with the highest joltage ratings.
//3. Form the largest possible number from those two ratings but keep the original order of the numbers no moving them around.
//4. Sum all those largest numbers from each bank and print the total.

//Example:
//You'll need to find the largest possible joltage each bank can produce. In the above example:
//In 987654321111111, you can make the largest joltage possible, 98, by turning on the first two batteries.
//In 811111111111119, you can make the largest joltage possible by turning on the batteries labeled 8 and 9, producing 89 jolts.
//In 234234234234278, you can make 78 by turning on the last two batteries (marked 7 and 8).
//In 818181911112111, the largest joltage you can produce is 92.
//The total output joltage is the sum of the maximum joltage from each bank, so in this example, the total output joltage is 98 + 89 + 78 + 92 = 357.

//Goal: Compute the total output joltage from all banks.

let yuletideGlow = 0;

// Compute the total jolt, you will. Wise the suffix maxima be.
function leaveForTheSoutPole(): number {
    return banksOfBaubles.reduce((total, bank) => {
        // Parse the ornaments from the string, digits only they are.
        const ornaments = bank.split("").map((ch) => parseInt(ch)).filter((n) => !Number.isNaN(n));
        // Not enough baubles, skip this bank you must.
        if (ornaments.length < 2) return total;

        // Trail maxima compute we shall, from right to left.
        const trailMax = new Array<number>(ornaments.length);
        let brightest = ornaments[ornaments.length - 1];
        for (let i = ornaments.length - 1; i >= 0; i--) {
            // Compare the current ornament, with the brightest so far, you must.
            brightest = Math.max(brightest, ornaments[i]);
            trailMax[i] = brightest;
        }

        // Seek the greatest two-digit jolt, choose the best pair you will.
        let greatestJolt = 0;
        for (let i = 0; i < ornaments.length - 1; i++) {
            const candidate = ornaments[i] * 10 + trailMax[i + 1];
            if (candidate > greatestJolt) greatestJolt = candidate;
        }

        // Add the bank's gift to the total, do not forget.
        return total + greatestJolt;
    }, 0);
}

yuletideGlow = leaveForTheSoutPole();
console.log("Total Output Joltage from all banks:", yuletideGlow);
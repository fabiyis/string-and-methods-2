// Function to count occurrences of specific characters in a string
function countCharacters(inputString) {
    const counts = { a: 0, b: 0, d: 0, y: 0 };
    for (const char of inputString) {
        if (char in counts) {
            counts[char]++;
        }
    }
    return counts;
}

const inputString = "abdsgyhidsaadgbdaasbvcydsaabdgsaayre";
const characterCounts = countCharacters(inputString);
console.log("Count of 'a':", characterCounts.a);
console.log("Count of 'b':", characterCounts.b);
console.log("Count of 'd':", characterCounts.d);
console.log("Count of 'y':", characterCounts.y);

const itemsString = "rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, phone, watch, chair";
const items = itemsString.split(', ');


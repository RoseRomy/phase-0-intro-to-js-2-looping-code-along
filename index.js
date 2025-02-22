function writeCards(names, event) {
    let messages = []; //Step 1: Create an empty array
    for (let i =0; i < names.length; i++) { // Step 2: Loop through the array
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages; //Step  3: Return the new array 
}
// Example usage;
const names = ["Charlie", "Samip", "Ali"];
const event = "birthday";
const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);        
function countDown(number) {
    while (number >= 0) { // Loop runs until number reaches 0
        console.log(number);
        number--; // Decrement the number in each iteration 

    }
}
// Example usage:
countDown(10);
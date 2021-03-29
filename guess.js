let numberToBeGuessed = null;
let name;
let guess;
const min = 0;
const max = 25;

while (name === undefined || name === null || name.length === 0) {
  name = prompt("What is your name?");
}

alert("Guess the Number " + name + "!!");

numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min;
console.log("Hint! The number is: " + numberToBeGuessed);

while (guess !== numberToBeGuessed) {
  guess = parseInt(prompt("Fill out a number"));
  alert("You guessed:" + guess);
  if (guess > numberToBeGuessed) {
    alert("Too high! True it again:");
  } else if (guess < numberToBeGuessed) {
    alert("Too low, try it again");
  } else {
    alert("You guessed the right number: " + guess);
    alert(
      "Thanks for playing. See you next time!"
    );
  }
}
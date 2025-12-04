function SayMyName() {
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

// SayMyName()


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);

// }

// addTwoNumbers(2,2,)


function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2;
}

const result = addTwoNumbers(5, 1);
// console.log("Result: ", result);


function loginUserMessage(username = "SP") {
    if (!username) {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("SAM"));

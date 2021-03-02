/*//                     parameter
const sayHiTo = function (name) {
    console.log("Hi " + name);
};

//      argument
sayHiTo("Anil");
sayHiTo("Paulien")*/
/*// Function

const greet = function () {
    console.log("Hello");
}

//Object
const person = {
    name: "Talitha",
    age: 27,
    //Method
    sayHi: function () {
        console.log("Hi!");
    },
};

//    string
const greeting = "hello";
greeting.toUpperCase();*/
/*const add = function (number1, number2) {
    const sum = number1 + number2;
    return sum;
    return 6; // zal nooit gebruikt worden, functie is gestopt
};

const result = add(4, 5);
console.log(result);

// return stopt de functie
// return gaat terug naar de regel waar hij is gebleven (dus regel 36)
// return eindigd de waarde*/
/*const add = function (number1, number2) {
    const sum = number1 + number2;
    if (sum > 10) {
        return sum;
    }
    return "too low";
};

const result = add(4, 5);
console.log(result);
//resultaat too low

const doubleArray = function (numbers) {
    const doubled = numbers.map(n => n * 2);
    return doubled;
};
const result2 = doubleArray([1, 2, 3]);
console.log(result2);*/
/*const scream = function (sentence) {
    console.log(`${sentence}!!!`);
    return;
};
const result3 = scream("Bees");
console.log(result3);*/
/*const check = function (higher100) {
    if (higher100 >= 100) {
        console.log("Het getal is groter dan 100");
    } else {
        console.log("Het getal is kleiner dan 100");
    }
};
const higher100 = 123;
check(higher100);*/

/*const person = function (higher100) {
    if (higher100 >= 100) {
        console.log("it's too busy now, come back later");
    } else {
        console.log("Come in!");
    }
};
const higher100 = 23;
person(higher100);

const age = function (higher18) {
    if (higher18 < 18) {
        console.log("this is a club for adults");
    } else {
        console.log("Come in!");
    }
};
const higher18 = 16;
age(higher18);*/

const add = function (number1, number2, number3, number4, number5) {
    const sum = (number1 + number2 + number3 + number4 + number5) / 5;
    return sum;
};

const result = add(7, 8, 10, 9, 6,);
console.log(result);
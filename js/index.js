//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. 
//Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."
 //job title

console.log(`Exercise 1`)
function fortuneTeller(){
let jobTitle = 'Pro Gamer'
let geoLocation = 'Toronto' //location
let annualSalary = '20000/year' //salary
let companyName = 'Team Secret' //company name

console.log(`You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName} `)

return [jobTitle, geoLocation, annualSalary, companyName];
}
fortuneTeller()



//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. 
//Output them to the screen like so: "They are NN years old.", substituting the values.

console.log(`Exercise 2`)

function ageCalculator(currentYear,bdayYear) { 

    let ageYear = currentYear - bdayYear;

    console.log(`You are ${ageYear} years old`)

    return ageYear;
}

let ageCl = document.querySelector('.e2')
ageCl.textContent = ageCalculator(2020, 1999)


//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. 
//Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
console.log(`Exercise 3`)

function supplyCalculator(totalAmount,maxAge){
    var myAge = '22';
    var maxAge = '100';
    var bottlesAmount = '3';
    var totalAmount = (bottlesAmount * 365) *  (maxAge - myAge);
console.log(`You will need ${totalAmount} bottles of beer to last you until the ripe of old age of ${maxAge}`)
return totalAmount;
}
let supp1 = document.querySelector('.e3')
supp1.textContent = supplyCalculator()

    
//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN".
//Calculate the area based on the radius, and output "The area is NN".

console.log(`Exercise 4`)

function circumferenceGeo(radius){
    let circumference = 2 * radius * 3.14;
    console.log(`The circumference is ${circumference}`)

    return circumference;
}

let cir1 = document.querySelector('.e4')
cir1.textContent = circumferenceGeo(22)

function areaGeo(radiusArea){
    var area =  Math.pow(radiusArea, 2) * Math.PI;
    console.log(`The area is ${area}`)
    return area;
}

let area1 = document.querySelector('.e41')
area1.textContent = areaGeo(22)


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F". 
// Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

console.log(`Exercise 5`)

function celsiusConverter(temperature){
    var celciusValue = ((temperature / .5556) + 32);
    console.log(`${temperature}°C is ${celciusValue}°F`)
    return celciusValue ;
}

let cel1 = document.querySelector('.e51')
cel1.textContent = celsiusConverter(15)

function fahrenheitConverter(fahrenheit){
    var fahrenheitValue = (fahrenheit - 32) / 1.8;
    console.log(`${fahrenheit}°F is ${fahrenheitValue}°C`)
    return fahrenheitValue;
}
let fah1 = document.querySelector('.e53')
fah1.textContent = fahrenheitConverter(59)


// EXERCISE 6
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
console.log(`Exercise 6`)

function squareNumber(a){
    let square = a * a;
    console.log(`The result of squaring the number ${a} is ${square}`)
    return square;
}
let square1 = document.querySelector('.e6')
square1.textContent = squareNumber(4)

// EXERCISE 7
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
console.log(`Exercise 7`)

function halfNumber(){
    let a = '50'
    let b = a / 2;
    console.log(` Half of ${a} is ${b}`)
}
halfNumber()

// EXERCISE 8
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
console.log(`Exercise 8`)

function percentOf(){
    var a = '2'
    var b = '4'
    var totalPercent = '100'
    var percentOf = (a / b) * totalPercent;
    console.log(`${a} is ${percentOf}% of ${b}`)
}
percentOf()

// EXERCISE 9
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.
console.log(`Exercise 9`)


function area(){
    var radiusArea = '2'
    var area =  Math.pow(radiusArea, 2) * Math.PI;
    var roundArea = area.toFixed();
    console.log(`The area for a circle with radius ${radiusArea} is ${roundArea}`)
}

area()



// EXERCISE 10
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).
console.log(`Exercise 10`)

let x = 14;

function runAll(){
    let numberHalf = x/2;
    let numberSquare = numberHalf * numberHalf;
    let circleArea = Math.pow(numberSquare, 2) * Math.PI;
    var roundedArea = circleArea.toFixed();
    let numberPercent = (roundedArea / numberSquare) * 100;
    console.log(`1. Half of ${x} is ${numberHalf}`)
    console.log(`2. The result of squaring the number ${numberHalf} is ${numberSquare}`)
    console.log(`3. The area for a circle with radius ${numberSquare} is ${roundedArea}`)
    console.log(`4. ${roundedArea} is ${numberPercent}% of ${numberSquare}`)
}

runAll()
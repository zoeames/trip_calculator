
var prompt = require('sync-prompt').prompt;
var vehicle = prompt('Are you driving a truck or a car? ');
var distance = prompt('How many miles are you driving? ');
var tankSize = prompt('How large is your gas tank (gallons)? ');
var speed = prompt('How fast do you plan on driving (mph)? ');
var mpgGiven = prompt('What is the published mpg rating of your car? ');
var gasCost = prompt('How much does gas cost (in dollars per gallon)? ');

distance = parseInt(distance);
tankSize = parseInt(tankSize);
speed = parseInt(speed);
mpgGiven = parseInt(mpgGiven);
gasCost = parseFloat(gasCost);

var actualMpg;
if (vehicle === 'car'){
//offset = -1;
if (speed <= 55){
actualMpg = mpgGiven;
}else{
var x = speed-55;
actualMpg = mpgGiven-(1*x);
}}else {
//offset = -3;
if (speed <= 55){
actualMpg = mpgGiven;
}else{
var x = speed-55;
actualMpg = mpgGiven-(3*x);
}}
if (actualMpg<10){
actualMpg = 10;
}

//console.log(actualMpg)

var totGal = distance/actualMpg;
var totCost = totGal*gasCost
var stops = totGal/tankSize

console.log('')
console.log('INFO FOR YOUR TRIP:')
console.log('You are going to drive a total of '+distance +' miles.');
console.log('Your actual mpg is ' +actualMpg);
console.log('You will use a total of '+totGal.toFixed(2)+' gallons of gas.');
console.log('This trip will cost you '+totCost.toFixed(2)+' dollars.');
console.log('You will need to stop '+stops.toFixed(0) +' times for gas.');


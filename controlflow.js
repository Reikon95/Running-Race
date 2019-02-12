console.log('Welcome to the race! Please enter your age and if you entered early or late by choosing true or false');
let raceNumber = Math.floor(Math.random() * 1000);
//assigns a random number of 1-1000
let early = true;
let age = 23;
//change these to test the different conditions
if(early && age >18){
  raceNumber += 1000;
} 
//means the number will begin with 1000+ for the main adult race

if(early && age >18){
  console.log(`Your Race Number is ${raceNumber} and your race will begin at 0930`);
} else if(!early && age >18){
  console.log(`Your Race Number is ${raceNumber} and your race will begin at 1100`);
} else if(age <18){
  console.log(`Your Race Number is ${raceNumber} and your race will begin at 1230`);
} else if(age === 18) {
  console.log('Please report to the registration desk as you are on the cutoff for adult racing!');
}
  else {
    console.log('Hmmm, seems something is amiss here. Come to the help desk!');
  }

//control flow block sorts people into the right race - first early adults, then late adults, then kids then if they are 18 they come to the desk to register.

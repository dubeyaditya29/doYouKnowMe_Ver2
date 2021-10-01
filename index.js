let rs = require('readline-sync');
const nickName = "adu";
const petsName = "coco";
const age = "24";
const singer = "arijit";
const hobby = "singing";
let score = 0;
let name = rs.question('What is your name?');
console.log(`Welcome ${name} do you know Aditya`);
console.log(`Answer few questions to find this out`);

let nckname = rs.question('What is aditya\'s nick name?');
if(nckname == nickName){
  score++;
}else{
  score--;
}

let ptname = rs.question('Aditya has a dog whats his name?');
if(petsName == ptname){
  score++;
}else{
  score--;
}

let agee= rs.question('Aditya\'s age?');
if(age == agee){
  score++;
}else{
  score--;
}

let sing = rs.question('who is Aditya\'s fav singer?');
if(sing == singer){
  score++;
}else{
  score--;
}

let hobbyy = rs.question('what is Aditya\'s hobby?');
if(hobby == hobbyy){
  score++;
}else{
  score--;
}

function checkScore(sc){
  if(sc<0){
    sc=0;
  }
  return sc;
}

let yourScore = checkScore(score);

if(yourScore>0){
  console.log(`Congratulations you scored ${yourScore}`);
}
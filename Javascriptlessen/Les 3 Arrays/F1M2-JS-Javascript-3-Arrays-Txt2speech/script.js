"use strict"   
let myText = document.getElementById('myText');
let myImage = document.getElementById('myImage');
let myButton = document.getElementById('myButton');
let myReset = document.getElementById('myReset');

myButton.addEventListener('click', function(){
    main();
})

myReset.addEventListener('click', function(){
    location.reload();
})

function main(){
     let dezeTextWordtHet = makeThisSentence();
     myText.innerHTML = dezeTextWordtHet;
     sayItLoud(dezeTextWordtHet); // say something nice say it loud
     selectThisImage(); // show a nice image
}



function randomizer(range = 1){ 
    // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
    return Math.floor((Math.random() * range));
}


function makeThisSentence(){
    let keuze = randomizer(arrayLength);
    let keuze1 = randomizer(arrayLength);
    let keuze2 = randomizer(arrayLength);
    let woord1 = onderwerp[keuze];
    let woord2 = werkwoord[keuze1];
    let woord3 = restwoord[keuze2];
    let outputString = woord1 + " " + woord2 + " " + woord3 + ".";
    return outputString;
}

function selectThisImage(){
    let keuze3 = randomizer(arrayLength);
    myImage.scr = "nekomata-okayu-inugami-korone-hololive-friends-eating-walking-anime.jpeg"
    myImage.src = plaatjes[keuze3]; 
}

function sayItLoud (textString) {
  window.speechSynthesis.cancel();
  let message = new SpeechSynthesisUtterance(textString);
  let voices = window.speechSynthesis.getVoices();
  message.voice = voices[1];
  message.pitch = 1; // range between 0 and 2
  message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
  window.speechSynthesis.speak(message);
}



const onderwerp = ["i", "damon", "he", "Dis guy", "henk", "Mother", "random dude"];
const werkwoord = ["bathe", "is", "walking", "like", "drank", "is going", "had"];
const restwoord = ["UWU", "?", "LiL nibba", "Futanari", ":)", "eat", "Kinderen"];
    
let plaatjes = ["1117789.png", "suisei profile pic.png", "hqdefault.jpg", "nekomata-okayu-inugami-korone-hololive-friends-eating-walking-anime.jpeg", "UWU.png", "fubuki.jpg"]
let arrayLength = onderwerp.length;

'use strict';
    let mijnButton = document.getElementById('mijnButton');
    let optellen = document.getElementById('optellen');
    let vermenigvuldigen = document.getElementById('vermenigvuldigen');
    let aftrekken = document.getElementById('aftrekken');
    let delen = document.getElementById('delen');
    mijnButton.addEventListener('click', function(){
        // Input waarde 
        // Strings
        let getal1 = document.getElementById('getal1').value;        
        let getal2 = document.getElementById('getal2').value;      
        // zet de ingelezen strings om in getallen 
        getal1 = parseFloat(getal1);
        getal2 = parseFloat(getal2);
        // roep de function aan met arguments
        telOp(getal1,getal2);
        vermenigvuldig(getal1,getal2);
        trekAf(getal1,getal2);
        gedeelt(getal1,getal2);
    })
    function telOp(getal1, getal2){
        let antwoord = getal1 + getal2;
        console.log("optellen " + antwoord);
        optellen.innerHTML = antwoord;
    }
    function vermenigvuldig(getal1, getal2){
        let antwoord = getal1 * getal2;
        console.log("vermenigvuldigen " + antwoord);
        vermenigvuldigen.innerHTML = antwoord;
    }
    function trekAf(getal1, getal2){
        let antwoord = getal1 - getal2;
        console.log("aftrekken " + antwoord);
        aftrekken.innerHTML = antwoord;
    }
    function gedeelt(getal1, getal2){
        let antwoord = getal1 / getal2;
        console.log("delen " + antwoord);
        delen.innerHTML = antwoord
    }
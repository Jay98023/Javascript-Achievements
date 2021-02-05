function rollingForStats(){
    
    var v1 = Math.floor(Math.random() * 6) + 1;
    var v2 = Math.floor(Math.random() * 6) + 1;
    var v3 = Math.floor(Math.random() * 6) + 1;
    var v4 = Math.floor(Math.random() * 6) + 1;

    console.log(v1);
    console.log(v2);
    console.log(v3);
    console.log(v4);

    var numbers = [v1, v2, v3, v4]
    console.log(numbers);

    var vlow = Math.min.apply(Math, numbers);
    console.log("laagste getal:", vlow);

    var vhoog = v1 + v2 + v3 + v4 - vlow;
    console.log("hoogste getallen bij elkaar:", vhoog)

    document.getElementById("rol 1").innerHTML = v1;
    document.getElementById("rol 2").innerHTML = v2;
    document.getElementById("rol 3").innerHTML = v3;
    document.getElementById("rol 4").innerHTML = v4;
    document.getElementById("LG").innerHTML = vlow;
    document.getElementById("hbe").innerHTML = vhoog;
}
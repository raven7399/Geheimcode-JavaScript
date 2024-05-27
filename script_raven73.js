showCoords();
/*
setColor("black");

function stufeA() {
    lineForward(50);
    right(90);
    lineForward(25);
    left(90);
}

function stufeB() {
    lineForward(25);
    right(90);
    lineForward(50);
    left(90);
}

function kurve() {
    stufeA();
    stufeA();
    stufeB();
    stufeB();
}

goTo(0,0);

function pixelKreis() {
    kurve();
    right(90);
    kurve();
    right(90);
    kurve();
    right(90);
    kurve();
}

goTo(-325,0);

function pixelWelle() {
    setWidth(2);
    kurve();
    right(90);
    kurve();
    forward(300);
    right(90);
    kurve();
    right(90);
    kurve();
}

pixelWelle();



Zeichne folgende Kreise:
Ein Kreis mit Umfang 100,
einer mit Umfang 253
einer mit Umfang 700000

r = U / (2 * Pi)
100/ (2* Pi) 

function umfangZuRadius(U) {
    return U / (2* Math.PI);
} 


drawCircle(umfangZuRadius(100));
drawCircle(umfangZuRadius(253));
drawCircle(umfangZuRadius(700));
*/

function randomNumber(min,max) {
    return Math.round(Math.random()* (max-min) + min);
}

/*
function square(x) {
    return x*x
}

console.log(square(2))  // 4
console.log(square(3))  // 9
console.log(square(16)) //256

function würfel() {
    return randomNumber(1,6);
}

console.log(würfel())
console.log(würfel())

function Temperatur(f) {
    return c = (f-32)*(5/9)
}
console.log(Temperatur(80))

function dreieck(side,stärke,farbe) {
    setColor(farbe);
    setWidth(stärke);
    lineForward(side);
    right(120);
    lineForward(side);
    right(120);
    lineForward(side);
    right(120);
}

setColor("black")
fill();
dreieck(120,21,"navy");
right(4);
dreieck(105,18,"royalblue");
right(4);
dreieck(90,15,"skyblue");
right(4);
dreieck(75,12,"paleturquoise");

function linie(x1,y1,x2,y2) {
    goTo(x1,y1);
    lineTo(x2,y2);
}

function spiegelLinie(x1,y1,x2,y2) {
    goTo(x1,y1);
    lineTo(x2,y2);
}

linie(0,0,100,100);
spiegelLinie(0,0,-100,100);

spiegelLinie(0,0,125,150);
spiegelLinie(0,0,75,150);
spiegelLinie(0,0,0,200);
spiegelLinie(75,150,0,200);
spiegelLinie(125,150,75,200);
spiegelLinie(0,200,75,200);
spiegelLinie(0,150,125,150);

linie(0,0,-125,150);
linie(0,0,-75,150);
linie(0,0,0,200);
linie(-75,150,0,200);
linie(-125,150,-75,200);
linie(0,200,-75,200);
linie(0,150,-125,150);

// Programm 1
let eingabe = prompt("Wie heißt du?")
console.log(eingabe);

// Programm 2
let a = parseInt(prompt("Gib eine Zahl ein"))
let b = parseInt(prompt("Gib noch eine Zahl ein"));
console.log(a+b);

let eingabe = prompt("Passwort");
let passwort = "123abc";

if (eingabe === passwort) {
    console.log("😊")
} else {
    console.log("Falsches Passwort!");
};

let eingabe = prompt("Nutzername")
let eingabe2 = parseInt(prompt("Geiheimzahl"))
let name = raven
let geheimzahl = 99;

// Programm 1
if (eeingabe === "raven" && eingabe2 === geheimzahl) {
    console.log("😊")
} else {
    console.error("Falsches Passwort!")
    }
};

// Programm 2
if (eeingabe === "raven" || eingabe2 === geheimzahl) {
    console.log("😊")
} else {
    console.error("Falsches Passwort!")
    }
};

// Programm 3
if (eingabe === geheimzahl) {
    console.log("😊")
} else {
    if (eingabe > geheimzahl) {
        console.log("Kleiner")
    } else {
        console.log("Größer")
    }
};

let eingabe = prompt("Wochentag")
let TumoTag = "Dienstag"
let TumoTag2 = "Samstag";

if (eingabe === TumoTag) {
    console.log("Heute ist Tumo")
} else {
    if (eingabe === TumoTag2) {
        console.log("Heute ist Tumo")
    } else {
        console.log("Heute ist leider kein Tumo")
    }
};

// funktioniert nicht!
function randomNumber(min,max) {
    return Math.random()* (max-min) +min;
}

function KoZ() {
    return randomNumber(1,10)
}

if (KoZ <= 5) {
    console.log("Kopf")
} else {
    console.log("Zahl")
};
// bis hier

// Sprachen
let sprache = prompt("Sprache?");

if (sprache === "Englisch") {
    console.log("Hello!");
} else if (sprache === "Französisch") {
    console.log("Bonjour!");
} else if (sprache === "Italienisch") {
    console.log("Buon giorno!");
} else {
    console.log("Guten Tag!")
};


if (sprache === "Englisch") {
    console.log("Hello!");
}
if (sprache === "Französisch") {
    console.log("Salut!");
}
if (sprache === "Deutsch") {
    console.log("Hallo!");
} else {
    console.error("Unbekannte Sprache.");
}
// Dadurch, dass die drei ifs nicht verbunden sind, durchläuft er alle und wenn man Französisch oder 
// Englisch als Sprache angibt, schreibt der Computer Hallo in dieser Sprache und den Error, dass die 
// Sprache nicht erkannt wurde.
// Richtige Art und Weise -> unter Sprachen

// Schere Stein Papier
let spielerA = prompt("Was spielst du, Spieler A?");
function randomNumber(min,max) {
    return Math.round(Math.random()* (max-min) + min);
}
function SSP() {
    if (randomNumber(1,3) === 1) {
        return "Schere"
    } else if (randomNumber(1,3) === 2) {
        return "Stein"
    } else {
        return "Papier"
    }
}
let spielerB = SSP()

console.log(spielerA, spielerB);

if (spielerA === "Schere" && spielerB === "Schere" || spielerA === "Stein" && spielerB === "Stein" || spielerA === "Papier" && spielerB === "Papier") {
    console.log("Unentschieden");
} else if (spielerA === "Schere" && spielerB === "Stein") {
    console.log("Spieler B gewinnt");
} else if (spielerA === "Schere" && spielerB === "Papier") {
    console.log("Spieler A gewinnt");
} else if (spielerA === "Stein" && spielerB === "Schere") {
    console.log("Spieler A gewinnt");
} else if (spielerA === "Stein" && spielerB === "Papier") {
    console.log("Spieler B gewinnt");
} else if (spielerA === "Papier" && spielerB === "Schere") {
    console.log("Spieler B gewinnt");
} else {
    console.log("Spieler A gewinnt");
}

// Würfel
function randomNumber(min,max) {
    return Math.round(Math.random()* (max-min) + min);
}
function drawWürfel(size,x,y,x2,y2) {
    goTo(x,y)
    lineForward(size);
    right(90);
    lineForward(size);
    right(90);
    lineForward(size);
    right(90);
    lineForward(size);
    right(90);
    if (randomNumber(1,6) === 1) {
        goTo(x2,y2);
        drawCircle(25);
        fill();
    } 
}
drawWürfel(100,0,0,50,50)
*/

// Schleifen

// let z = 0;
// while (Z < 1000) {
//     drawFlower();
//     z++;
// }

// for (let z = 0;z<1000;z++) {
//     console.log(z);
//     drawFlower();
// }

/*
for (let z = -70;z < 2011;z++) {
    console.log(z);
}

for (let z = 10;z > -1;z--) {
    console.log(z);
}

setColor("coral");
fill();

for (let z = 0;z < 3;z++) {
    let x = randomNumber(-350,350);
    let y = randomNumber(-350,350);
    let size = randomNumber(20,40);
    goTo(x,y);
    drawEmoji("1F335",size);
}

for (let z = 0;z < 10000;z++) {
    let x = randomNumber(-350,350);
    let y = randomNumber(-350,350);
    goTo(x,y);
    drawEmoji("1F600");
    x = randomNumber(-350,350);
    y = randomNumber(-350,350);
    goTo(x,y);
    drawEmoji("1F601");
    x = randomNumber(-350,350);
    y = randomNumber(-350,350);
    goTo(x,y);
    drawEmoji("1F642");
    x = randomNumber(-350,350);
    y = randomNumber(-350,350);
    goTo(x,y);
    drawEmoji("1F609");
    x = randomNumber(-350,350);
    y = randomNumber(-350,350);
    goTo(x,y);
    drawEmoji("1F606");
}
drawEmoji("1F634")
hide();

for (let z = 163;z < 175;z++) {
    console.log(z);
};

for (let z = 20;z < 67;z++) {
    console.log(z);
};

for (let z = 31;z < 71;z++) {
    console.log(z);
};

// ?
for (let z = 8;z<9;z++) {
    console.log("2 * 4 =",z)
}

for (let z = 16;z<17;z++) {
    console.log("2^4 =",z)
}
// ?

setColor("black")
fill();
setWidth(50);
goTo(0,150);
for (let z = 0;z < 60;z++) {
    drawEmoji("1F4A0",50);
    right(45);
    forward(50);
}
hide();

setColor("darkblue")
fill();
for (let z = 0;z < 12;z++) {
    goTo(0,0);
    forward(200);
    drawEmoji("2B50",30);
    right(30);
}
hide();

// Fünfzehn
// nicht fertig!!!
let L = 5
prompt("Deine Aktuelle Summe ist",L);
confirm("Willst du nochmal würfeln?");
// !!

// Arrays
let a = [];
for (let z = 0; z < 10; z = z + 1) {
	a.push(z);
};
console.log(a); 

let pfannkuchen = ["Mehl","Milch","Ei","Zucker"];
for (let z = 0; z < pfannkuchen.length; z = z + 1) {
	console.log(pfannkuchen[z]);
};

let pizza = ["Pizzateig","Tomatensauce","Schinken","Käse","Oregano"];
for (let z = 0;z < pizza.length;z++) {
    console.log(pizza[z]);
}

let zeichen = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3",
"4","5","6","7","8","9","!",".","#",",",";","@","%"];

let passwort = "";

for (z = 0;z<12;z++) {
    passwort = passwort + zeichen[randomNumber(0,69)]
}

console.log(passwort)

setColor("black");
fill();

let symbole = ["2665","1F48E","1F352","1F34B","1F347", "1F34E", "1F340"];

function emojis() {
    goTo(-200,0)
    drawEmoji(symbole[randomNumber(0,6)],50)
    goTo(0,0)
    drawEmoji(symbole[randomNumber(0,6)],50)
    goTo(200,0)
    drawEmoji(symbole[randomNumber(0,6)],50)
}

emojis();
hide();
*/

// Abschlussprojekte
// Morse Code

let geheimcode = [".-","-..",".-","X",".-..","---","...-",".",".-..",".-",
"-.-.",".","X","..","...","X","-.-.","---","-.","...","..","-..",".",".-.",
".","-..","X","-","....",".","X","..-.","..",".-.","...","-","X","-.-.",
"---","--",".--.","..-","-",".",".-.","X",".--.",".-.","---","--.",".-.",
".-","--","--",".",".-.",".-.-.-","X",".","...-",".","-.","X","-","....",
"---","..-","--.","....","X","...","....",".","X",".--",".-.","---","-",
".","X",".-","-...","---","..-","-","X",".-","X","-.-.","---","--",".--.",
"..-","-",".",".-.","--..--","X","-","....",".","X",".-","-.",".-",".-..",
"-.--","-","..","-.-.",".-",".-..","X",".","-.","--.","..","-.",".","--..--",
"X","-","....",".-","-","X",".--",".-","...","X","-.",".","...-",".",".-.",
"X","-...","..-","..",".-..","-","--..--","X","...","....",".","X",".-.",".",
".-",".-..","..","--..",".","-..","X","-","....",".-","-","X","-","....",".",
"X","-.-.","---","--",".--.","..-","-",".",".-.","X","-.-.","---","..-",".-..",
"-..","X","..-.","---",".-..",".-..","---",".--","X",".-","X","...",".",".-.",
"..",".","...","X","---","..-.","X","...","..","--",".--.",".-..",".","X","..",
"-.","...","-",".-.","..-","-.-.","-","..","---","-.","...","--..--","X",".-",
"X",".--.",".-.","---","--.",".-.",".-","--","--..--","X","-","---","X",".--.",
".",".-.","..-.","---",".-.","--","X",".-","X","-.-.","---","--",".--.",".-..",
".","-..-","X","-.-.",".-",".-..","-.-.","..-",".-..",".-","-","..","---",
"-.",".-.-.-"];

let tabelle = [
    [".-",      "a"],
    ["-...",    "b"],
    ["-.-.",    "c"],
    ["-..",     "d"],
    [".",       "e"],
    ["..-.",    "f"],
    ["--.",     "g"],
    ["....",    "h"],
    ["..",      "i"],
    [".---",    "j"],
    ["-.-",     "k"],
    [".-..",    "l"],
    ["--",      "m"],
    ["-.",      "n"],
    ["---",     "o"],
    [".--.",    "p"],
    ["--.-",    "q"],
    [".-.",     "r"],
    ["...",     "s"],
    ["-",       "t"],
    ["..-",     "u"],
    ["...-",    "v"],
    [".--",     "w"],
    ["-..-",    "x"],
    ["-.--",    "y"],
    ["--..",    "z"],
    [".----",   "1"],
    ["..---",   "2"],
    ["...--",   "3"],
    ["....-",   "4"],
    [".....",   "5"],
    ["-....",   "6"],
    ["--...",   "7"],
    ["---..",   "8"],
    ["----.",   "9"],
    ["-----",   "0"],
    [".-.-.-",  "."],
    ["--..--",  ","],
    ["X",       " "],
];

function zeichenÜbersetzer(morsezeichen) {
    let z = 0
    while (morsezeichen !== tabelle[z][0]) {
        z++
    }
    return tabelle[z][1]
}

// console.log(zeichenÜbersetzer(".-")) // a

let satz = ""

for (z = 0; z < geheimcode.length;z++) {
    satz = satz + zeichenÜbersetzer(geheimcode[z]);
}

console.log(satz)

// Morse Code 2

let text1 = ["h","a","l","l","o"]

function buchstabenÜbersetzer(buchstabe) {
    let i = 0
    while (buchstabe !== tabelle[i][1]) {
        i++
    }
    return tabelle[i][0]
}

let satz2 = ""

for (i = 0; i < text1.length;i++) {
    satz2 = satz2 + buchstabenÜbersetzer(text1[i]) + tabelle[38][1];
}

console.log(satz2);

// Bienenwabe

setColor("black");
fill();
setColor("lightblue");
setWidth(5);

function bienenwabe() {
    for (n = 0; n < 9; n++) {
        for (x = 0; x < 6; x++) {
            lineForward(50);
            right(60);
        }
        forward(50);
        right(60);
        forward(50);
        left(60);
        lineForward(50);
        right(180);
        forward(125);
        left(90);
        forward(43,75);
        left(90);
    }
    left(90);
    forward(777);
    right(90);
    forward(150);
}

goTo(-350,-350);

for (a = 0; a < 10; a++) {  
    bienenwabe();
}

hide();

goTo(-310,275);
drawEmoji("1F47D",25);

goTo(-90,-250);
drawEmoji("1F47D",40);

goTo(250,50);
drawEmoji("1F47D",10);

/*
// Uhr
// nicht fertig

setColor("white");
fill();
setColor("blue");
setWidth(4);

function drawClock() {
    for (d = 0; d < 3; d++) {
        drawCircle(300);
        forward(300);
        right(180);
        lineForward(50);
        forward(550);
        right(180);
        lineForward(50);
        forward(250);
        right(90);
        forward(300);
        right(180);
        lineForward(50);
        forward(550);
        right(180);
        lineForward(50);
        forward(250);
        right(30);
    }
    right(7,5)
    forward(300);
    right(180);
    for (k = 0; k < 4; k++) {
        lineForward(25);
        right(180);
        forward(25);
        right(90);
        forward(25);
        right(90);
    }
}

function stundenZeiger(stunden) {
    goTo(0,0);
    right(stunden*30);
    lineForward(50);
    left(stunden*30);
}

function minutenZeiger(minuten) {
    goTo(0,0);
    right(minuten*30);
    lineForward(150);
    left(minuten*30);
}

function sekundenZeiger(sekunden) {
    setColor("red");
    goTo(0,0);
    right(sekunden*6);
    lineForward(150);
    left(sekunden*6);
}

drawClock();
stundenZeiger(2);
minutenZeiger(30);
sekundenZeiger(45);

hide();
*/
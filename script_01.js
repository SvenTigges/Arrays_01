/* Die Satzbau-Maschine | Arrays */

/*** 1.0 Arrays */

let arr;
//arr = new Array(); // Konstruktor 
// arr = []; // Literal 
// arr = [2,6,7,12];
// arr = [true,false];
// arr = ["Ich","bin","Max","Mütze"];

// ausgabe(arr);
// ausgabe(arr.length);
// ausgabe(arr[0]); // Index, begint IMMER! mit 0
// ausgabe(arr[1]);

/***1a. Schleifen (for-schleife) */

/* For- Schleife als Wiederholungs-Struktur */
// for (let i = 0; i < 5; i++)         //inkrement++ hoxh zählen //dekrement-- runter zählen // i = index 
// {
//     ausgabe(i);
// }









/*** 02a. Funktionalität mit Array */
// Kritik | Überlegung 
// word1,word2,.....word100 :: Semantische Struktur
// aar[0],arr[1]........arr[n] :: Numerische Struktur (0,1,2,3...n)
// --> Transformation semantisches Problem --> numerisches Problem 
//ausgabe(getSentenceArr(["Ich","bin","Max","Mütze"])); // Test
function getSentenceArr(arr)
{
    let gap = " ";
    let punct = ".";
    let str =   arr [0] + gap + 
                arr [1] + gap + 
                arr [2] + gap + 
                arr [3] + 
                punct; 

    return str;
}

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//ausgabe(getSentence("Ich","bin","Max","Mütze")); // Test
function getSentence(word1,word2,word3,word4)
{
    let gap = " ";
    let punct = ".";
    let str =   word1 + gap + 
                word2 + gap + 
                word3 + gap + 
                word4 + gap +
                punct; 

    return str;
}

// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}

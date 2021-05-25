/* Die Satzbau-Maschine | Arrays */

/*** 1.0 Arrays */

let arr;
//arr = new Array(); // Konstruktor 
arr = []; // Literal 
arr = [2,6,7,12];
arr = [true,false];
arr = ["Ich","bin","der","coole","Max","Mütze"];

ausgabe(arr);
ausgabe(arr.length);
ausgabe(arr[0]); // Index, begint IMMER! mit 0
ausgabe(arr[1]);


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//ausgabe(getSentence("Ich","bin","der","coole","Max","Mütze")); // Test
function getSentence(word1,word2,word3,word4,word5,word6)
{
    let gap = " ";
    let punct = ".";
    let str =   word1 + gap + 
                word2 + gap + 
                word3 + gap + 
                word4 + gap +
                word5 + gap +
                word6 + gap +
                punct; 

    return str;
}

// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}

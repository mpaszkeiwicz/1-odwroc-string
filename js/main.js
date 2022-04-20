const reverseString = (str) => {
    let strToArray = str.split("");
    console.log(strToArray);

    let arrayReverse = strToArray.reverse();
    console.log(arrayReverse);

    let arrayToString = arrayReverse.join("");
    console.log(arrayToString);

    return arrayToString;

    // return str.split("").reverse().join("");
}

let wynik = reverseString("Akademia108");

console.log(wynik);

wynik = reverseString("paszkiewicz");
console.log(wynik);

wynik = reverseString("marek");
console.log(wynik);



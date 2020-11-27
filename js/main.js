
/* 1. Feladat
Írj egy olyan függvény kifejezést, ami paraméterként vár egy egész számokat tartalmazó tömböt! (Input ellenőrzést nem kell végezni.)
A függvény szorozza meg tömbelemek értékét 1.27-el, majd pedig térjen vissza az elemek összegével! */

const numericArray = [1, 2, 3, 4, 5];
const multiplyArray = numericArray.map(item => item * 1.27);
console.log(multiplyArray);

console.log(multiplyArray.reduce((previousValue, currentValue) => previousValue + currentValue));


/* 2. Feladat
Írj egy olyan függvénykifejezést, ami paraméterként kap egy tetszőleges típusú elemeket tartalmazó tömböt,
és egy tetszőleges primitív értéket. A függvény visszatérési értéke egy objektum, ami a következő propertyket tartalmazza:

exists: Értéke true/false attól függően, hogy a második paraméterként megadott érték megtalálható e a tömbben
index: Értéke egy szám, ha második paraméterként megadott érték megtalálható a tömbben, akkor a tömbben lévő indexe, hanem akkor -1 legyen az értéke
allElementIsANumber: Értéke true/false attól függően, hogy a tömb minden eleme number típusú e vagy sem
someElementIsANumber: Értéke true/false attól függően, hogy a tömbben van e number típusú elem vagy sem */

const mixedArray = [1, 2, null, 'string', true];
const primitive = 2

const checkObject = {
    exists: '',
    index: -1,
    allElementIsANumber: '',
    someElementIsANumber: ''
}

const funcExists = (mixedarr, prim) => {
    if (mixedarr.includes(prim)) {
        checkObject.exists = true;
    } else checkObject.exists = false;
}
console.log(funcExists(mixedArray, primitive));

for (let i = 0; i < mixedArray.length; i++) {
    if (mixedArray[i] === primitive) {
        checkObject.index = i;
    }
}

/* const findIndexResult = mixedArray.findIndex(arr => arr.includes(2))
checkObject.index = mixedarr.findIndex((mixedarr, prim) => mixedarr.includes(prim));
checkObject.index = mixedArray.findIndex((arr,pri) => arr.includes(pri));

console.log(funcIndex(mixedArray, primitive));
*/

// const funcIndex = (mixedarr, prim) => {

//else {
//    let findIndexResult = -1;

const everyResult = mixedArray.every(item => (typeof item === "number"))
console.log(everyResult);
checkObject.allElementIsANumber = everyResult;
console.log(checkObject);


const someResult = mixedArray.some(item => (typeof item === "number"))
console.log(someResult);
checkObject.someElementIsANumber = someResult;
console.log(checkObject);


/* 3. Feladat
Írj egy olyan függvénykifejezést, ami paraméterként egy stringeket tartalmazó tömböt kap (Input ellenőrzést nem kell végezni),
és visszaad egy html template-et (string)!
A html template egy felsorolt lista, aminek a listaelemei a kapott tömb értékeit tartalmazzák.
Pl.:
// ha ez a tömb
const content = ['első', 'második', 'harmadik'];
// akkor ez legyen a visszatérési érték (nem kellenek a behúzások, lehet egysoros string a kimenet):
<ul>
    <li>első</li>
    <li>második</li>
    <li>harmadik</li>
</ul> */

const content = ['első', 'második', 'harmadik'];

const stringWithArray = '<ul><li>' + content[0] + '</li><li>' + content[1] + '</li><li>' + content[2] + '</li></ul>'

console.log(stringWithArray);
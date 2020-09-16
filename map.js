const alphabetHash = require('./alphabetHash.js');
const html = require('./html.js');
const fs = require('fs');

function getMapInput(fileName) {
    //const path = `${HOST}/${fileName}`;
    const path = `${fileName}`;
    return fs.readFileSync(path, 'utf-8');
}

function map(text) {
    const words = text.split(' ');// TODO: SPLIT ON SPACE? 
    for (const word of words) {
        var cleanWord = charHelper(word);
        hashHelper(cleanWord);
    }
}

function charHelper(word) {
    var output = "";
    for (var i = 0; i < word.length; i++) {
        var charCode = word.charCodeAt(i)
        if(charCode <= 122 && charCode >= 65) {
            output += word.charAt(i);
        }
    }

    output.toLowerCase()
    return output;
}

function orderArray() {
    var unsortedArray = [];
    var _wordCount;
    for (const word in alphabetHash.hash) {
        _wordCountValue = alphabetHash.hash[word].wordCount;
        unsortedArray.push({wordCount:_wordCountValue, word:word});
    }

    return bubbleSort(unsortedArray);
}

function bubbleSort(array){
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i ++) {
            var firstObjCount = array[i].wordCount;
            var secondObjCount = array[i + 1].wordCount;
            if(firstObjCount > secondObjCount) {
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
        counter++;
    }
    return array;
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

function writeHelper(orderedArray) {
    //console.log("words", orderedArray)
    fs.appendFileSync('index.html', html.htmlTop());
    for (let i = orderedArray.length - 1; i > 0; i--) {
        let word = orderedArray[i].word;
        let count = orderedArray[i].wordCount;
        let fileLine = word + "   ||   " + word;
        //fs.appendFileSync('output.txt', fileLine + '\n');
        fs.appendFileSync('index.html', html.span(word, count));
    }
    fs.appendFileSync('index.html', html.htmlBottom());
}

function hashHelper(word, hash = alphabetHash.hash) {
    if(word in hash) {
        hash[word].wordCount++
        return hash[word];
    } else {
        hash[word] = {wordCount: 1}
    }
}

function getCountHelper(word, memoize = {}){}

//const mapInput = mapReduce.getMapInput('latencies.txt');
const mapInput = getMapInput('AllSchools.txt');

console.log('hello');
map(mapInput);
var orderedArray = orderArray();
writeHelper(orderedArray)
console.log('goodbye');


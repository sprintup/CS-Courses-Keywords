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

function removeStopWords(orArr) {
    //console.log("starting remove")
    var stopWords = ["a","about","above","after","again","against","all","am","an","and","any","are","aren't","as","at","be","because","been","before","being","below","between","both","but","by","can","can't","cannot","could","couldn't","did","didn't","do","does","doesn't","doing","don't","down","during","each","few","for","from","further","had","hadn't","has","hasn't","have","haven't","having","he","he'd","he'll","he's","her","here","here's","hers","herself","him","himself","his","how","how's","i","i'd","i'll","i'm","i've","if","in","into","is","isn't","it","it's","its","itself","let's","me","more","most","mustn't","my","myself","no","nor","not","of","off","on","once","only","or","other","ought","our","ours","ourselves","out","over","own","same","shan't","she","she'd","she'll","she's","should","shouldn't","so","some","such","than","that","that's","the","their","theirs","them","themselves","then","there","there's","these","they","they'd","they'll","they're","they've","this","those","through","to","too","under","until","up","very","was","wasn't","we","we'd","we'll","we're","we've","were","weren't","what","what's","when","when's","where","where's","which","while","who","who's","whom","why","why's","with","won't","would","wouldn't","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves"];
    
    for (let index = orArr.length - 1; index >= 0; index--) {
        const wordObject = orArr[index];
        if (stopWords.includes(wordObject.word.toLowerCase())) {
            orArr.splice(index, 1);
        }
    }
    
    return orArr;
}

//const mapInput = mapReduce.getMapInput('latencies.txt');
const mapInput = getMapInput('input.txt');
// const mapInput = getMapInput('input.txt');

console.log('hello');
map(mapInput);
var orderedArray = orderArray();
var cleanedArray = removeStopWords(orderedArray);
writeHelper(cleanedArray)
console.log('goodbye');


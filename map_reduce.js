const fs = require('fs');

const HOST = process.env.HOST;

function getMapInput(fileName) {
    //const path = `${HOST}/${fileName}`;
    const path = `${fileName}`;
    return fs.readFileSync(path, 'utf-8');
}

function emitMapResult(value) {
    //const fileName = `${HOST}/map_results/${key}.txt`;
    //const fileName = `${key}.txt`;
    //console.log('filename: ', filename);
    //fs.appendFileSync(fileName, value + '\n');
    fs.appendFileSync('output.txt', value + '\n');
}

function getReduceInputs() {
    const fileNames = fs.readdirSync(`map_results`, 'utf-8');
    const inputs = [];
    for (const fileName of fileNmaes) {
        const key = fileName.split('.')[0];
        const contents = fs.readFileSync(`map_results/${fileName}`, 'utf-8');
        inputs.push([key, contents.split('\n').filter(value => value !== '')]);
    }
    return inputs;
}

function emitReduceResult(key, value) {
    const fileName = `reduce_results/results.txt`;
    fs.appendFileSync(fileName, key + ' ' + value + '\n');
}

module.exports.getMapInput = getMapInput;
module.exports.emitMapResult = emitMapResult;
module.exports.getReduceInputs = getReduceInputs; 
module.exports.emitReduceResult = emitMapResult;
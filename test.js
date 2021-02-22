let csvToJson = require('./csvToJson/src/csvToJson');
let fileUtils = require("./csvToJson/src/util/fileUtils");
var fs = require('fs');


// Testcase #1
console.log('\n>>>>> Starting test case 1');

let input1 = './TestData/TestFiles/test1Input.csv';
let output1 = './TestOutput/Files/test1Output.json';

csvToJson.generateJsonFileFromCsv(input1, output1);


var test1Result = fileUtils.readFile('./TestOutput/Files/test1Output.json', this.encoding);

var test1Output = fileUtils.readFile('./TestData/ExpectedOutput/test1Output.json', this.encoding);


if (test1Result === test1Output)
    console.log('>>>>> Test 1 Passed');
else
    console.log('>>>>> Test 1 Failed');

console.log(test1Result);
console.log("next");
console.log(test1Output);
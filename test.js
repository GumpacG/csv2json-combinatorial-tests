let csvToJson = require('./csvToJson/src/csvToJson');
let fileUtils = require("./csvToJson/src/util/fileUtils");
var fs = require('fs');


function bar (err, data) {
  /* If an error exists, show it, otherwise show the file */
  err ? Function("error","throw error")(err) : JSON.stringify(data);
};



// Testcase #1
console.log('\n>>>>> Starting test case 1');

let input1 = './TestData/TestFiles/test1Input.csv';
let output1 = './TestOutput/Files/test1Output.json';


csvToJson.generateJsonFileFromCsv(input1, output1);


// let test1Result = fileUtils.readFile(output1);
//
// let test1Output = fileUtils.readFile('./TestData/ExpectedOutput/test1Output.json');

let test1Result = fs.readFile(output1, bar);
let test1Output = fs.readFile('./TestData/ExpectedOutput/test1Output.json', bar);


if (test1Result === test1Output)
    console.log('>>>>> Test 1 Passed');
else
    console.log('>>>>> Test 1 Failed');

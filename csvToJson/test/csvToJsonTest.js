'use strict';

let expect = require('chai').expect;
let assert = require('chai').assert;
let csvToJson = require('../src/csvToJson');
let fs = require('fs');

describe('csvToJson test', function () {
    it('test 1', function() {
        let input1 = 'test/TestData/TestFiles/test1Input.csv';
        let output1 = 'test/TestOutput/Files/test1Output.txt';

        csvToJson.generateJsonFileFromCsv(input1, output1);        

        fs.readFile('test/TestData/ExpectedOutput/test1Output.txt', 'utf8', function(err, expectedOutput){ 
            fs.readFile(output1, 'utf8', function(err, actualOutput){ 
                expect(expectedOutput).to.deep.equal(actualOutput);
            }); 
        }); 
    });
});
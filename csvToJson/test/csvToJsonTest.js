'use strict';

let expect = require('chai').expect;
let assert = require('chai').assert;
let csvToJson = require('../src/csvToJson');
let fs = require('fs');

describe('csvToJson test', function () {
    it('test 1', function() {
        let input = 'test/TestData/TestFiles/test1Input.csv';
        let output = 'test/TestOutput/Files/test1Output.txt';
        let expectedOutput = 'test/TestData/ExpectedOutput/test1Output.txt';

        csvToJson.generateJsonFileFromCsv(input, output);        

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){ 
            fs.readFile(output, 'utf8', function(err, actualResult){ 
                expect(expectedResult).to.deep.equal(actualResult);
            }); 
        }); 
    });

    it('test 2', function() {
        let input = 'test/TestData/TestFiles/test2Input.txt';
        let output = 'test/TestOutput/Files/.json';
        let expectedOutput = 'test/TestData/ExpectedOutput/test2Output.json';

        csvToJson.generateJsonFileFromCsv(input, output);        

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){ 
            fs.readFile(output, 'utf8', function(err, actualResult){ 
                expect(expectedResult).to.deep.equal(actualResult);
            }); 
        }); 
    });

    it('test 3', function() {
        let input = 'doesNotExist';
        let output = 'doseNotExist';
        let expectedMessage = 'test/TestData/ExpectedMessages/test3Message.txt';

        try {
            csvToJson.generateJsonFileFromCsv(input, output);
        } catch (err) {
            let error = err.message;
            
            fs.readFile(expectedMessage, 'utf8', function(err, expectedError){ 
                expect(expectedError).to.deep.equal(error);
            }); 
        } 
    });
});
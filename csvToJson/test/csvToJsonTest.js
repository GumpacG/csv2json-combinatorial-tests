'use strict';

let expect = require('chai').expect;
let assert = require('chai').assert;
let csvToJson = require('../src/csvToJson');
let fs = require('fs');

describe('csvToJson test', function () {
    it('test 11', function() {
        let input = 'test/TestData/TestFiles/test11Input.csv';
        let output = 'test/TestOutput/Files/test11Output.json';
        let expectedOutput = 'test/TestData/ExpectedOutput/test11Output.json';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
            });
        });
    });

    it('test 12', function() {
        let input = 'test/TestData/TestFiles/test12Input.txt';
        let output = 'test/TestOutput/Files/test12Output.txt';
        let expectedOutput = 'test/TestData/ExpectedOutput/test12Output.txt';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
            });
        });
    });

    it('test 13', function() {
        let input = 'test/TestData/TestFiles/test13Input.txt';
        let output = 'test/TestOutput/Files/test13Output.txt';
        let expectedOutput = 'test/TestData/ExpectedOutput/test13Output.txt';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
            });
        });
    });

    it('test 14', function() {
        let input = 'test/TestData/TestFiles/test14Input.csv';
        let output = 'test/TestOutput/Files/test14Output.txt';
        let expectedOutput = 'test/TestData/ExpectedOutput/test14Output.txt';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
            });
        });
    });

});
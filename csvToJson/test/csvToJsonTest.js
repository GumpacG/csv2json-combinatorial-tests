'use strict';

let expect = require('chai').expect;
let csvToJson = require('../src/csvToJson');
let fs = require('fs');

describe('csvToJson test', function () {
    it('test 6', function(done) {
        let input = 'test/TestData/TestFiles/test6Input.txt';
        let output = 'test/TestOutput/Files/test6Output.txt';
        let expectedOutput = 'test/TestData/ExpectedOutput/test6Output.txt';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            });
        });
    });

    it('test 7', function(done) {
        let input = 'test/TestData/TestFiles/test7Input.csv';
        let output = 'test/TestOutput/Files/test7Output.json';
        let expectedOutput = 'test/TestData/ExpectedOutput/test7Output.json';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            });
        });
    });

    it('test 8', function(done) {
        let input = 'test/TestData/TestFiles/test8Input.txt';
        let output = 'test/TestOutput/Files/test8Output.json';
        let expectedOutput = 'test/TestData/ExpectedOutput/test8Output.json';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            });
        });
    });

    it('test 9', function(done) {
        let input = 'test/TestData/TestFiles/test9Input.csv';
        let output = 'test/TestOutput/Files/test9Output.json';
        let expectedOutput = 'test/TestData/ExpectedOutput/test9Output.json';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            });
        });
    });

    it('test 10', function(done) {
        let input = 'test/TestData/TestFiles/test10Input.csv';
        let output = 'test/TestOutput/Files/test10Output.json';
        let expectedOutput = 'test/TestData/ExpectedOutput/test10Output.json';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            });
        });
    });
});

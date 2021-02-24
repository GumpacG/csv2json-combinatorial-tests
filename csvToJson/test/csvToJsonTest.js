'use strict';

let expect = require('chai').expect;
let assert = require('chai').assert;
let csvToJson = require('../src/csvToJson');
let fs = require('fs');

describe('csvToJson test', function (done) {
    it('test 1', function(done) {
        let input = 'test/TestData/TestFiles/test1Input.csv';
        let output = 'test/TestOutput/Files/test1Output.txt';
        let expectedOutput = 'test/TestData/ExpectedOutput/test1Output.txt';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                try {
                    expect(actualResult).to.deep.equal(expectedResult);
                } catch (err) {
                    console.log(err.message);
                }
            });
        });
        done();
    });

    it('test 2', function(done) {
        let input = 'test/TestData/TestFiles/test2Input.txt';
        let output = 'test/TestOutput/Files/test2Output.json';
        let expectedOutput = 'test/TestData/ExpectedOutput/test2Output.json';

        csvToJson.generateJsonFileFromCsv(input, output);

        try {
          fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
              fs.readFile(output, 'utf8', function(err, actualResult){
                  expect(actualResult).to.deep.equal(expectedResult);
                  done();
              });
          });
        } catch (err){
          let error = err.message;
          throw err;
        }
    });

    it('test 3', function(done) {
        let input = 'doesNotExist';
        let output = 'doseNotExist';
        let expectedMessage = 'test/TestData/ExpectedMessages/test3Message.txt';

        try {
            csvToJson.generateJsonFileFromCsv(input, output);
        } catch (err) {
            let error = err.message;

            fs.readFile(expectedMessage, 'utf8', function(err, expectedError){
                expect(error).to.deep.equal(expectedError);
                done();
            });

            fs.writeFile('test/TestOutput/Messages/test3Message.txt', error, function (err) {
                if (err) throw err;
            });
        }
    });

    it('test 4', function(done) {
        let input = 'test/TestData/TestFiles/test4Input.csv';
        let output = 'test/TestOutput/Files/test4Output.json';
        let expectedOutput = 'test/TestData/ExpectedOutput/test4Output.json';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            });
        });
    });

    it('test 5', function(done) {
        let input = 'test/TestData/TestFiles/test5Input.csv';
        let output = 'test/TestOutput/Files/test5Output.json';
        let expectedOutput = 'test/TestData/ExpectedOutput/test5Output.json';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            });
        });
    });

    it('test 11', function(done) {
        let input = 'test/TestData/TestFiles/test11Input.csv';
        let output = 'test/TestOutput/Files/test11Output.json';
        let expectedOutput = 'test/TestData/ExpectedOutput/test11Output.json';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            });
        });
    });

    it('test 12', function(done) {
        let input = 'test/TestData/TestFiles/test12Input.txt';
        let output = 'test/TestOutput/Files/test12Output.txt';
        let expectedOutput = 'test/TestData/ExpectedOutput/test12Output.txt';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            });
        });
    });

    it('test 13', function(done) {
        let input = 'test/TestData/TestFiles/test13Input.txt';
        let output = 'test/TestOutput/Files/test13Output.txt';
        let expectedOutput = 'test/TestData/ExpectedOutput/test13Output.txt';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            });
        });
    });

    it('test 14', function(done) {
        let input = 'test/TestData/TestFiles/test14Input.csv';
        let output = 'test/TestOutput/Files/test14Output.txt';
        let expectedOutput = 'test/TestData/ExpectedOutput/test14Output.txt';

        csvToJson.generateJsonFileFromCsv(input, output);

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){
            fs.readFile(output, 'utf8', function(err, actualResult){
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            });
        });
    });
});
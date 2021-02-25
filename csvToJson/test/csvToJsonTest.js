'use strict';

let expect = require('chai').expect;
let csvToJson = require('../src/csvToJson');
let fs = require('fs');

describe('csvToJson test', function () {
    it('test 1', function(done) {
        let input = 'test/TestData/TestFiles/test1Input.csv';
        let output = 'test/TestOutput/Files/test1Output.txt';
        let expectedOutput = 'test/TestData/ExpectedOutput/test1Output.txt';

        csvToJson.generateJsonFileFromCsv(input, output);        

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){ 
            fs.readFile(output, 'utf8', function(err, actualResult){ 
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            }); 
        }); 
    });

    it('test 2', function(done) {
        let input = 'test/TestData/TestFiles/test2Input.txt';
        let output = 'test/TestOutput/Files/test2Output.json';
        let expectedOutput = 'test/TestData/ExpectedOutput/test2Output.json';

        csvToJson.generateJsonFileFromCsv(input, output);        

        fs.readFile(expectedOutput, 'utf8', function(err, expectedResult){ 
            fs.readFile(output, 'utf8', function(err, actualResult){ 
                expect(actualResult).to.deep.equal(expectedResult);
                done();
            }); 
        }); 
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
            });
            
            fs.writeFile('test/TestOutput/Messages/test3Message.txt', error, function (err) {
                if (err) throw err;
            }); 
            done();
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

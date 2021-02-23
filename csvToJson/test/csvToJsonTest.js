'use strict';

let expect = require('chai').expect;
let assert = require('chai').assert;
let index = require('../index');
let fs = require('fs');

describe('csvToJson test', function () {
    it('test 1', function() {
        let input1 = 'test/TestData/TestFiles/test1Input.csv';
        let output1 = 'test/TestOutput/Files/test1Output.txt';
        
        let result = index.getJsonFromCsv(input1);
        fs.writeFile(output1, JSON.stringify(result), function (err) {
            if (err) throw err;
            });

        fs.readFile('test/TestData/ExpectedOutput/test1Output.txt', 'utf8', function(err, data){ 
            expect(JSON.stringify(result)).to.deep.equal(data);
        }); 
    });
});
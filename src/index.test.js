var expect = require('chai').expect;
var frank_lib_names = require('./index')

describe('frank lib names', function(){
    describe('all', function(){
        it('should be an array of strings', function(){
            expect(frank_lib_names.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item){
                    return typeof item === 'string';
                });
            }
        });

        it('should contain frank', function(){
            expect(frank_lib_names.all).to.include('frank');
        });

        it('should not return an empty array', function(){
            expect(frank_lib_names.all).to.not.be.empty
        })
    });

    describe('random', function(){
        it('should return a random item from frank_lib_names.all', function(){
            var randomItem = frank_lib_names.random();
            expect(frank_lib_names.all).to.include(randomItem);
        })
    })
});
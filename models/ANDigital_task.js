

const Solution = function() {

    Solution.prototype.execute = function(input) {

        const cleanedInput = this.cleanUpInput(input);

        let output;
        if (cleanedInput.length == 2) {
            output =  this.dealWith2Digits(cleanedInput);
        }
        else {
            output =  this.dealWithDigits(cleanedInput);
        };

        return this.removeDuplicates(output);
    };

    Solution.prototype.dealWith2Digits = function(array) {
        return [array[0] + array[1], array[1] + array[0]];
    };

    Solution.prototype.dealWithDigits = function(array) {
        let solutions = [];
        let previousSolution;
        for (const digit of array) {
            const other_digits = this.removeDigitFromArray(array, digit);
            if (other_digits.length == 2) {
                previousSolution = this.dealWith2Digits(other_digits);
            }
            else {
                previousSolution = this.dealWithDigits(other_digits);
            };
            solutions = solutions.concat(this.pushSolutions(previousSolution, digit));
        };
        return solutions;
    };

    Solution.prototype.cleanUpInput = function(input) {
        const digit_array = input.split('').filter(char => !isNaN(parseInt(char)));
        digit_array.sort().reverse();
        return digit_array;
    };

    Solution.prototype.removeDigitFromArray = function(array, digitToRemove) {
        const indexOfDigit = array.indexOf(digitToRemove);
        const other_digits = [...array];
        other_digits.splice(indexOfDigit, 1);
        return other_digits;
    };

    Solution.prototype.pushSolutions = function(suffixSolutions, prefixDigit) {
        const completeSolutions = suffixSolutions.map((suffixSolution) => {
            return prefixDigit.concat(suffixSolution);
        });
        return completeSolutions;
    };

    Solution.prototype.removeDuplicates = function(array) {
        return uniques = [...new Set(array)];
    };
};



module.exports = Solution;
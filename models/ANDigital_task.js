

const Solution = function() {
    

    Solution.prototype.execute = function(input) {
        
        const ordered_digits = this.sortInput(input);
        if (ordered_digits.length == 2) {
            return this.dealWith2Digits(ordered_digits);
        }
        else if (ordered_digits.length == 3) {
            return this.dealWith3Digits(ordered_digits);
        }
        else if (ordered_digits.length == 4) {
            return this.dealWith4Digits(ordered_digits);
        };

    };

    Solution.prototype.dealWith2Digits = function(twoDigitArray) {
        solutions = [];
        const largest_digit = twoDigitArray[0];
        const smallest_digit = twoDigitArray[1];

        const solution1 = largest_digit + smallest_digit;
        solutions.push(solution1);
        const solution2 = smallest_digit + largest_digit;
        solutions.push(solution2);
        return solutions;
    };

    Solution.prototype.dealWith3Digits = function(array) {
        let solutions = [];
        for (const digit of array) {
            const other_digits = this.removeDigitFromArray(array, digit);
            const twoDigitsSolution = this.dealWith2Digits(other_digits);
            solutions = solutions.concat(this.pushSolutions(twoDigitsSolution, digit));
        };
        return solutions;
    };

    Solution.prototype.dealWith4Digits = function(array) {
        let solutions = [];
        for (const digit of array) {
            const other_digits = this.removeDigitFromArray(array, digit);
            const threeDigitsSolution = this.dealWith3Digits(other_digits);
            solutions = solutions.concat(this.pushSolutions(threeDigitsSolution, digit));
        };
        return solutions;
    };

    Solution.prototype.sortInput = function(input) {
        const digit_array = [];
        for (char of input) {
            int = parseInt(char);
            if (!isNaN(int)) {
                digit_array.push(String(int));
            };
        };
        digit_array.sort().reverse();
        return digit_array;
    };

    Solution.prototype.removeDigitFromArray = function(array, digit) {
        const indexOfDigit = array.indexOf(digit);
        const other_digits = [...array];
        other_digits.splice(indexOfDigit, 1);
        return other_digits;
    };

    Solution.prototype.pushSolutions = function(suffixSolutions, digit) {
        const solutions = [];
        for (result of suffixSolutions) {
            const solution = digit.concat(result);
            solutions.push(solution);
        };
        return solutions;
    };
};



module.exports = Solution;
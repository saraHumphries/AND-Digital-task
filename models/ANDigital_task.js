

const Solution = function() {
    

    Solution.prototype.execute = function(input) {

        const ordered_digits = this.cleanUpInput(input);
        if (ordered_digits.length == 2) {
            return this.dealWith2Digits(ordered_digits);
        }
        else {
            return this.dealWithDigits(ordered_digits);
        };
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
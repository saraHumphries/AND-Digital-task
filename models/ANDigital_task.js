function solution (input) {

    const cleanedInput = cleanUpInput(input);

        if (cleanedInput.length == 0) {
            throw 'The input needs to include at least one digit'
        };

        let output;
        if (cleanedInput.length == 2) {
            output =  dealWith2Digits(cleanedInput);
        }
        else {
            output =  dealWithDigits(cleanedInput);
        };

        return removeDuplicates(output);
    
    };



    const dealWith2Digits = function(array) {
        return [array[0] + array[1], array[1] + array[0]];
    };

    const dealWithDigits = function(array) {
        let solutions = [];
        let previousSolutions;
        for (const digit of array) {
            const other_digits = removeDigitFromArray(array, digit);
            if (other_digits.length == 2) {
                previousSolutions = dealWith2Digits(other_digits);
            }
            else {
                previousSolutions = dealWithDigits(other_digits);
            };
            solutions = solutions.concat(joinSolutions(previousSolutions, digit));
        };
        return solutions;
    };

    const cleanUpInput = function(input) {
        const digit_array = input.split('').filter(char => !isNaN(parseInt(char)));
        digit_array.sort().reverse();
        return digit_array;
    };

    const removeDigitFromArray = function(array, digitToRemove) {
        const indexOfDigit = array.indexOf(digitToRemove);
        const other_digits = [...array];
        other_digits.splice(indexOfDigit, 1);
        return other_digits;
    };

    const joinSolutions = function(suffixSolutions, prefixDigit) {
        const completeSolutions = suffixSolutions.map((suffixSolution) => {
            return prefixDigit.concat(suffixSolution);
        });
        return completeSolutions;
    };

    const removeDuplicates = function(array) {
        return uniques = [...new Set(array)];
    };




module.exports = solution;
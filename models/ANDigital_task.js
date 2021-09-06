const { PassThrough } = require("stream");

const Solution = function(input) {
    this.input = input;

    Solution.prototype.execute = function() {
        return 'pass';
    };

    

};

module.exports = Solution;
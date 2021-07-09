const Question = require('./Question');

const _options = new WeakMap();

class MCQ extends Question {
    constructor(mcq) {
        super(mcq);
        _options.set(this, mcq.options);
    }

    getOptions() {
        return _options.get(this);
    }

    setOptions(options) {
        _options.set(this, options);
        return _options.get(this);
    }

    toString() {
        const mcq = super.toString();
        mcq.options = this.getOptions();
        return mcq;
    }
}

const mcq = new MCQ({
    "questionString": "Where is this question coming from?",
    "correctAnswer": "B",
    "options": {
        "A": "Question class",
        "B": "MCQ class",
        "C": "None of them"
    }
});

module.exports = MCQ;

console.log(mcq.toString());
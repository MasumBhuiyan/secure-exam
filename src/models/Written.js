const Question = require('./Question');

const _answer = new WeakMap();

class Written extends Question {
    constructor(written) {
        super(written);
        _answer.set(this, written.answer);
    }

    getAnswer() {
        return _answer.get(this);
    }

    setAnswer(answer) {
        _answer.set(this, answer);
        return _answer.get(this);
    }

    toString() {
        const written = super.toString();
        written.answer = this.getAnswer();
        return written;
    }
}

module.exports = Written;
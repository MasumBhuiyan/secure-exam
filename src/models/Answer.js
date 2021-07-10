const { v4: uuidv4 } = require('uuid');

const _id = new WeakMap();
const _questionId = new WeakMap();
const _answerString = new WeakMap();

class Answer {
    constructor(questionId, answerString) {
        const uniqueId = uuidv4();
        _id.set(this, uniqueId);
        _questionId.set(this, questionId);
        _answerString.set(this, answerString);
    }

    getId() {
        return _id.get(this);
    }

    getQuestionId() {
        return _questionId.get(this);
    }

    getAnswerString() {
        return _answer.get(this);
    }

    setAnswerString(answer) {
        _answer.set(this, ans);
    }

    toString() {
        return {
            "id": _id.get(this),
            "questionId": _questionId.get(this),
            "answerString": _answerString.get(this)
        };
    }
}

module.exports = Answer;

const answer = new Answer(uuidv4(), "A");
console.log(answer.toString());
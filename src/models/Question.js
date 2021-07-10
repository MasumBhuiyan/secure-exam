const { v4: uuidv4 } = require('uuid');

const _id = new WeakMap();
const _questionString = new WeakMap();
const _correctAnswer = new WeakMap();

class Question {
    constructor(questionString, correctAnswer) {
        const uniqueId = uuidv4();
        _id.set(this, uniqueId);
        _questionString.set(this, questionString);
        _correctAnswer.set(this, correctAnswer);
    }

    getId() {
        return _id.get(this);
    }

    getQuestionString() {
        return _questionString.get(this);
    }

    getCorrectAnswer() {
        return _correctAnswer.get(this);
    }

    setQuestionString(questionString) {
        _questionString.set(this, questionString);
        return _questionString.get(this);
    }

    setCorrectAnswer() {
        _correctAnswer.set(this, correctAnswer);
        return _correctAnswer.get(this);
    }

    toString() {
        return {
            "id": this.getId(),
            "questionString": this.getQuestionString(),
            "correctAnswer": this.getCorrectAnswer()
        }
    }
}

module.exports = Question;

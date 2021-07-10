const { v4: uuidv4 } = require('uuid');

const _id = new WeakMap();
const _answers = new WeakMap();

class AnswerSheet {
    constructor() {
        const uniqueId = uuidv4();
        _id.set(this, uniqueId);
        _answers.set(this, []);
    }

    getId() {
        return _id.get(this);
    }

    setId(id) {
        _id.set(this, id);
    }

    getAnswers() {
        const answers = [];
        for(const answer of _answers.get(this)) {
            answers.push(answer.toString());
        }
        return answers;
    }

    write(answer) {
        const answers = _answers.get(this);
        answers.push(answer);
        _answers.set(this, answers);
        return answers;
    }

    erase(answer) {
        const answers = _answers.get(this);
        if(answers.some(ans => ans.getQuestionId() == answer.getQuestionId())) {
            answers = answers.filter((ans, index, answers) => {
                return ans.getQuestionId() != answer.getQuestionId();
            });
        }
        _answers.set(this, answer);
    }
}

module.exports = AnswerSheet;


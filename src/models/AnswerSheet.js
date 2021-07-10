const { v4: uuidv4 } = require('uuid');
const Answer = require('./Answer');

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


const answer1 = new Answer(uuidv4(), "A"); 
const answer2 = new Answer(uuidv4(), "B"); 
const answer3 = new Answer(uuidv4(), "C"); 
const answer4 = new Answer(uuidv4(), "D");

const answerSheet = new AnswerSheet();
answerSheet.write(answer3);
answerSheet.write(answer2);

console.log(answerSheet.getAnswers());

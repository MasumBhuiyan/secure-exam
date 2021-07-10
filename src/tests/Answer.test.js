const { TestWatcher } = require('jest');
const Answer = require('../models/Answer.js');
const Question = require('../models/Question.js');

test("Should match the question ids.", () => {
    const question = new Question("What is the capital of Bangladesh?", "Dhaka");
    const answer = new Answer(question.getId(), "Dhaka");
    expect(question.getId()).toBe(answer.getQuestionId());
});
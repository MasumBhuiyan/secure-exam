const { TestWatcher } = require("jest");
const Question = require("../models/Question.js")

test("Should get same id every time.", () => {
    const question = new Question("What is the capital of Bangladesh?", "Dhaka");
    const id1 = question.getId();
    const id2 = question.getId();
    expect(id1).toBe(id2);
});

test("Should return the initial query string.", () => {
    const question = new Question("What is the capital of Bangladesh?", "Dhaka");
    const questionString = question.getQuestionString();
    const expectedQuestionString = "What is the capital of Bangladesh?";
    expect(questionString).toBe(expectedQuestionString); 
});
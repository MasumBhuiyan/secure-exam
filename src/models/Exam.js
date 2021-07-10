const { v4:uuidv4 } = require('uuid');
const Participant = require('./Participant');
const Schedule = require('./Schedule');
const Question = require('./Question');
const Answer = require('./Answer');

const _id = new WeakMap();
const _questions = new WeakMap();
const _schedule = new WeakMap();
const _participants = new WeakMap();

class Exam {
    constructor(startDate, duration) {
        const uniqueId = uuidv4();
        _id.set(this, uniqueId);
        _questions.set(this, []);
        _schedule.set(this, new Schedule(startDate, duration));
        _participants.set(this, []);
    }

    getId() {
        return _id.get(this);
    }

    getSchedule() {
        return _schedule.get(this).getSchedule();
    }

    getParticipants() {
        const participants = [];
        for(const participant of _participants.get(this)) {
            participants.push(participant.toString());
        }
        return participants;
    }

    getUnfreezedParticipants() {
        const unfreezedParticipants = [];
        for(const participant of _participants.get(this)) {
            if( participant.getIsFreezed() == false ) 
                unfreezedParticipants.push(participant.toString());
        }
        return participants;
    }

    getFreezedParticipants() {
        const freezedParticipants = [];
        for(const participant of _participants.get(this)) {
            if( participant.getIsFreezed() == true ) 
                freezedParticipants.push(participant.toString());
        }
        return freezedParticipants;
    }

    addQuestion(question) {
        const questions = _questions.get(this);
        questions.push(question);
        _questions.set(this, questions);
    }

    addParticipant(participant) {
        const participants = _participants.get(this);
        participants.push(participant);
        _participants.set(this, participants);
    }

    toString() {
        return {
            "id": this.getId(),
            "schedule": this.getSchedule(),
            "participants": this.getParticipants()
        };
    }
}

module.exports = Exam;

const exam = new Exam(new Date(), 30);
console.log(exam.toString());

const participant1 = new Participant();
const participant2 = new Participant();

exam.addParticipant(participant1);
exam.addParticipant(participant2);
console.log(exam.toString());
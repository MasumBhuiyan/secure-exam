
const Exam = require('./Exam');
const Schedule = require('./Schedule');

const _upcomingExams = new WeakMap();
const _pastExams = new WeakMap();

class ScheduleManager {
    constructor() {
        _upcomingExams.set(this, []);
        _pastExams.set(this, []);
    }

    push(exam) {
        const upcomingExams = _upcomingExams.get(this);
        upcomingExams.push(exam);
        return exam;
    }

    pop() {
        const upcomingExams = _upcomingExams.get(this);
        const recentExam = upcomingExams.pop();
        _upcomingExams.set(this, upcomingExams);
        
        const pastExams = _pastExams.get(this);
        pastExams.push(recentExam);
        _pastExams.set(this, pastExams);

        return recentExam;
    }

    sort() {
        const upcomingExams = _upcomingExams.get(this);
        upcomingExams.sort((exam1, exam2) => {
            return exam1.schedule.getStartDate() < exam2.schedule.getStartDate(); 
        });

        _upcomingExams.set(upcomingExams);
        return upcomingExams;
    }

    getUpcomingExams() {
        const upcomingExams = [];
        for(const exam of _upcomingExams.get(this)) {
            upcomingExams.push(exam.toString());
        }
        return upcomingExams;
    }

    getPastExams() {
        const pastExams = [];
        for(const exam of _pastExams.get(this)) {
            pastExams.push(exam.toString());
        }
        return pastExams;
    }
}

module.exports = ScheduleManager;

const scheduleManager = new ScheduleManager();
scheduleManager.push(new Exam(new Date(), 30));
scheduleManager.push(new Exam(new Date(), 40));

console.log(scheduleManager.getUpcomingExams());
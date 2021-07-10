const moment = require('moment');

const _startDate = new WeakMap();
const _duration = new WeakMap();

class Schedule {
    constructor(startDate, duration) {
        _startDate.set(this, startDate);
        _duration.set(this, duration);
    }

    getStartDate() {
        return _startDate.get(this);
    }

    getEndDate() {
        return moment(_startDate.get(this)).add(_duration.get(this), 'm').toDate();
    }

    getDuration() {
        return _duration.get(this);
    }

    getSchedule() {
        return {
            "StartDate": _startDate.get(this),
            "EndDate": this.getEndDate(),
            "Duration": _duration.get(this)
        }
    }

    setStartDate(startDate) {
        _startDate.set(this, startDate);
    }

    setDuration(duration) {
        _duration.set(this, duration);
    }

    setSchedule(schedule) {
        _startDate.set(this, schedule.startDate);
        _duration.set(this, schedule.duration);
        return this.getSchedule(this);
    }
}

module.exports = Schedule;

const schedule = new Schedule(new Date(), 130);

console.log(schedule.getSchedule());

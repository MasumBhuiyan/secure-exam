const _schedule = new WeakMap();

class Schedule {
    constructor(schedule) {
        _schedule.set(this, schedule);
    }

    getSchedule() {
        return _schedule.get(this);
    }

    setSchedule(schedule) {
        _schedule.set(schedule);
        return _schedule.get(schedule);
    }
}

module.exports = Schedule;

const schedule = new Schedule({
    "start": new Date(),
    "end": new Date()
});

console.log(schedule.getSchedule());
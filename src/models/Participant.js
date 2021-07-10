const { v4: uuidv4 } = require('uuid');
const AnswerSheet = require('./AnswerSheet');

const _id = new WeakMap();
const _mark = new WeakMap();
const _rank = new WeakMap();
const _answerSheet = new WeakMap();
const _isFreezed = new WeakMap();

class Participant {
    constructor() {
        const uniqueId = uuidv4();
        _id.set(this, uniqueId);
        _mark.set(this, 0);
        _rank.set(this, 0);
        _answerSheet.set(this, new AnswerSheet());
        _isFreezed.set(this, false);
    }

    getId() {
        return _id.get(this);
    }

    getMark() {
        return _mark.get(this);
    }

    getRank() {
        return _rank.get(this);
    }

    getAnswerSheet() {
        return _answerSheet.get(this).getAnswers();
    }

    getIsFreezed() {
        return _isFreezed.get(this);
    }

    setMark(mark) {
        _mark.set(this, mark);
    } 

    setRank(rank) {
        _rank.set(this, rank);
    }

    write(answer) {
        const answerSheet = _answerSheet.get(this);
        answerSheet.write(answer);
        _answerSheet.set(answer);
    } 

    erase(answer) {
        const answerSheet = _answerSheet.get(this);
        answerSheet.erase(answer);
        _answerSheet.set(answer);
    }

    freeze() {
        const isFreezed = _isFreezed.get(this);
        if( isFreezed == false ) {
            isFreezed = true;
        }
    }

    unfreeze() {
        const isFreezed = _isFreezed.get(this);
        if( isFreezed == true ) {
            isFreezed = false;
        } 
    }

    toString() {
        return {
            "id": this.getId(),
            "mark": this.getMark(),
            "rank": this.getMark(),
            "isFreezed": this.getIsFreezed(),
            "answerSheet": this.getAnswerSheet()
        };
    }
}

module.exports = Participant;

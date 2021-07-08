const _participant_name = new WeakMap();
const _participant_roll = new WeakMap();
const _participant_email = new WeakMap();
const _privateFunction = new WeakMap();
 
class Valid_participants {
   constructor(participant_name, participant_roll, participant_email) {
       _participant_name.set(this, participant_name);
       _participant_roll.set(this, participant_roll);
       _privateFunction.set(this, function () {
           console.log(`Participant's Name: ${_participant_name.get(this)}, Participant's Roll ${_participant_roll.get(this)} and Participant's Email ${_participant_email.get(this)}`);
       });
   }
   get_participantName()
   {
       return _participant_name.get(this);
   }
   set_participantName()
   {
       _participant_name.set(this,participant_name);
   }
   get_participantRoll()
   {
       return _participant_roll.get(this);
   }
   set_participantRoll()
   {
       _participant_roll.set(this,participant_roll);
   }
   get_participantEmail()
   {
       return _participant_email.get(this);
   }
   set_participantEmail()
   {
       _participant_email.set(this,participant_email);
   }
}
 
 

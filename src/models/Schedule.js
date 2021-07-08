const _name = new WeakMap();
const _email = new WeakMap();
const _ID = new WeakMap();

class participants{
    constructor(name,email,ID)
    {
        _name.set(this, name);
       _email.set(this, email);
       _ID.set(this,ID);
       _Introduction.set(this, function () {
           console.log(`Name: ${_name.get(this)} Email: ${_email.get(this)} ID: ${_ID.get(this)}`);
     });
    }
    
    getParticipentName() {
    return _name.get(this);
}

setParticipentName(name) {
    _name.set(this,name);
}
getParticipentEmail() {
    return _email.get(this);
}

setParticipentName(email) {
    _email.set(this,email);
}
getParticipentID()) {
    return _ID.get(this);
}

setParticipentName(ID) {
    _ID.set(this,ID);
}






}









const _radius = new WeakMap();
const _color = new WeakMap();
const _privateFunction = new WeakMap();
 
class Circle {
   constructor(radius, color) {
       _radius.set(this, radius);
       _color.set(this, color);
       _privateFunction.set(this, function () {
           console.log(`Color: ${_color.get(this)} and Radius ${_radius.get(this)}`);
       });
   }
 
   count = 0;
   draw() {
       console.log("Public method");
   }
   getRadius() {
    return _radius.get(this);
}

setRadius(radius) {
    _radius.set(this, radius);
}
}

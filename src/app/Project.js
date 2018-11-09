const User=require('./User.js');

class Project{

  constructor(name, description, startDate, sprintLength, owner){
    this._name=name;
    this._description=description;
    this._startDate=startDate;
    this._sprintLength=sprintLength;
    this._owner=owner;
    this._participants=[this._owner];
  }

  get id(){
    return this._id;
  }

  get name(){
    return this._name;
  }

  get description(){
    return this._description;
  }

  get startDate(){
    return this._startDate;
  }

  get sprintLength(){
    return this._sprintLength;
  }

  get owner(){
    return this._owner;
  }

  get participants(){
    return this._participants;
  }

  set id(id){
    this._id=id;
  }

  set name(name){
    this._name=name;
  }
  set description(description){
    this._description=description;
  }
  set startDate(startDate){
    this._startDate=startDate;
  }
  set sprintLength(sprintLength){
    this._sprintLength=sprintLength;
  }
  set owner(owner){
    this._owner=owner;
  }
  set participants(participants){
    this._participants=participants;
  }

  addParticipant(user){
    let index=-1;
    for(var i=0; i<this._participants.length-1; i++){
      if(user.id===this._participants[i].id){
        index=i;
      }
    }
    if(index===-1){
      this._participants.push(user);
    }
  }

  removeParticipant(user){
    let index=-1;
    for(var i=0; i<this._participants.length-1; i++){
      if(user.id===this._participants[i].id){
        index=i;
      }
    }
    if(index>=0){
      this._participants.splice(index, 1);
    }

  }

  toString(){
    console.log(this._id+" "+this._name+" "+this._description+" "+this._startDate+" "+this._sprintLength+" "+this._owner.pseudo+" ");
    this._participants.forEach((item)=> {console.log(item.pseudo);});
  }
}

module.exports = Project;

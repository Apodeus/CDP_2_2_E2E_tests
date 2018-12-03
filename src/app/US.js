class US {
  /**
   * @param {*} title string
   * @param {*} description string
   * @param {*} difficulty number
   * @param {*} priority number
   * @param {*} project unique id from table project
   * @param {*} sprint unique id from table sprint
   */
  constructor(title, description, difficulty, priority, project, sprint) {
    this._title = title;
    this._description = description;
    this._difficulty = difficulty;
    this._priority = priority;
    this._project=project;
    this._sprint = sprint;
  }
  set id(id) {
    this._id = id;
  }
  set title(title) {
    this._title = title;
  }
  set description(description) {
    this._description = description;
  }
  set difficulty(difficulty) {
    this._difficulty = difficulty;
  }
  set priority(priority) {
    this._priority = priority;
  }
  set project(project) {
    this._project=project;
  }
  set sprint(sprint) {
    this._sprint = sprint;
  }
  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  get description() {
    return this._description;
  }
  get difficulty() {
    return this._difficulty;
  }
  get priority() {
    return this._priority;
  }
  get project() {
    return this._project;
  }
  get sprint() {
    return this._sprint;
  }
  toString() {
    return (this._id === undefined ? 'undefined' : this._id) + ' | '+this._title+' | '+this.description+' | '+
    String(this._difficulty) + ' | '+ String(this._priority)+ ' | '+String(this._project.id)+' | '+String(this.sprint);
  }
}
module.exports = US;

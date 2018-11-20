const jsdom = require('jsdom');

class UtilsForm {
  constructor() {}
  addFormCreateProjectToDocument(document) {
    const form = document.getElementById('formulaire');
    form.action='/createproject';
    const divButton = document.getElementById('button');
    const button = document.getElementById('validate');
    button.innerHTML = 'Créer un projet';
    const add = function(node) {
      form.insertBefore(node, divButton);
    };
    add(this.getTexte(document, 'Nom*: '));
    add(this.getInput(document, 'name', 'text'));
    add(this.getTexte(document, 'Description: '));
    add(this.getInput(document, 'description', 'text'));
    add(this.getTexte(document, 'Date de début*: '));
    add(this.getInput(document, 'debut', 'date'));
    add(this.getTexte(document, 'Durée des sprints*: '));
    add(this.getInput(document, 'sprint', 'number'));
  }
  getInput(document, id, type) {
    const input = document.createElement('input');
    input.type = type;
    input.name = id;
    return input;
  }
  getTexte(document, texte) {
    const res = document.createElement('p');
    res.innerHTML = texte;
    return res;
  }
}
module.exports = UtilsForm;

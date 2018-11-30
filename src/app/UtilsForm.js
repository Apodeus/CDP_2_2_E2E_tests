class UtilsForm {
  constructor() {}
  async addFormCreateProjectToDocument(document) {
    const form = await document.getElementById('formulaire');
    form.action='/createproject';
    const divButton = await document.getElementById('button');
    const button = await document.getElementById('validate');
    button.innerHTML = 'Créer un projet';
    const add = async function(node) {
      await form.insertBefore(node, divButton);
    };
    add(await this.getTexteP(document, 'Nom*: '));
    add(await this.getInput(document, 'name', 'text'));
    add(await this.getTexteP(document, 'Description: '));
    add(await this.getInput(document, 'description', 'text'));
    add(await this.getTexteP(document, 'Date de début*: '));
    add(await this.getInput(document, 'start', 'date'));
    add(await this.getTexteP(document, 'Durée des sprints*: '));
    add(await this.getInput(document, 'sprint', 'number'));
  }
  async getInput(document, name, type) {
    const input = await document.createElement('input');
    input.type = type;
    input.name = name;
    return input;
  }
  async getTexte(document, texte) {
    return document.createTextNode(texte);
  }
  async getTexteP(document, texte) {
    const res = await document.createElement('p');
    res.innerHTML = texte;
    return res;
  }
  async getForm(document, id, action, method) {
    const form = await document.createElement('form');
    form.id = id;
    form.action = action;
    form.method = method;
    return form;
  }
}
module.exports = UtilsForm;

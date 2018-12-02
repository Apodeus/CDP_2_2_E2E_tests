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

  async addFormCreateUSToDocument(document, sprints) {
    const form = await document.getElementById('formulaire');
    form.action='/addus';
    const divButton = await document.getElementById('button');
    const button = await document.getElementById('validate');
    button.innerHTML = 'Créer l\'US';
    sprints.push("NOT DEFINED");
    const add = async function(node) {
      await form.insertBefore(node, divButton);
    };
    add(await this.getTexteP(document, 'Titre*: '));
    add(await this.getInput(document, 'title', 'text'));
    add(await this.getTexteP(document, 'Description*: '));
    add(await this.getInput(document, 'description', 'text'));
    add(await this.getTexteP(document, 'Difficulté*: '));
    add(await this.getInput(document, 'difficulty', 'number'));
    add(await this.getTexteP(document, 'Priorité*: '));
    add(await this.getSelect(document, 'priority', ["FAIBLE","MOYENNE","HAUTE"]));
    add(await this.getTexteP(document, 'Sprint: '));
    add(await this.getSelect(document, 'sprint', sprints));
  }

  async getInput(document, name, type) {
    const input = await document.createElement('input');
    input.type = type;
    input.name = name;
    return input;
  }

  async getSelect(document, name, list){
    const select = await document.createElement('select');
    select.name=name;
    for(var i=0; i<list.length; i++){
      const option = await document.createElement('option');
      option.value=list[i];
      option.innerHTML=list[i];
      select.add(option);
    }
    return select;
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

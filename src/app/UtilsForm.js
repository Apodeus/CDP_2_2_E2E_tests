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
        add(this.getTexteP(document, 'Nom*: '));
        add(this.getInput(document, 'name', 'text'));
        add(this.getTexteP(document, 'Description: '));
        add(this.getInput(document, 'description', 'text'));
        add(this.getTexteP(document, 'Date de début*: '));
        add(this.getInput(document, 'start', 'date'));
        add(this.getTexteP(document, 'Durée des sprints*: '));
        add(this.getInput(document, 'sprint', 'number'));
    }

    getInput(document, name, type) {
        const input = document.createElement('input');
        input.type = type;
        input.name = name;
        return input;
    }

    getTexte(document, texte) {
        return document.createTextNode(texte);
    }

    getTexteP(document, texte) {
        const res = document.createElement('p');
        res.innerHTML = texte;
        return res;
    }
    getForm(document, id, action, method) {
        const form = document.createElement('form');
        form.id = id;
        form.action = action;
        form.method = method;
        return form;
    }
}
module.exports = UtilsForm;

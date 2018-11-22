const jsdom = require('jsdom');
const path = require('path');
class TabBuilder {
  async loadDocument() {
    let tempo;
    await jsdom.JSDOM.fromFile(path.resolve(__dirname+'/../html/TabsBar.html'), '').then((dom) => {
      tempo = dom;
    });
    this.document = tempo.window.document;
    this.dom = tempo;
  }
  async addButton(title, url) {
    const link = await this.document.createElement('a');
    link.href = url;
    link.textContent = title;

    await this.tabBar.appendChild(link);
  }
  async build(document) {
    await this.loadDocument();
    this.tabBar = await this.document.getElementById('TabBar');
    await this.addButton('Projet', '/projet');
    await this.addButton('Backlog', '/backlog');
    await document.querySelectorAll('head')[0].appendChild(this.tabBar);
  }
}
module.exports = TabBuilder;

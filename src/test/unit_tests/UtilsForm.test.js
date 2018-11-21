const path = require('path');
const jsdom = require('jsdom');
const UtilsForm = require('../../app/UtilsForm');
const pathNameFiles = '/../../html/CreateProject';

test('html form correctly built', async function() {
  await (async function run() {
    await jsdom.JSDOM.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then(async (dom) => {
      const document = dom.window.document;
      await (new UtilsForm()).addFormCreateProjectToDocument(document);
      expect(document.getElementById('name') != undefined);
      expect(document.getElementById('description') != undefined);
      expect(document.getElementById('start') != undefined);
      expect(document.getElementById('sprint') != undefined);
    });
  })();
});

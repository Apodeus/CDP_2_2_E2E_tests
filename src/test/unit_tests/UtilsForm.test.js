const path = require('path');
const jsdom = require('jsdom');
const UtilsForm = require('../../app/UtilsForm');
const pathNameFiles = '/../../html/CreateProject';

test('html form correctly built', async () => {
  await (async function run() {
    jsdom.JSDOM.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then(async (dom) => {
      await (new UtilsForm()).addFormCreateProjectToDocument(dom);
      expect(dom.getElementById('name') != undefined);
      expect(dom.getElementById('description') != undefined);
      expect(dom.getElementById('debut') != undefined);
      expect(dom.getElementById('sprint') != undefined);
    });
  })();
});

const US = require('../../app/US');

let usTest;
beforeEach(() =>{
  usTest = new US('us1', 'ceci est une us', 1, 1, 1, 1);
});

test('create us', () =>{
  expect(usTest.title).toBe('us1');
  expect(usTest.description).toBe('ceci est une us');
  expect(usTest.difficulty).toBe(1);
  expect(usTest.priority).toBe(1);
  expect(usTest.project).toBe(1);
  expect(usTest.sprint).toBe(1);
});

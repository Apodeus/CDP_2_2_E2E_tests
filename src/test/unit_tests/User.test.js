const User = require('../app/User');

let user1;

beforeEach(() => {
  user1 = new User('Romain', 'rrr', 'aaa');
});

test('Creating user object Romain', () => {
  expect(user1.pseudo).toBe('Romain');
  expect(user1.email).toBe('rrr');
  expect(user1.password).toBe('aaa');
});


//

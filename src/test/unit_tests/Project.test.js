const User = require('../app/User');
const Project = require('../app/Project');


let antonin;
let romain;
let project;

beforeEach(()=>{
  antonin=new User('admin', 'admin', 'admin');
  antonin.id=0;
  romain=new User('test', 'test', 'test');
  romain.id=1;
  project=new Project('CDP', 'projet superbe', '2018-11-8', 2, antonin);
});

test('project add romain as dev', () => {
  expect(project.participants.length).toBe(1);
  project.addParticipant(romain);
  expect(project.participants.length).toBe(2);
});

test('project not add antonin as dev for a second time', () => {
  expect(project.participants.length).toBe(1);
  project.addParticipant(antonin);
  expect(project.participants.length).toBe(1);
});

test('project remove antonin', ()=>{
  project.addParticipant(romain);
  expect(project.participants.length).toBe(2);
  project.removeParticipant(antonin);
  expect(project.participants.length).toBe(1);
});

var student = new Map();
student.set('id', 'st01');
student.set('name', 'Name 1');
student.set('age', 20);

console.log('Size: ' + student.size);
console.log('Name: ' + student.get('name'));
console.log('Check Id Key: ' + student.has('id'));

student.delete('age');
console.log('Size: ' + student.size);

student.clear();
console.log('Size: ' + student.size);

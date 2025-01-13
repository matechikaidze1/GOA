const { originalName: newName } = object;

const person = {
    firstName: 'mate',
    lastName: 'chikaidze',
    age: 15
  };
  
  const { firstName: first, lastName: last, age } = person;
  
  console.log(first);
  console.log(last);
  console.log(age);
  
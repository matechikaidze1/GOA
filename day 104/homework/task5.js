const users = [
    { name: 'mate', age: 15 },
    { name: 'luka', city: 'tbilisi' },
    { name: 'dato', age: 16, city: 'zugdidi' }
  ];
  
  for (const { name, age = 25, city = 'Unknown' } of users) {
    console.log(`${name} is ${age} years old and lives in ${city}.`);
  }
  
const people = [
    { name: 'lasha', age: 30 },
    { name: 'merabi', age: 15 }
];

people.forEach(obj => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
});

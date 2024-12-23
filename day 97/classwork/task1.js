const person = {
    name: "johnny",
    age: 30,
    job: "engineer",
    location: "boston",
    email: "johnnyboy@gmail.com",
    isActive: true,
    joinedYear: 2020
};

for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}

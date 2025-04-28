const userInfo = {
    name: "Mate Chikaidze",
    description: "I am a high schooler who also does programming in an academy and martial arts (MMA) training. basically i'm just an average teenage guy with not such a bizarre life, except i share a house with 8 dogs and 16 cats (getting this many animals was not my choice, my mother just really likes them and so do i, but shes the one who got most of them home)",
    age: 15,
    languages: ["JavaScript", "Python", "HTML", "CSS"]
};

document.getElementById('name').textContent = `${userInfo.name}'s portfolio`;
document.getElementById('description').textContent = userInfo.description;
document.getElementById('age').textContent = userInfo.age;
document.getElementById('languages').textContent = userInfo.languages.join(", ");

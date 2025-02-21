function greet(name, callback) {
    setTimeout(() => {
        const message = `hello ${name}!`;
        callback(message);
    }, 2000); // დროს მილიწამებში ითვლის (2000 მწ = 2 წ)
}

greet("mate", (message) => {
    console.log(message);
});

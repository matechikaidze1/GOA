function task3() {
    return Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("task 3 failed"));
        }, 2000);
    });
}

task3()
    .catch(error => console.error(error.message));

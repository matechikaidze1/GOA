function Student(name, marks) {
    this.name = name;
    this.marks = marks;

    this.hasPassed = function() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        const average = total / this.marks.length;
        return average >= 50;
    };
}

const student = new Student('locus', [9]);
console.log(student.hasPassed()); // will be true

const student2 = new Student('ben', [5]);
console.log(student2.hasPassed()); // will be false

function Classroom(students) {
    this.students = students;

    this.countStudents = function() {
        console.log("number of students: " + this.students.length);
    };
}

const myClassroom = new Classroom(['john', 'bob', 'kenny']);
myClassroom.countStudents();

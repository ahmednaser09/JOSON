
const students = {
    studentsList: [
        { name: "ahmed", grade: 85 },
        { name: "ali", grade: 90 },
        { name: "hmed", grade: 78 },
        { name: "naser", grade: 88 }
    ]
};


function sortStudentsByGrade(jsonObject) {
    return jsonObject.studentsList.sort((a, b) => a.grade - b.grade);
}


const sortedStudents = sortStudentsByGrade(students);
console.log("avarage");
console.log(sortedStudents);

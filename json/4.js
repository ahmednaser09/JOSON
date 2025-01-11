
const students = {
    studentsList: [
        { name: "ahmed", grade: 85 },
        { name: "ali", grade: 90 },
        { name: "hmed", grade: 78 },
        { name: "naser", grade: 88 }
    ]
};


function calculateAverageGrade(jsonObject) {
    const grades = jsonObject.studentsList.map(student => student.grade);
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grades.length;
    return average;
}


const averageGrade = calculateAverageGrade(students);
console.log( averageGrade); 

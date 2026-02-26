export const generateStudents = () => {
  const students = [];
  for (let i = 1; i <= 1200; i++) {
    students.push({
      id: i,
      name: `Student ${i}`,
      roll: 2000 + i,
      class: i % 2 === 0 ? "10" : "12",
      gpa: (Math.random() * (5.0 - 2.0) + 2.0).toFixed(2),
      status: i % 10 === 0 ? "Inactive" : "Active"
    });
  }
  return students;
};
import { faker } from '@faker-js/faker';

export const generateStudents = (count) => {
  const students = [];
  for (let i = 1; i <= count; i++) {
    students.push({
      id: i,
      name: faker.person.fullName(),
      roll: 1000 + i,
      class: faker.helpers.arrayElement(['9', '10', '11', '12']),
      gpa: (Math.random() * (5.0 - 2.0) + 2.0).toFixed(2),
      status: faker.helpers.arrayElement(['Active', 'Pending', 'Inactive']),
      email: faker.internet.email(),
    });
  }
  return students;
};
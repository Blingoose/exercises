const school = {
  teachers: [
    {
      id: 1,
      name: 'Pinchas',
      subjects: ['chemistry', 'biology', 'physics'],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: 'Williams',
      subjects: ['history', 'ethics'],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: 'Jennifer',
      age: 20,
    },
    {
      id: 11,
      name: 'Howard',
      age: 23,
    },
    {
      id: 12,
      name: 'Old-Timmy',
      age: 86,
    },
    {
      id: 13,
      name: 'Houston',
      age: 21,
    },
  ],
};

//? 1
school.findPerson = function (type, id) {
  const students = this[type];
  const person = students.find((e, i) => {
    return e.id === id;
  });
  return person;
};
// console.log(school.findPerson('teachers', 2));

//? 2
school.assignStudent = function (id, subject) {
  const student = school.findPerson('students', id);
  if (!student) {
    return 'No student with the specified id was found';
  }
  const teacher = school.teachers.find((e) => {
    return e.subjects.includes(subject);
  });

  if (teacher.capacityLeft < 1) {
    return 'Sorry, no available teachers left';
  } else {
    teacher.students.push(student);
    teacher.capacityLeft--;
    return teacher;
  }
};
// console.log(school.assignStudent(10, 'history'));

school.assignTeachersSubject = function (id, subject) {
  const teacher = school.teachers.find((e) => {
    return e.id === id && !e.subjects.includes(subject.toLowerCase());
  });
  if (teacher) {
    teacher.subjects.push(subject.toLowerCase());
    return teacher;
  }
};

console.log(school.assignTeachersSubject(2, 'Math'));

const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 2,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],

  findPerson(personType, id) {
    return school[personType].find((type) => type["id"] === id);
  },

  assignStudent(studentID, subject) {
    const stud = this.students.find((s) => s.id === studentID);
    if (!stud) {
      console.log("Not a valid student id");
    } else if (
      this.teachers.find(
        (s) => s.students.includes(studentID) && s.subjects.includes(subject)
      )
    ) {
      console.log(
        `Student with an id of ${studentID} has already been assigned to a class.`
      );
    } else {
      school.teachers.filter((a) => {
        if (a.capacityLeft > 0 && a.subjects.includes(subject)) {
          return a.students.push(studentID) && a.capacityLeft--;
        } else if (a.capacityLeft === 0 && a.name === "Williams") {
          console.log(`No available place left for Mr.${a.name}`);
        } else if (a.capacityLeft === 0 && a.name === "Pinchas") {
          console.log(`No available place left for Mr.${a.name}`);
        }
      });
    }
  },
};

// school.findPerson("teachers", 2);
// school.assignStudent(11, "biology");
// school.assignStudent(10, "biology");
// school.assignStudent(12, "biology");
// school.assignStudent(13, "history");
// school.assignStudent(11, "biology");
// school.assignStudent(11, "ethics");
// school.assignStudent(7, "ethics");
console.log(school.teachers);

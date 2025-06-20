
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }


  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

  console.log(teacher3);

  interface Directors extends Teacher {
    numberOfReports: number;
  }


  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  console.log(director1);


  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }


  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  console.log(printTeacher("John", "Doe"));


  interface StudentConstructor {
    new(firstName: string, lastName: string): StudentInterface;
  }

  interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
  }

  // Class implementation
  class StudentClass implements StudentInterface {
    constructor(private firstName: string, private lastName: string) {}

    workOnHomework(): string {
      return "Currently working";
    }

    displayName(): string {
      return this.firstName;
    }
  }

  // Example usage
  const student1 = new StudentClass("Grace", "Wambui");
  console.log(student1.displayName());
  console.log(student1.workOnHomework());

const multiplyValue = (value: number, multiplier = 2): number => {
  return value * multiplier;
};

const processInput = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return value === true ? "Active" : "Inactive";
  }
};

const formatCoordinate = ([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]) => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...array: T[][]): T[] => {
  return array.flat();
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses =(courses : Course[], minStudents: number): Course[]=>{
 return courses.filter(course => minStudents <= course.students && course.isPublished);
}

const pluckValues = <T, K extends keyof T>(items: T[], key : K) : T[K][] =>{
  return items.map(item => item[key])
}

class Employee{
  constructor(
    protected name : string,
    private baseSalary : number
  ){}
  getDetails(): string{
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
  }
}

class Manager extends Employee{
  constructor(
    name:string,
    baseSalary:number,
    private department : string,
  ){
    super(name, baseSalary)
  }
  getRoleInfo():string{
    return `Manager of ${this.department}: ${this.name}`
  }
}

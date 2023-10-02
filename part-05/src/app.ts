class Department {
  private employees: string[] = [];

  // Shorthand Initialization
  constructor(private id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  getEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('D1', 'Accounting');
accounting.describe();
accounting.addEmployee('Aman');
accounting.addEmployee('Mani');
accounting.getEmployeeInformation();

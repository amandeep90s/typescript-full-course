class Department {
  private employees: string[] = [];

  // Shorthand Initialization
  // Readonly property added extra security to the feature
  constructor(private readonly id: string, public name: string) {}

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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    // Super calls the base class constructor
    super(id, 'IT');
  }
}

const it = new ITDepartment('D1', ['Aman']);
console.log('Child class', it.admins);
it.describe();
it.addEmployee('Aman');
it.addEmployee('Mani');
it.getEmployeeInformation();

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReports(report: string) {
    this.reports.push(report);
  }

  printReports() {
    console.log(this.reports);
  }
}

const account = new AccountingDepartment('D2', []);
console.log('Child class', account);
account.addReports('Sales');
account.printReports();

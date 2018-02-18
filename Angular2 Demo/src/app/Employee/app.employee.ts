import { Component } from '@angular/core';

@Component({
    selector: 'app-employee',
    templateUrl: 'app/Employee/app.employee.html',
    styleUrls: ['app/Employee/employee.css']
})

export class EmployeeComponent {
    FirstName: string = 'John';
    LastName: string = 'Wick';
    Age: number = 25;
    Salary: number = 20000
}
import { Component, OnInit } from '@angular/core';
import employees from './data/employees.json';

@Component({
  selector: 'em-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  title:  String='Employee Management Solution'
  employees:  any[] = employees;
 

  constructor() { }

  ngOnInit(): void {
  }

}

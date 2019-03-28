import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/shared/employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  // ctrl +
  constructor(private service: EmployeeService) {}

  ngOnInit() {
    // this.service.getEmployees().subscribe(patientList => {
    //   console.log(patientList);
    // });
  }
}

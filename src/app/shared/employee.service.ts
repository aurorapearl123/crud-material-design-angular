// import "rxjs/Rx";
import { Injectable } from "@angular/core";
//import these for reactive add validator for angular
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Employee } from "./employee.model";
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { DatePipe } from "@angular/common";
import { Subscription } from "rxjs";
//import { tap, map, filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  //create base url
  readonly rootURL = "http://localhost/project/special/kitrol/";
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  employeeList: Employee[];

  //initialize form control
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.email),
    mobile: new FormControl("", [Validators.required, Validators.minLength(8)]),
    city: new FormControl("", Validators.required),
    gender: new FormControl("1"),
    departmentID: new FormControl(0),
    hireDate: new FormControl("", Validators.required),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: "",
      email: "",
      mobile: "",
      city: "",
      gender: "1",
      departmentID: 0,
      hireDate: "",
      isPermanent: false
    });
  }

  getEmployees() {
    return this.http.get(this.rootURL + "api/employee-all");
  }

  storeEmployee(employee: Employee) {
    console.log("this is the is permanent");
    console.log(employee.isPermanent);
    let permanent = employee.isPermanent ? 1 : 0;
    let body = new FormData();
    body.append("fullName", employee.fullName);

    body.append("email", employee.email);
    body.append("mobile", employee.mobile + "");
    body.append("city", employee.city);
    body.append("gender", employee.gender);
    body.append("departmentID", employee.departmentID + "");
    body.append("isPermanent", permanent + "");
    body.append(
      "hireDate",
      employee.hireDate == ""
        ? ""
        : this.datePipe.transform(employee.hireDate, "yyyy-MM-dd")
    );
    return this.http.post(this.rootURL + "api/employee", body);
  }

  //convert the data into form
  getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }
}

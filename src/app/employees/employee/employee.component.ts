import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/shared/employee.service";
import { NotificationService } from "src/app/shared/notification.service";
import { Observable, observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  obserser = Observable.create(observable => {
    observable.next("Start Proccessing..");
  });
  constructor(
    private service: EmployeeService,
    private notificationService: NotificationService
  ) {}

  departments = [
    { id: 1, value: "Dep 1" },
    { id: 2, value: "Dep 2" },
    { id: 3, value: "Dep 3" }
  ];

  ngOnInit() {
    this.obserser.subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log("complete")
    );
    this.service.getEmployees();
  }

  onClear() {
    this.service.form.reset();
    //after reseting the form
    //reset also the service object
    this.service.initializeFormGroup();
  }

  onSubmit() {
    //this.notificationService.success(":: Submitted successfully");
    if (!this.service.form.invalid) {
      //console.log("the value");
      //console.log(this.service.form.value);
      // this.notificationService.success(":: Submitted successfully");
      this.service
        .storeEmployee(this.service.form.value)
        .subscribe(response => {
          //console.log("the response");
          //console.log(response);
          this.notificationService.success(":: Submitted successfully");
        });

      //this.service.storeEmployee(this.service.form.value);
    }
  }
}

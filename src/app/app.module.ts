import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeeComponent } from "./employees/employee/employee.component";
import { MaterialModule } from "./material/material.module";
import { EmployeeService } from "./shared/employee.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

@NgModule({
  declarations: [AppComponent, EmployeesComponent, EmployeeComponent, EmployeeListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}

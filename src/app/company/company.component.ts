import { Component } from "@angular/core";
@Component({
    selector: 'company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']

})
export class companyComponent {

    companyName: any = "";
    companyAddress: any = "";
    companyInfo: any = { companyName: "", companyAddress: "" };
    employeeName: any = "";
    employeeAddress: any = "";
    employeeId: any = "";
    employeeList: any = [];
    isEditVisible = true;


    onSubmitClick() {
        this.companyInfo = { companyName: this.companyName, companyAddress: this.companyAddress }
        this.companyName = "";
        this.companyAddress = "";

    }
    onAddClick() {
        // synatax for declaration local variable insiode function/method
        let employeeInformation = { employeeName: this.employeeName, employeeAddress: this.employeeAddress, employeeId: this.employeeId };
        this.employeeList.push(employeeInformation);
        this.employeeName="";
        this.employeeAddress="";
        this.employeeId="";

    }

    onEditClick() {
        this.companyName = this.companyInfo.companyName;
        this.companyAddress = this.companyInfo.companyAddress;
        


    }

    // index:any are called arguments/parameters. They are values that 
    // are passed from function calls
    ontheEditClick(index: any) {
        this.employeeName = this.employeeList[index].employeeName;
        this.employeeAddress = this.employeeList[index].employeeAddress;
        this.employeeId = this.employeeList[index].employeeId;
        this.isEditVisible = false;

    }
    onUpdateClick(index: any) {
        this.employeeList[index].employeeName = this.employeeName;
        this.employeeList[index].employeeAddress = this.employeeAddress;
        this.employeeList[index].employeeId = this.employeeId;
        this.isEditVisible = true;
        this.employeeName="";
        this.employeeAddress="";
        this.employeeId="";


    }
}

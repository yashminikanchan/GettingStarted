import { Component } from "@angular/core";
@Component({
    selector: 'student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']

})

export class studentComponent {
    studentName: any = "";
    fatherName: any = "";
    motherName: any = "";
    address: any = "";
    className: any = "";
    rollno: any = "";
    age: any = "";
    studentDetails: any = [{studentName:""}]


    onSubmitClick() {


        this.studentDetails = [{ studentName: this.studentName}];
        console.log(this.studentDetails);
        this.studentName = "";
       /*  this.fatherName = "";
        this.motherName = "";
        this.address = "";
        this.className = "";
        this.rollno = "";
        this.age = ""; */
    }
    onEditClick() {

     
        this.studentName = this.studentDetails[0].studentName;
        /* this.fatherName = this.studentDetails.fatherName;
        this.motherName = this.studentDetails.motherName;
        this.address = this.studentDetails.address;
        this.className = this.studentDetails.className;
        this.rollno = this.studentDetails.rollno;
        this.age = this.studentDetails.age; */

    }


}
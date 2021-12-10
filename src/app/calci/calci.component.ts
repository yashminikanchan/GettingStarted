import { Component } from "@angular/core";

@Component({
    selector: 'calci',
    templateUrl: './calci.component.html',
    styleUrls: ['./calci.component.css']


})

export class calciComponent {

    // varibale decleration syntax 
    // <<variableName>>:<<variableType>>=<<initialValue>>;
    numba: number = 0;
    numbb: number = 0;
    numb: number = 0;


    onAddClick() {
        // converting this.numba to string because + can be interpreeted as 
        // either addition of number or concatnation of string
        this.numb = parseInt(this.numba + "") + parseInt(this.numbb + "");
        // syntax 1 of console for primitive type (number, string, boolean)
        console.log("----->>>here line number 23----->" + this.numb);
        // syntax 2 of console for primitive type (number, string, boolean)
        console.log("----->>>here line number 23----->", this.numb);
        // syntax of console for object/array type
        // console.log("------XXX------>>",JSON.stringify(studentObj))
        /*  this.numba = 0;
         this.numbb = 0; */


    }
    onSubClick() {
        this.numb = this.numba - this.numbb;
        /*  this.numba = 0;
         this.numbb = 0; */



    }
    onMultiClick() {
        this.numb = this.numba * this.numbb;
        /*  this.numba = 0;
         this.numbb = 0; */
    }
    onDivideClick() {
        this.numb = this.numba / this.numbb;
        /*  this.numba = 0;
         this.numbb = 0; */
    }
    onResultClick() {
        // let result= 2 * this.numb;
        this.numb = 2 * this.numb;


    }
}
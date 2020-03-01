import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css']
})
export class InputfieldComponent implements OnInit {
  username:string="";
  isEmpty:boolean=true;;
  constructor() { 
  }
  ngOnInit(): void {
  }

  checkString(){
    if(this.username==null ||this.username.length==0 ){
      this.isEmpty=true;
    }else{
      this.isEmpty=false;
    }
  }

  resetToEmptyString(){
    this.username="";
    this.isEmpty=true;
  }
  

}

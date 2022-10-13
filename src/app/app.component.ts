import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { share } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'my-app';
  user: any;
userForm: FormGroup;
data:any;
  formdata: any;
  share: any;
removeall(){
  this.data=[];
}
  constructor(private fb:FormBuilder){
    this.data=[];
    this.userForm=this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      email:['',Validators.required],
      phone_No:['',Validators.required]
    })
  }
public adddata():void{
  this.data.push(this.userForm.value);
  this.userForm.reset();
}
reset(){
  this.userForm.reset();
}
public edit(userForm:any){

}

remove(element: any){
  this.data.forEach((value: any,index: any)=>{
    if (value==element)
    this.data.splice(index,1);

  });
  

}
  ngOnInit(): void{}
}
function removeall() {
  throw new Error('Function not implemented.');
}
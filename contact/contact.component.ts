import { CommonService } from './../../sharedServices/common.service';
import { Contact } from './../contact';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact=new Contact();
  contactform=new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.pattern("^[A-Z][a-zA-Z]{1,19}$")]),
    lastname:new FormControl("",[Validators.required,Validators.pattern("^[A-Z][a-zA-Z0-9]{1,19}$")]),
    phone:new FormControl("",[Validators.required,Validators.pattern("[0-9]{10}$")]),
    email:new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password:new FormControl("",[Validators.required,Validators.pattern("^(?=.[A-Z])((?=.[a-z]))(?=.[0-9])(?=.[^A-Za-z0-9]).{8,15}$")]),
 
  });
  initForm(){
    this.contactform=new FormGroup({
      firstname:new FormControl("",[Validators.required,Validators.pattern("^[A-Z][a-zA-Z]{1,19}$")]),
      lastname:new FormControl("",[Validators.required,Validators.pattern("^[A-Z][a-zA-Z0-9]{1,19}$")]),
      phone:new FormControl("",[Validators.required,Validators.pattern("[0-9]{10}$")]),
      email:new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password:new FormControl("",[Validators.required,Validators.pattern("^(?=.[A-Z])((?=.[a-z]))(?=.[0-9])(?=.[^A-Za-z0-9]).{8,15}$")]),
   
    });

  }
  submit(){
    this.contact.firstname=this.contactform.controls['firstname'].value;
    this.contact.lastname=this.contactform.controls['lastname'].value;
    this.contact.phone=this.contactform.controls['phone'].value;
    this.contact.email=this.contactform.controls['email'].value;
    this.contact.password=this.contactform.controls['password'].value;
    
    console.log(this.contact);
    if(this.contact.firstname=='')
    alert('form field missing')
    else
    this.commmonService.register(this.contact).subscribe(data=>{
      this.initForm();
      alert("form submitted")
      
    })
    
  }
  constructor(private commmonService:CommonService) { }

  ngOnInit(): void {
  }

}
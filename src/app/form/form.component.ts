import { Component } from '@angular/core';
import { FormControl, NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: any;
  contactdetails: any;
  constructor(private fb: FormBuilder){
   this.form = this.fb.group({
     username: ['',[
      Validators.required,
      Validators.minLength(5)
     ]],
     email: ['',[
      Validators.required,
      Validators.email,
      Validators.pattern
     ]],
     address: ['',[
      Validators.required
     ]]
    //  contactdetails: new FormGroup({
    //   address:new FormGroup('',
    //     Validators.required
    //    ),
    //    shipping_address: new FormGroup('',[
    //     Validators.required
    //    ])
     })

    
   
}
get address (){
  return this.form.get('contactdetails.address');
}
//   constructor(){
//    this.form = new FormGroup({
//      fullname: new FormControl('',[
//       Validators.required,
//       Validators.minLength(5)
//      ]),
//      email: new FormControl(),
//      address: new FormControl()
//    })
// }

 onsubmit(s:NgForm){
  alert(s.value)
  console.log(s.value)
 }
 getValue(s:FormControl){
  console.log(s)
 }
 onSubmit(){
  console.log(this.form.value)
 }
}
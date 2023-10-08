import { Component } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators, FormArray, FormBuilder } from '@angular/forms';
import { noSpace } from '../validators/nospace.validators';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
 form : any;
 pattern : string = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";

 constructor(fb : FormBuilder){
  this.form = fb.group({
    fullname: ['',[
      Validators.required,
      Validators.minLength(5),
      noSpace.noSpaceValidations
    ]],
    email: ['',[
      Validators.required,
      Validators.email,
      Validators.pattern(this.pattern)
    ]],
    contactaddress : fb.group({
      address: ['',[
        Validators.required
      ]],
      shippingaddress: ['',[
        Validators.required
      ]]
    }),
    skills: fb.array([])
  })

//   this.form = new FormGroup({
//     fullname: new FormControl('',[
//       Validators.required,
//       Validators.minLength(5)
//     ]),
//     email: new FormControl('',[
//       Validators.required,
//       Validators.pattern(this.pattern)
//     ]),
//     contactaddress: new FormGroup({
//       address: new FormControl('',
//     Validators.required),
//       shippingaddress: new FormControl('',
//     Validators.required)
//     }),
//     skills: new FormArray([])
//   })
 }
 get fullname(){
  return this.form.get('fullname');
 }
 get email(){
  return this.form.get('email');
 }
 get address(){
  return this.form.get('contactaddress.address');
 }
 get shippingaddress(){
  return this.form.get('contactaddress.shippingaddress')
 }
 get skills (){
  return this.form.get('skills') as FormArray;
 }

 onsubmit(){
  console.log(this.form.value)
 }
 removeskills(index: any){
  this.skills.removeAt(index)
 }
 addskills(skill : HTMLInputElement){
  this.skills.push(
    new FormControl(skill.value)
  )
  console.log(this.form.value)
  skill.value = ""
 }
}

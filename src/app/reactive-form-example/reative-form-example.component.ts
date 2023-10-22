import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/Service/user.service';
import Student from 'src/model/Student';


@Component({
  selector: 'app-reative-form-example',
  templateUrl: './reative-form-example.component.html',
  styleUrls: ['./reative-form-example.component.css']
})
export class ReativeFormExampleComponent implements OnInit {
  studentForm!: FormGroup;

  studentForm2!: FormGroup
  s1: Student = {}
  constructor(private formBuilder: FormBuilder, private _userService1: UserService) { }



  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: [0, [Validators.required, Validators.min(1)]],
      dob: ['', [Validators.required]],
      mark: [0, [Validators.required]]
    });

    this.studentForm2 = this.formBuilder.group({
      n1: ['']
    })

  }

  onSubmit() {
    if (this.studentForm.valid) {
      const studentData = this.studentForm.value;
      console.log(studentData)
    }
  }

  async onSubmit2() {

    const studentData = this.studentForm2.value;
    console.log(studentData)

    await this._userService1.postUser(studentData)
    // post to any Api

  }



  hello() {

  }
}

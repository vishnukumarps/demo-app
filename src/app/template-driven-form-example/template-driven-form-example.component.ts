import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import Student from 'src/model/Student';
import axios from 'axios';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-template-driven-form-example',
  templateUrl: './template-driven-form-example.component.html',
  styleUrls: ['./template-driven-form-example.component.css']
})
export class TemplateDrivenFormExampleComponent implements OnInit {

  firstName: string = '';
  param1:any
  param2:any
  constructor(private router: Router) { }

  ngOnInit(): void {
  
  }

  student: Student = {};
 

  async onSubmit2(item: any) {
   console.log(this.param1)
   await axios.post("https://localhost:7232/api/Student2/Addstudent",item)
  }

  goToOtherPage() {
    this.router.navigate(['/pohtos']);
  }
  login(item: any) {
    console.log(item)
  }
}

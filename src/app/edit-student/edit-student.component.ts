import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: any

  student: any
  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.queryParamMap.get('studentId');
    console.log(this.id)

    await this.GetStudent();
  }

  async GetStudent() {
    var student = await axios.get(`https://localhost:7232/api/Student2/GetStudent?id=${this.id}`)
    this.student = student.data
    console.log(this.student.data)
  }
  
  async edit() {
    console.log(this.student)
   await axios.patch(`https://localhost:7232/api/Student2/UpdateStudent?id=${this.id}`,this.student)
  }
}

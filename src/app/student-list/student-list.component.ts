import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import Student from 'src/model/Student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: any;
  constructor(private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.GetStudents()
  }
  goToOtherPage() {
    this.router.navigate(['/pohtos']);
  }

 
  async GetStudents() {

    this.students = await axios.get("https://localhost:7232/api/Student2")

    console.log(this.students.data)
  }

  async onDelete(id:number){
    console.log(id)
    await axios.delete(`https://localhost:7232/api/Student2/DeleteStudent?id=${id}`)
    window.location.reload();
  }
}

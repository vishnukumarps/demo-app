import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import axios from 'axios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  data: any
  data2: any;
  students: any;

  constructor(private test: TestService,private router: Router) { }
  ngOnInit(): void {
    this.test.getPhotos().subscribe(data => {
      this.data = data
      console.log(this.data)
    })
    this.getPhotos2();
    this.getStudents();
  }

  async getPhotos2() {

    this.data2 = await axios.get('https://api.slingacademy.com/v1/sample-data/users');
    // Handle the successful response here
    console.log(this.data2.data.users);

  }

  async getStudents() {
    this.students=await axios.get('https://localhost:7232/api/Student/v')
  }

  editStudent(student: any) {
    // Implement your edit logic here, e.g., open a modal for editing
    console.log('Edit student:', student);
    this.router.navigate(['edit', student.id]);
  }

  // Function to add a new student
  addStudent() {
    // Implement your add logic here, e.g., open a modal for adding a new student
    console.log('Add student');
  }

  // Function to delete a student's record
  deleteStudent(studentId: number) {
    // Implement your delete logic here, e.g., show a confirmation dialog and delete the student if confirmed
    console.log('Delete student with ID:', studentId);
  }
}

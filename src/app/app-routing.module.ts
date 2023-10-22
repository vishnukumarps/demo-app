import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ReativeFormExampleComponent } from './reactive-form-example/reative-form-example.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { TemplateDrivenFormExampleComponent } from './template-driven-form-example/template-driven-form-example.component';
import { UsersListComponent } from './users-list/users-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  {
    path: "students",
    component: StudentListComponent
  },
  {
    path: "editStudent",
    component: EditStudentComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  }, {
    path: 'form1',
    component: ReativeFormExampleComponent
  }, {
    path: 'form2',
    component: TemplateDrivenFormExampleComponent
  }, {
    path: 'photos',
    component: PhotoListComponent
  }, {
    path: "users2",
    component: UsersListComponent

  },
  //{ path: 'edit/:id', component: EditStudentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

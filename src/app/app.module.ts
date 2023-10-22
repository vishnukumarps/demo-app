import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { Header1Component } from './header1/header1.component';
import { FooterComponent } from './footer/footer.component';
import { ReativeFormExampleComponent } from './reactive-form-example/reative-form-example.component';
import { TemplateDrivenFormExampleComponent } from './template-driven-form-example/template-driven-form-example.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    Header1Component,
    FooterComponent,
    ReativeFormExampleComponent,
    TemplateDrivenFormExampleComponent,
    PhotoListComponent,
    UsersListComponent,
    StudentListComponent,
    EditStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SelectedcourseComponent } from './components/selectedcourse/selectedcourse.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HomeComponent,
    CourseDetailsComponent,
    PagenotfoundComponent,
    SelectedcourseComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

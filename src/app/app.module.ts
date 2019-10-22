import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './shared/student.service';
import { FireauthService } from './shared/fireauth.service';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { UserResolver } from './student/user.resolver';
import { HomeComponent } from './home/home.component';
import { CodingComponent } from './coding/coding.component';
import { CoursesComponent } from './courses/courses.component';
import { EbookComponent } from './ebook/ebook.component';
import { ProductService } from './shared/product.service';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CodingComponent,
    CoursesComponent,
    EbookComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,

    RouterModule.forRoot([
      { path:"" , redirectTo : '/home' , pathMatch : "full"},
      { path : 'home' , component : HomeComponent},
      { path : 'coding' , component : CodingComponent},
      { path : 'ebook' , component : EbookComponent},
      { path: 'courses' , component: CoursesComponent},
      { path : 'admin' , component : AdminComponent },
      { path: 'login' , component : LoginComponent, canActivate: [AuthGuard]},
      { path: 'register' , component : RegisterComponent, canActivate: [AuthGuard]},
      { path: 'student' , component : StudentComponent, resolve: { data: UserResolver}},  
      
      
    ])
  

  ],
   

  providers: [StudentService, FireauthService, AuthGuard, UserResolver,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

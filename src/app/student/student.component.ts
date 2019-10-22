import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { UserService } from '../shared/user.service';
import { FireauthService } from '../shared/fireauth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../shared/user.modal';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.studentService.form.controls;
  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;

  constructor(
    private studentService: StudentService,
    public userService: UserService,
    public authService: FireauthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
      } 
    });
  }

  createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.studentService.form.valid) {
      if (this.studentService.form.get('$key').value == null) {
        this.studentService.insertStudent(this.studentService.form.value);
      } else {
        this.studentService.updateStudent(this.studentService.form.value);
      }
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 6000);
      this.submitted = false;
      this.studentService.form.reset();
     

      this.studentService.form.setValue({
        $key: null,
        fullName: '',
        email: '',
        mobile: '',
        location: ''
      });
    }
  }


  logout() {
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log('Logout error', error);
    });
  }

}

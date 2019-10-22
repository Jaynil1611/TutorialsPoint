import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tutorials';

  constructor(private router: Router) { }
  
  btnClick = function () {
    this.router.navigateByUrl('/login');
  };
}

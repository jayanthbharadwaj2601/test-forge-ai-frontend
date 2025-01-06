import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public resp:any;
  constructor(public http:HttpClient,public router:Router,public user:UserService)
  {

  }
  generate_test()
  {
    this.router.navigateByUrl('generate_test');
  }
  about()
  {
    this.router.navigateByUrl('about');
  }
  logout()
  {
    this.router.navigateByUrl('');
  }

}

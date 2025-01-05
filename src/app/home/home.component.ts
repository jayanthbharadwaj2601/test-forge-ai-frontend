import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public resp:any;
  constructor(public router:Router,public http:HttpClient,public user:UserService)
  {

  }
  login()
  {
    this.router.navigateByUrl('login');
  }
  signup1(username:String,password:String)
  {
    this.http.post("https://testforgebackend-production.up.railway.app/getuser",{username:username,password:password},{observe:"response"}).subscribe(body=>{
      this.resp = body.body
      if(this.resp.username!=null)
        {this.user.username=this.resp.username;
        this.user.password=this.resp.password;}
        else
        {
          this.user.username=" ";
        this.user.password=" ";
        }
      console.log(this.resp)
    });
  }
  signup(username:string,password:string)
  {
    if(this.user.username==' ')
    {
      this.user.username=username;
      this.user.password=password;
      this.http.post("https://testforgebackend-production.up.railway.app/signup",{username:this.user.username,password:this.user.password},{observe:"response"}).subscribe(body=>{
      this.resp = body.body
      console.log(this.resp)
    });
    this.router.navigateByUrl('generate_test');
  }
}
}
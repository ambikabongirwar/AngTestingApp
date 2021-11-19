import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onLogin(ref: any) {
    let credentialsObj: any = ref.value;
    if (credentialsObj.username == "admin" && credentialsObj.password == "admin") {
      this.router.navigateByUrl("/admin")
    }
    else {
      alert("Invalid credentials");
    }
  }
}

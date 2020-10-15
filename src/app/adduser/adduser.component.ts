import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(
    private userservice: UserService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private tokenStorageService: TokenStorageService) { }


  isLoggedIn = false;
  user = {
    username: '',
    password: '',
    firstname: '',
    last_name : '',
    phone: '',
    user_role:''
  };
  submitted = false;

  

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const authUser = this.tokenStorageService.getUser();   
      console.log(authUser.data._id);   
    }else{
      const authUser = null; 
    }

  }

  saveUser(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
      firstname: this.user.firstname,
      last_name: this.user.last_name,
      phone: this.user.phone,
      user_role: '2'
    };

    this.userservice.addUser(data)

      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/allusers']);
        },
        error => {
          //console.log(error);
          console.log('error here ');
          console.log(data);
        });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      username: '',
      password: '',
      firstname: '',
      last_name : '',
      phone: '',
      user_role:''
    };
  }

}

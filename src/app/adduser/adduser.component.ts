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
    name: '',
    email: '',
    gender: '',
    phone: '',
    password: '',
    addedby:''
  };
  submitted = false;

  

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const authUser = this.tokenStorageService.getUser();   
      console.log(authUser.data._id);   
    }else{
      const authUser = null; 
      console.log('not added user. This is registerd ');
    }

  }

  saveUser(): void {
    const data = {
      name: this.user.name,
      email: this.user.email,
      gender: this.user.gender,
      phone: this.user.phone,
      password: this.user.password,
      addedby: 'user'
    };

    this.userservice.addUser(data)
      console.log(data);
      // .subscribe(
      //   response => {
      //     console.log(response);
      //     this.submitted = true;
      //     this.router.navigate(['/allusers']);
      //   },
      //   error => {
      //     console.log(error);
      //   });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      name: '',
      email: '',
      gender: '',
      phone: '',
      password: '',
      addedby:''
    };
  }

}

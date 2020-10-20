import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor( private userservice : UserService, private route: ActivatedRoute, private router: Router ) { }

  users:any; 
  records;


  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userservice.getAll()
      .subscribe(
        data => {
          this.users = data;
          this.records = this.users.data;
          console.log(this.users);
          ///console.log(this.records);
          console.log('Users  here ');
        },
        error => {
          console.log(error);
        });
  }

  deleteUser(id): void {

    const data = {
      userid: id,
    };
    console.log(data);
    this.userservice.delete(data)
      .subscribe(
        response => {
          console.log(response);
          alert('record Deleted ');
          window.location.reload();
        },
        error => {
          //console.log(error);
          window.location.reload();
        });
  }

}

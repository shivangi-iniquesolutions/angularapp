import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  currentRecord = null;
  currentUser = null;
  message = '';
  UserID = this.route.snapshot.paramMap.get('id');
  

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.message = '';
      this.getUser(this.route.snapshot.paramMap.get('id'));
      console.log('update page here ');
    }

    getUser(id): void {
      this.userService.get(id)
        .subscribe(
          data => {
            this.currentUser = data;
            this.currentRecord = this.currentUser[0];
            //console.log(this.currentRecord);
            //console.log(data);
          },
          error => {
            console.log(error);
          });
    }


    updateUser(): void {
      
      const data = {
        firstname: this.currentUser.firstname,
        last_name: this.currentUser.last_name,
        phone: this.currentUser.phone,
        user_role: '2'
      };

      //console.log(data);
      console.log(this.currentUser[0]);
      this.userService.update(this.UserID, this.currentUser[0])
        .subscribe(
          response => { 
            
            console.log(this.UserID);
            
            //console.log(response);
            this.message = 'The Record was updated successfully!';
            this.router.navigate(['/allusers']);
          },
          error => {
            console.log(error);
          });
    }

}

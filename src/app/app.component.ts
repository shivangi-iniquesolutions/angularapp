import { Component } from '@angular/core';
import { Observable } from 'rxjs';  
import { TokenStorageService } from './_services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular10Crud';
  private roles: string[];
  isLoggedIn = false;
  roleAdmin = false;
  roleUser = false;
  username: string;
  testMessage$: Observable<string>;  

  

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {


    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.user.role_id;
      if(user.user.role_id == 1){
        this.roleAdmin = true;
        console.log('Admin Here');
      }else{
        this.roleUser = true;
        console.log('User Here');
      }
      console.log('welcome user ');

      this.username = user.user.username;
      console.log(this.username);
    }
  }
  
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

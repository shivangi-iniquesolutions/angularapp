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
  username: string;
  testMessage$: Observable<string>;  

  

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {


    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      console.log('welcome user ');


      this.username = user.username;
    }
  }
  
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

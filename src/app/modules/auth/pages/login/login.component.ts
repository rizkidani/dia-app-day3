import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { 
  }

  id: number = 1;
  users: any[] = [];
  data: any =
    {
      "address": {
        "geolocation": {
          "lat": "30.24788",
          "long": "-20.545419"
        },
        "city": "fort wayne",
        "street": "oak lawn ave",
        "number": 526,
        "zipcode": "10256-4532"
      },
      "id": 10,
      "email": "jimmie@gmail.com",
      "username": "jimmie_k",
      "password": "klein*#%*",
      "name": {
        "firstname": "jimmie",
        "lastname": "klein"
      },
      "phone": "1-104-001-4567",
      "__v": 0
    };

  ngOnInit() {
    this.authService.getUsers().subscribe({
      next: (res: any) => {
        this.users = res;
        console.log("User data successfully retrieved:", res);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log("User data fetched successfully");
      }
    });
  }

  save() {
    const data =
      {
      "address": {
        "geolocation": {
          "lat": "30.24788",
          "long": "-20.545419"
        },
        "city": "fort wayne",
        "street": "oak lawn ave",
        "number": 526,
        "zipcode": "10256-4532"
      },
      "id": 10,
      "email": "jimmie@gmail.com",
      "username": "jimmie_k",
      "password": "klein*#%*",
      "name": {
        "firstname": "jimmie",
        "lastname": "klein"
      },
      "phone": "1-104-001-4567",
      "__v": 0
    };

    this.authService.addUser(data).subscribe((res) => {
      console.log("save" + res);
    });
  }

  updatePut(id: number) {
    this.authService.updatePutUser(this.data, id).subscribe((res) => {
      console.log("put" + res);
    });
  }

  deleteUser(id: number) {
    this.authService.deleteUser(id).subscribe((res) => {
      console.log("delete" + res);
    });
  }

  login() {
    localStorage.setItem('token', 'your-authentication-token');
    return this.router.navigate(['']);
  }
}

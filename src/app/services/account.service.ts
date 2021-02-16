import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { environment } from '@environments/environment';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {
	//uri = '/business';
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }
/* 
     login(username, password) {
        return this.http.post<User>(`${environment.apiUrl}/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }  */
	
	  login(username, password) {
        return this.http.post<User>(`http://localhost:3000/users/authenticate`, { username, password })
            .pipe(map(user => {
                console.log(user);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                //var my_object = JSON.parse(localStorage.getItem('user'));
                //const token = my_object.token; // you probably want to store it in localStorage or something
                //console.log("mmmmmm"+token);
                this.userSubject.next(user);
                return user;
            }));
    }
 
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    register(user: User) {
        //return this.http.post(`${environment.apiUrl}/register`, user);
		return this.http.post(`http://localhost:3000/users/register`, user);
    }

    getAll() {
       /*  var my_object = JSON.parse(localStorage.getItem('user'));
    const token = my_object.token; // you probably want to store it in localStorage or something
     console.log("mmmmmm"+token);
    var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        headers_object.append("Authorization", "Bearer " + token);

        const httpOptions = {
          headers: headers_object
        };*/
        return this.http.get<User[]>(`http://localhost:3000/users`); 
        //return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}
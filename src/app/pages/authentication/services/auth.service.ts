import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.development';
import { LoginRta, User } from 'src/app/models/auth.model';

// import { environment } from './../../environments/environment';
// import { LoginRta, User } from './../models/auth.model';
// import { TokenService } from './../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private tokenService = inject(TokenService);

  private authState = new BehaviorSubject<User | null>(null);
  authState$ = this.authState.asObservable();

  login(email: string, clave: string) {
    const url = `${environment.API_URL}/auth/login`;
    return this.http.post<LoginRta>(url, { email, clave })
      .pipe(
        tap(response => {
          this.tokenService.saveToken(response.access_token)
          this.tokenService.saveNamUSe(response.user['nombre'])
          this.authState.next(response.user['nombre'])
        }),
        // switchMap(_ => this.getProfile()),
        tap((user: any) => {
          this.authState.next(user.user)
        })
      )
  }

  setAuthState(user: any | null) {
    this.authState.next(user);
  }

  getProfile() {
    const name = this.tokenService.nombre;
    return name
  }


  logout() {
    this.tokenService.clearToken();
  }
}

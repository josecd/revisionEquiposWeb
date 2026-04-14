import { Injectable, signal,computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  nombre = signal(localStorage.getItem('userName'))
  nameToke = computed(()=> ` ${this.nombre()} test`)

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  saveNamUSe(name: string) {
    this.nombre.set(name);
    localStorage.setItem('userName', name);
  }

  getToken() {
    return localStorage.getItem('token');
  }


  saveUserId(id: number) {
    localStorage.setItem('userId', String(id));
  }

  getUserId(): number | null {
    const val = localStorage.getItem('userId');
    return val ? Number(val) : null;
  }

  clearToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
  }


  //pruebas signals y computed

}

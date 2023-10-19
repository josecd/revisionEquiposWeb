import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  form = this.fb.nonNullable.group({
    correo: ['', [Validators.required]],
    clave: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.form.valid) {
      const { correo, clave } = this.form.getRawValue();
      this.auth.login(correo, clave)
      .subscribe(() => {
        this.router.navigate(['/reportes/lista']);
      });
    }
  }
}

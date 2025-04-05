import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Inyectamos el Router
  const router = inject(Router);

  // Verificamos si el token está presente en localStorage
  const token = localStorage.getItem('token');

  if (!token) {
    // Si no hay token, redirigimos al usuario al login
    router.navigate(['/auth/login']);
    return false;
  }

  // Si hay token, dejamos continuar a la ruta solicitada
  return true;
};

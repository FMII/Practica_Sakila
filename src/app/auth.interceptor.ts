import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Verificar si estamos en el navegador
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    
    // Si hay un token, añadirlo a las cabeceras de la solicitud
    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      // Pasar la solicitud modificada al siguiente interceptor o al manejador
      return next(clonedRequest);
    }
  }
  
  // Si no hay token o estamos en el servidor, pasar la solicitud sin modificar
  return next(req);
};





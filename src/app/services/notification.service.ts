// src/app/services/notification.service.ts
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  showConfirmation(title: string, text: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#14b8a6', // Teal
      cancelButtonColor: '#f43f5e',   // Rose
      confirmButtonText: '¡Sí, enviar!',
      cancelButtonText: 'Cancelar'
    });
  }

  showSuccess(message: string) {
    Swal.fire({
      icon: 'success',
      title: '¡Excelente!',
      text: message,
      confirmButtonColor: '#14b8a6'
    });
  }

  showError(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops... Hubo un problema',
      text: message,
      confirmButtonColor: '#14b8a6'
    });
  }
}

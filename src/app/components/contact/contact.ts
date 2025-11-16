// src/app/components/contact/contact.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { NotificationService } from '../../services/notification.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Importamos los iconos

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSending = false;

   // Hacemos los iconos accesibles para el HTML
   faLinkedin = faLinkedin;
   faGithub = faGithub;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    // Creamos el formulario reactivo con sus validaciones
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit(): Promise<void> {
    // Si el formulario no es válido, mostramos un error y no hacemos nada más
    if (this.contactForm.invalid) {
      this.notificationService.showError('Por favor, completa todos los campos correctamente.');
      return;
    }

    // Usamos el servicio de notificación para pedir confirmación
    const result = await this.notificationService.showConfirmation(
      '¿Confirmas el envío?',
      'Tu mensaje está a punto de llegar a mi bandeja de entrada.'
    );

    // Si el usuario hace clic en "¡Sí, enviar!"
    if (result.isConfirmed) {
      this.isSending = true; // Activamos el estado de "enviando"

      // Llamamos al servicio de contacto para enviar los datos
      this.contactService.sendMessage(this.contactForm.value).subscribe({
        next: (response) => {
          // Si todo sale bien, mostramos alerta de éxito
          this.notificationService.showSuccess(response.message || '¡Mensaje enviado con éxito!');
          this.contactForm.reset(); // Limpiamos el formulario
          this.isSending = false; // Desactivamos el estado de "enviando"
        },
        error: (err) => {
          // Si hay un error, mostramos alerta de error
          console.error('Error al enviar el mensaje:', err);
          this.notificationService.showError('Algo falló al enviar el mensaje. Por favor, intenta de nuevo.');
          this.isSending = false; // Desactivamos el estado de "enviando"
        }
      });
    }
  }
}

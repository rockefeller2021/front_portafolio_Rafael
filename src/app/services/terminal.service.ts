import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Importamos Observable y of

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  constructor() { }

  // La función ahora devuelve un Observable<string> para mantener la consistencia
  executeCommand(command: string): Observable<string> {
    const args = command.split(' ');
    const cmd = args[0].toLowerCase();

    switch (cmd) {
      case 'help':
        // ===== 1. ACTUALIZAMOS EL MENSAJE DE AYUDA =====
        return of(`Comandos disponibles:<br>
                <span class="text-teal-400">about</span>      - Muestra información sobre mí.<br>
                <span class="text-teal-400">projects</span>   - Lista mis proyectos principales.<br>
                <span class="text-teal-400">socials</span>    - Muestra mis redes profesionales.<br>
                <span class="text-teal-400">blog</span>       - Te lleva a mi blog técnico.<br>
                <span class="text-teal-400">portfolio</span>  - Describe este proyecto.<br>
                <span class="text-teal-400">contact</span>    - Información de contacto.<br>
                <span class="text-teal-400">clear</span>      - Limpia la terminal.`);

      case 'about':
        return of("Rafael Alvarado. Q Engineer de Barranquilla, Colombia. Apasionado por la tecnología, el desarrollo full-stack y asegurar la calidad del software. Actualmente cursando Ingeniería de Sistemas en la CUN.");

      case 'projects':
        // Este se queda con el texto quemado, como lo tenías
        return of(`Proyectos Destacados:<br>
                - <span class="text-yellow-400">Vitrakapp:</span> API REST con IA para cálculo de IMC y consejos de salud.<br>
                - <span class="text-yellow-400">Fluo Flix:</span> Frontend en Angular para consultar info de películas y series.<br>
                - <span class="text-yellow-400">proyectQa:</span> Set de pruebas E2E con Selenium y Cucumber.`);

      case 'socials':
        return of(`Puedes encontrarme en:<br>
                - <a href="https://linkedin.com/in/tu-usuario" target="_blank" class="text-blue-400 hover:underline">LinkedIn</a><br>
                - <a href="https://github.com/tu-usuario" target="_blank" class="text-blue-400 hover:underline">GitHub</a>`);

      case 'blog':
        window.location.href = '/blog';
        return of("Navegando al blog...");

      case 'contact':
        return of("Puedes contactarme a través del formulario en la página principal o escribiéndome a <span class='text-teal-400'>tu-correo@email.com</span>.");

      // ===== 2. AQUÍ ESTÁ EL NUEVO COMANDO 'PORTFOLIO' =====
      case 'portfolio':
        return of(
          `Este portafolio es una aplicación Full-Stack construida por mí desde cero.<br><br>
          <span class="text-teal-400">Frontend:</span><br>
          - Framework: <span class="text-yellow-400">Angular</span> (Standalone, Signals, Router)<br>
          - Estilos: <span class="text-yellow-400">Tailwind CSS</span><br>
          - Features: Blog, Terminal Interactiva, Animaciones.<br><br>
          <span class="text-teal-400">Backend:</span><br>
          - Framework: <span class="text-yellow-400">Spring Boot 3+</span><br>
          - Lenguaje: <span class="text-yellow-400">Java</span><br>
          - Base de Datos: <span class="text-yellow-400">MySQL</span> (con JPA/Hibernate)<br>
          - Arquitectura: API RESTful con DTOs.<br><br>
          <span class="text-teal-400">Despliegue Planeado:</span><br>
          - Contenedor: <span class="text-yellow-400">Docker</span><br>
          - Plataforma: <span class="text-yellow-400">Google Cloud Run</span>`
        );

      case 'clear':
        return of('clear'); // Señal para que el componente limpie la pantalla

      default:
        return of(`<span class="text-red-500">Comando no encontrado: ${cmd}</span><br>Escribe 'help' para ver la lista de comandos.`);
    }
  }
}

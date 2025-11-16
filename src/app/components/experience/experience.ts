import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. Importa el componente de Font Awesome y la interfaz para los iconos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// 2. Importa los iconos específicos que vamos a usar desde el paquete de marcas
import {
  faJava,
  faJsSquare,
  faAngular,
  faBootstrap,
  faSass,
  faAws,
  faDocker,
  faGit,
  faGithub,


} from '@fortawesome/free-brands-svg-icons';

// 3. Modificamos la interfaz para que acepte un icono de FontAwesome o una URL de un SVG
interface Technology {
  name: string;
  icon?: IconDefinition; // Para iconos de Font Awesome
  svgUrl?: string;       // Para SVGs externos (como Playwright)
}

@Component({
  selector: 'app-experience',
  standalone: true,
  // 4. Añadimos FontAwesomeModule a los imports del componente
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent {

  // 5. Creamos la nueva lista de tecnologías
  technologies: Technology[] = [
    { name: 'Java', icon: faJava },
    { name: 'TypeScript', svgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'Angular', icon: faAngular },
    // OJO: Playwright no tiene icono en FontAwesome, así que usamos un SVG externo
    { name: 'Playwright', svgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg' },
    { name: 'Selenium', svgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg' },
    { name: 'Spring', svgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'PostgreSQL', svgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'Firebase', svgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },


  ];

  constructor() { }
}

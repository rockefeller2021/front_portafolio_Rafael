import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos lo necesario para Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// 1. Actualizamos la interfaz para incluir las URLs
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string; // Enlace al repositorio de GitHub
  liveUrl?: string;  // Enlace a la demo en vivo (opcional)
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // Añadimos FontAwesomeModule
  templateUrl: './portfolio.html',
})
export class PortfolioComponent {
  // Hacemos los iconos accesibles para el HTML
  faGithub = faGithub;
  faExternalLinkAlt = faExternalLinkAlt;

  // 2. Llenamos el array con TUS proyectos reales
  projects: Project[] = [
    {
      title: 'Vitrakapp',
      description: 'Una API REST para cálculo de IMC que se conecta con IA para dar consejos médicos y recursos saludables.',
      imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Vitrakapp',
      tags: ['Spring Boot', 'Java', 'JPA', 'MySQL', 'AI'],
      githubUrl: 'https://github.com/rockefeller2021/vitatrack-api', // <-- ¡CAMBIA ESTA URL!
      // liveUrl: 'https://vitrakapp.com' // Si tuvieras una demo
    },
    {
      title: 'Fluo Flix',
      description: 'Permite tener información de películas y series en tiempo real, consumiendo una API externa.',
      imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Fluo+Flix',
      tags: ['Angular', 'Tailwind CSS', 'TypeScript', 'API Rest'],
      githubUrl: 'https://github.com/rockefeller2021/fluor-flix', // <-- ¡CAMBIA ESTA URL!
      liveUrl: 'https://fluo-flix.vercel.app' // <-- ¡CAMBIA ESTA URL!
    },
    {
      title: 'proyectQa',
      description: 'Set de pruebas End-to-End para la página "Shop Test", demostrando habilidades de automatización.',
      imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=proyectQa',
      tags: ['Java', 'Selenium', 'Cucumber', 'Maven'],
      githubUrl: 'https://github.com/rockefeller2021/testQARalv', // <-- ¡CAMBIA ESTA URL!
    }
  ];
}

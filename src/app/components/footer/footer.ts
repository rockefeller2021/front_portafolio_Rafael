import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Importamos los iconos

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  // Hacemos los iconos accesibles para el HTML
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  // Para que el año del copyright se actualice solo
  currentYear = new Date().getFullYear();

  constructor() { }
}

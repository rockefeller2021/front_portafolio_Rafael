import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importa el Router y los eventos de navegación
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UiService } from '../../services/ui.service';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";





@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, FaIconComponent],

  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  // 2. Nueva variable para saber si estamos en la página de inicio
  isHomePage = true;

  private routerSubscription!: Subscription;

  // 3. Inyectamos el Router en el constructor
  faTerminal = faTerminal;
  constructor(private router: Router, public uiService: UiService) {}

  ngOnInit(): void {
    // 4. Nos suscribimos a los eventos del router
    this.routerSubscription = this.router.events.pipe(
      // Nos interesan solo los eventos de 'NavigationEnd', que ocurren cuando la navegación ha terminado
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Si la URL es exactamente la raíz ('/'), estamos en la página de inicio
      this.isHomePage = event.urlAfterRedirects === '/';
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnDestroy(): void {
    // Es buena práctica desuscribirse para evitar fugas de memoria
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}

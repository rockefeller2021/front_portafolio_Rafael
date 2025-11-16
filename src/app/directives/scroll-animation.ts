// src/app/directives/scroll-animation.directive.ts
import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'is-visible');
        } else {
          // Esta línea hace que "desaparezca" al subir (se vuelve semitransparente)
          this.renderer.removeClass(this.el.nativeElement, 'is-visible');
        }
      });
    }, { threshold: 0.5 }); // Se activa cuando el 50% del elemento está visible

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

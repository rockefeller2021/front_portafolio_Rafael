import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { ExperienceComponent } from '../experience/experience';
import { PortfolioComponent } from '../portfolio/portfolio';
import { About } from '../about/about';
import { ContactComponent } from '../contact/contact';
import { ScrollAnimationDirective } from '../../directives/scroll-animation';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, Hero, ExperienceComponent, PortfolioComponent, About, ContactComponent, ScrollAnimationDirective],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}

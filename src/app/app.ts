import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from "./components/layout/layout";
import { NavbarComponent } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { TerminalComponent } from './components/terminal/terminal';
import { UiService } from './services/ui.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Footer, TerminalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portafolio-rafael';
  constructor(public uiService: UiService) {}
}

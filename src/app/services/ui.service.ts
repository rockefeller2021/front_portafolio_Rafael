import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  // Usamos una Signal de Angular, que es la forma moderna de manejar estados
  public isTerminalVisible = signal<boolean>(false);

  constructor() { }

  toggleTerminal(): void {
    this.isTerminalVisible.update(value => !value);
  }
}

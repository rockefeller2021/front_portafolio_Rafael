import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { TerminalService } from '../../services/terminal.service';
import { UiService } from '../../services/ui.service'; // Importamos el nuevo servicio de UI

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.html',
  styleUrls: ['./terminal.scss']
})
export class TerminalComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  @ViewChild('inputField') private inputField!: ElementRef;

  lines: string[] = [];
  command: string = '';

  constructor(
    private terminalService: TerminalService,
    private uiService: UiService // Inyectamos el servicio de UI
  ) {}

  ngOnInit(): void {
    this.lines.push("Bienvenido a la R-Terminal. Escribe 'help' para ver los comandos.");
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  // Escucha la tecla 'Escape' para cerrar la terminal
  @HostListener('document:keydown.escape') // <-- 1. Quitamos el ['$event']
  onKeydownHandler() {                   // <-- 2. Quitamos el parámetro 'event'
    this.closeTerminal();
  }
  onEnter(): void { // <-- ¡Sin parámetros aquí dentro!
    const prompt = `<span class="text-teal-400">→</span> <span class="text-blue-400 ml-2">~/portfolio</span> <span class="mx-2">$</span> ${this.command}`;
    this.lines.push(prompt);

    // Suscribirse al Observable para obtener la respuesta
    this.terminalService.executeCommand(this.command).subscribe(response => {
      if (response === 'clear') {
        this.lines = [];
      } else {
        this.lines.push(response);
      }
      this.scrollToBottom(); // Asegurarse de hacer scroll después de recibir la respuesta
    });
    this.command = '';
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  closeTerminal(): void {
    this.uiService.toggleTerminal();
  }

  // Para que el input siempre tenga foco al hacer clic en la terminal
  focusInput(): void {
    this.inputField.nativeElement.focus();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero implements OnInit, OnDestroy {
  subtitles = [
    'Desarrollador de Software',
    'Apasionado por la Tecnología',
    'Creador de Soluciones',
    'Q Engineer en NTTDATA LATAM'
  ];
  currentSubtitle = '';
  private intervalId: any;
  private subtitleIndex = 0;

  ngOnInit(): void {
    this.startSubtitleAnimation();

    // ===== LÓGICA PARA INICIAR EL CONTADOR =====
    this.updateJourneyTime(); // Lo llamamos una vez para que no espere 1s en aparecer
    this.journeyIntervalId = setInterval(() => this.updateJourneyTime(), 1000);
    // =========================================
  }

  ngOnDestroy(): void {
    // Es clave limpiar el intervalo para evitar fugas de memoria. ¡Código limpio, llave!
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    // ===== LÓGICA PARA DETENER EL CONTADOR =====
    if (this.journeyIntervalId) {
      clearInterval(this.journeyIntervalId);
    }
  }

  startSubtitleAnimation(): void {
    this.currentSubtitle = this.subtitles[this.subtitleIndex];
    this.intervalId = setInterval(() => {
      this.subtitleIndex = (this.subtitleIndex + 1) % this.subtitles.length;
      this.currentSubtitle = this.subtitles[this.subtitleIndex];
    }, 3000); // Cambia cada 3 segundos
  }

  // ===== NUEVO CÓDIGO PARA EL CONTADOR =====
  private journeyIntervalId: any;
  // OJO: ¡CAMBIA ESTA FECHA! Pon la fecha en la que empezaste tu carrera o tus estudios en el SENA.
  private journeyStartDate = new Date('2018-01-20T08:00:00');

  journey = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  // ======================================





  // ... (método startSubtitleAnimation se queda igual)

  // ===== NUEVO MÉTODO PARA CALCULAR EL TIEMPO =====
  updateJourneyTime(): void {
    const now = new Date();
    const difference = now.getTime() - this.journeyStartDate.getTime();

    // Cálculos
    this.journey.years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    this.journey.days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 365.25);
    this.journey.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    this.journey.minutes = Math.floor((difference / (1000 * 60)) % 60);
    this.journey.seconds = Math.floor((difference / 1000) % 60);
  }
  // ==============================================
}



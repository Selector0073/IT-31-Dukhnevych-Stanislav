import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  /** Current year for the copyright line. */
  protected readonly year = signal(new Date().getFullYear());
}

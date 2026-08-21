import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  /** Store name, provided by the parent component. */
  readonly title = input.required<string>();
}

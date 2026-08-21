import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Header, Products, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  /** Name of the online store, passed to the header component via input. */
  protected readonly shopName = signal('TechStore');
}

import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  imports: [ProductCard],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  /** List of products rendered as cards. */
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'ASUS Laptop',
      price: '25,000 UAH',
      description: 'A laptop for study and work.',
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: '800 UAH',
      description: 'Ergonomic wireless mouse for daily tasks.',
    },
    {
      id: 3,
      name: 'Mechanical Keyboard',
      price: '2,400 UAH',
      description: 'Tactile keyboard with RGB backlight.',
    },
  ]);

  /** Message shown after a product is added to the cart. */
  protected readonly cartMessage = signal<string | null>(null);

  private timer: ReturnType<typeof setTimeout> | null = null;

  /** Handles the "Buy" event from a product card and displays a confirmation. */
  protected onBuy(product: Product): void {
    this.cartMessage.set(`Product added to cart: ${product.name}`);

    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => this.cartMessage.set(null), 2500);
  }
}

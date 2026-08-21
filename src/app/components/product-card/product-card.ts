import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  /** Product name, provided by the parent component. */
  readonly name = input.required<string>();

  /** Product price, provided by the parent component. */
  readonly price = input.required<string>();

  /** Product short description, provided by the parent component. */
  readonly description = input.required<string>();

  /** Emitted when the user clicks the "Buy" button. */
  readonly buy = output<void>();

  /** Handles the "Buy" button click and notifies the parent component. */
  protected handleBuy(): void {
    this.buy.emit();
  }
}

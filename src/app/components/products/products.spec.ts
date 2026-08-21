import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Products } from './products';

describe('Products', () => {
  let fixture: ComponentFixture<Products>;
  let component: Products;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products],
    }).compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a product card for each product', () => {
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('app-product-card');
    expect(cards.length).toBe(3);
  });

  it('should show a cart message when a product is bought', () => {
    fixture.detectChanges();
    const firstCard = fixture.nativeElement.querySelector('app-product-card') as HTMLElement;
    const button = firstCard.querySelector('.product-card__buy') as HTMLButtonElement;
    button.click();

    fixture.detectChanges();
    const message = fixture.nativeElement.querySelector('.products__cart-message') as HTMLElement;
    expect(message).toBeTruthy();
    expect(message.textContent).toContain('Product added to cart');
  });
});

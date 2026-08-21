import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCard } from './product-card';

describe('ProductCard', () => {
  let fixture: ComponentFixture<ProductCard>;
  let component: ProductCard;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('name', 'ASUS Laptop');
    fixture.componentRef.setInput('price', '25,000 UAH');
    fixture.componentRef.setInput('description', 'A laptop for study and work.');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the product name and price from inputs', () => {
    fixture.detectChanges();
    const native = fixture.nativeElement as HTMLElement;
    expect(native.querySelector('.product-card__name')?.textContent).toContain('ASUS Laptop');
    expect(native.querySelector('.product-card__price')?.textContent).toContain('25,000 UAH');
    expect(native.querySelector('.product-card__description')?.textContent).toContain(
      'A laptop for study and work.',
    );
  });

  it('should emit the buy event when the Buy button is clicked', () => {
    let bought = false;
    component.buy.subscribe(() => {
      bought = true;
    });

    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.product-card__buy') as HTMLButtonElement;
    button.click();

    expect(bought).toBe(true);
  });
});

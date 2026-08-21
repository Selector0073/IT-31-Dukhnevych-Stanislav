import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  let fixture: ComponentFixture<Footer>;
  let component: Footer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render contact information', () => {
    fixture.detectChanges();
    const native = fixture.nativeElement as HTMLElement;
    expect(native.querySelector('.footer__text')?.textContent).toContain('Contacts:');
    expect(native.querySelector('.footer__text')?.textContent).toContain('support@onlinestore.com');
  });
});

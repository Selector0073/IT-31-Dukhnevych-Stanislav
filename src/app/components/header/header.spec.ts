import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let fixture: ComponentFixture<Header>;
  let component: Header;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'TechStore');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the store name passed via input', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.header__title') as HTMLElement;
    expect(title.textContent).toContain('TechStore');
  });

  it('should render the main navigation menu', () => {
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll(
      '.header__link',
    ) as NodeListOf<HTMLElement>;
    const labels = Array.from(links).map((link) => link.textContent?.trim());
    expect(labels).toContain('Home');
    expect(labels).toContain('Products');
    expect(labels).toContain('Contacts');
  });
});

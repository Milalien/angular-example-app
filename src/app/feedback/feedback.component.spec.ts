import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './feedback.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#header')?.textContent).toContain('Give feedback');
   });
  it('should display email on the placeholder for the email field', () => {
    const el = fixture.debugElement.query(By.css('#email'));
    expect(el.nativeElement.getAttribute('placeholder')).toEqual('email');
  });
  it('should mark field "phone" as invalid when it has no value', () => {
    const ctrl = component.fbForm.get('phone');
    ctrl?.setValue(null);
    fixture.detectChanges();

    expect(ctrl?.invalid).toBeTruthy();
  });
  it('should mark field "phone" as valid when it has 10 characters', () => {
    const ctrl = component.fbForm.get('phone');
    ctrl?.setValue('0155504531');
    fixture.detectChanges();

    expect(ctrl?.valid).toBeTruthy();
  });
  it('should mark field "email" as invalid when it has wrong input', () => {
    const ctrl = component.fbForm.get('email');
    ctrl?.setValue('milla@gmail.com');
    fixture.detectChanges();

    expect(ctrl?.invalid).toBeTruthy();
  });
});

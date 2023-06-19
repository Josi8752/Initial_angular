import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulamoduloComponent } from './aulamodulo.component';

describe('AulamoduloComponent', () => {
  let component: AulamoduloComponent;
  let fixture: ComponentFixture<AulamoduloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AulamoduloComponent]
    });
    fixture = TestBed.createComponent(AulamoduloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

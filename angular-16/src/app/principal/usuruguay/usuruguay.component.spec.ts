import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuruguayComponent } from './usuruguay.component';

describe('UsuruguayComponent', () => {
  let component: UsuruguayComponent;
  let fixture: ComponentFixture<UsuruguayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuruguayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuruguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

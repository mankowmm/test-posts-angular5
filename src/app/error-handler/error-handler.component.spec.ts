import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlerComponent } from './error-handler.component';
import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('ErrorHandlerComponent', () => {
  let component: ErrorHandlerComponent;
  let fixture: ComponentFixture<ErrorHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorHandlerComponent ],
      imports: [
        AlertModule.forRoot(),
        ModalModule.forRoot()
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

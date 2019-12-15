import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpositionsPage } from './expositions.page';

describe('ExpositionsPage', () => {
  let component: ExpositionsPage;
  let fixture: ComponentFixture<ExpositionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpositionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpositionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

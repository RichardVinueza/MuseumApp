import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstartworkPage } from './firstartwork.page';

describe('FirstartworkPage', () => {
  let component: FirstartworkPage;
  let fixture: ComponentFixture<FirstartworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstartworkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstartworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

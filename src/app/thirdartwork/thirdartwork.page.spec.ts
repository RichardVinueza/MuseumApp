import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThirdartworkPage } from './thirdartwork.page';

describe('ThirdartworkPage', () => {
  let component: ThirdartworkPage;
  let fixture: ComponentFixture<ThirdartworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdartworkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdartworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

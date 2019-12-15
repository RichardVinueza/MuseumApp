import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondartworkPage } from './secondartwork.page';

describe('SecondartworkPage', () => {
  let component: SecondartworkPage;
  let fixture: ComponentFixture<SecondartworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondartworkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondartworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

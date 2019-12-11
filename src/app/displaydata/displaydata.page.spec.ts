import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplaydataPage } from './displaydata.page';

describe('DisplaydataPage', () => {
  let component: DisplaydataPage;
  let fixture: ComponentFixture<DisplaydataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplaydataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

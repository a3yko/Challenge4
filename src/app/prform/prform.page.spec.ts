import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrformPage } from './prform.page';

describe('PrformPage', () => {
  let component: PrformPage;
  let fixture: ComponentFixture<PrformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

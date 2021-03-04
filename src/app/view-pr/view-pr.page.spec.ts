import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewPrPageRoutingModule } from './view-pr-routing.module';

import { ViewPrPage } from './view-pr.page';

describe('ViewPrPage', () => {
  let component: ViewPrPage;
  let fixture: ComponentFixture<ViewPrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPrPage ],
      imports: [IonicModule.forRoot(), ViewPrPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

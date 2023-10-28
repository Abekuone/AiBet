import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BetListPage } from './bet-list.page';

describe('BetListPage', () => {
  let component: BetListPage;
  let fixture: ComponentFixture<BetListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BetListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

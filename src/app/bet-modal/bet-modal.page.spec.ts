import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BetModalPage } from './bet-modal.page';

describe('BetModalPage', () => {
  let component: BetModalPage;
  let fixture: ComponentFixture<BetModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BetModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GbottlePage } from './gbottle.page';

describe('GbottlePage', () => {
  let component: GbottlePage;
  let fixture: ComponentFixture<GbottlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GbottlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

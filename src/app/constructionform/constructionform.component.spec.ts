import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionformComponent } from './constructionform.component';

describe('ConstructionformComponent', () => {
  let component: ConstructionformComponent;
  let fixture: ComponentFixture<ConstructionformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

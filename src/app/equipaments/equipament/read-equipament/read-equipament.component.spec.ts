import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEquipamentComponent } from './read-equipament.component';

describe('ReadEquipamentComponent', () => {
  let component: ReadEquipamentComponent;
  let fixture: ComponentFixture<ReadEquipamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadEquipamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadEquipamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

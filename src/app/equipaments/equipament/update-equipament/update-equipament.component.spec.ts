import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEquipamentComponent } from './update-equipament.component';

describe('UpdateEquipamentComponent', () => {
  let component: UpdateEquipamentComponent;
  let fixture: ComponentFixture<UpdateEquipamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEquipamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEquipamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

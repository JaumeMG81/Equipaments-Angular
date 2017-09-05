import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEquipamentComponent } from './delete-equipament.component';

describe('DeleteEquipamentComponent', () => {
  let component: DeleteEquipamentComponent;
  let fixture: ComponentFixture<DeleteEquipamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEquipamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEquipamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategoriaComponent } from './update-categoria.component';

describe('UpdateCategoriaComponent', () => {
  let component: UpdateCategoriaComponent;
  let fixture: ComponentFixture<UpdateCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

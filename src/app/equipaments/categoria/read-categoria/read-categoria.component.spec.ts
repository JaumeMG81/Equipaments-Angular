import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCategoriaComponent } from './read-categoria.component';

describe('ReadCategoriaComponent', () => {
  let component: ReadCategoriaComponent;
  let fixture: ComponentFixture<ReadCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

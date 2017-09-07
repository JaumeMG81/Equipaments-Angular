import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2PaginationModule } from 'ng2-pagination';
import { NgxPaginationModule } from 'ngx-pagination';

import { EquipamentsRoutingModule } from './equipaments-routing.module';
import { EquipamentComponent } from './equipament/equipament.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CreateEquipamentComponent } from './equipament/create-equipament/create-equipament.component';
import { ReadEquipamentComponent } from './equipament/read-equipament/read-equipament.component';
import { UpdateEquipamentComponent } from './equipament/update-equipament/update-equipament.component';
import { DeleteEquipamentComponent } from './equipament/delete-equipament/delete-equipament.component';
import { CreateCategoriaComponent } from './categoria/create-categoria/create-categoria.component';
import { ReadCategoriaComponent } from './categoria/read-categoria/read-categoria.component';
import { UpdateCategoriaComponent } from './categoria/update-categoria/update-categoria.component';
import { DeleteCategoriaComponent } from './categoria/delete-categoria/delete-categoria.component';

import { Ordre } from './equipament/equipament.component';

@NgModule({
  imports: [
    CommonModule,
    EquipamentsRoutingModule,
    FormsModule,
    NgxPaginationModule
    // Ng2PaginationModule
  ],
  declarations: [Ordre, EquipamentComponent, CategoriaComponent, CreateEquipamentComponent, ReadEquipamentComponent, UpdateEquipamentComponent, DeleteEquipamentComponent, CreateCategoriaComponent, ReadCategoriaComponent, UpdateCategoriaComponent, DeleteCategoriaComponent]
})
export class EquipamentsModule { }

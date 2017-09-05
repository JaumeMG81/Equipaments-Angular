import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipamentComponent } from './equipaments/equipament/equipament.component';
import { CreateEquipamentComponent } from './equipaments/equipament/create-equipament/create-equipament.component';
import { ReadEquipamentComponent } from './equipaments/equipament/read-equipament/read-equipament.component';
import { UpdateEquipamentComponent } from './equipaments/equipament/update-equipament/update-equipament.component';
import { DeleteEquipamentComponent } from './equipaments/equipament/delete-equipament/delete-equipament.component';

import { CategoriaComponent } from './equipaments/categoria/categoria.component';
import { CreateCategoriaComponent } from './equipaments/categoria/create-categoria/create-categoria.component';
import { ReadCategoriaComponent } from './equipaments/categoria/read-categoria/read-categoria.component';
import { UpdateCategoriaComponent } from './equipaments/categoria/update-categoria/update-categoria.component';
import { DeleteCategoriaComponent } from './equipaments/categoria/delete-categoria/delete-categoria.component';

const routes: Routes = [
  {
    path: 'app-equipament',
    component: EquipamentComponent,
    children: [
    	{
    		path: 'app-create-equipament',
    		component: CreateEquipamentComponent
    	},
    	{
    		path: 'app-read-equipament',
    		component: ReadEquipamentComponent
    	},
    	{
    		path: 'app-update-equipament',
    		component: UpdateEquipamentComponent
    	},
    	{
    		path: 'app-delete-equipament',
    		component: DeleteEquipamentComponent
    	}
    ]
  },
  {
  	path: 'app-categoria',
  	component: CategoriaComponent,
  	children: [
  		{
  			path: 'app-create-categoria',
  			component: CreateCategoriaComponent
  		},
  		{
  			path: 'app-read-categoria',
  			component: ReadCategoriaComponent
  		},
  		{
  			path: 'app-update-categoria',
  			component: UpdateCategoriaComponent
  		},
  		{
  			path: 'app-delete-categoria',
  			component: DeleteCategoriaComponent
  		}
  	]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

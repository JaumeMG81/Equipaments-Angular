import { Component, OnInit } from '@angular/core';
import { EquipamentService } from './equipament.service';

@Component({
  selector: 'app-equipament',
  templateUrl: './equipament.component.html',
  styleUrls: ['./equipament.component.css'],
  providers: [ EquipamentService ]
})
export class EquipamentComponent implements OnInit {

	sortingOrder: String = 'id';
	reverse: boolean = false;
	filteredItems = [];
	itemsPerPage: number = 10;
	maxSize: number = 5;
	pagedItems = [];
	currentPage: number = 1;
	addMode: boolean = false;
	query: String = "";

	item = {};
	items;

	constructor(private equipamentService: EquipamentService) { }

  	ngOnInit() {
  		var sortingOrder = 'id';
	    var reverse = false;
	    var filteredItems = [];
	    var itemsPerPage = 10;
	    var maxSize = 5;
	    var currentPage = 1;
	    var addMode = false;
	    var query = "";
	    var pagedItems = [];

	    this.refreshData();
  	}

  	refreshData(){
  		this.equipamentService.getAll(this.query, this.currentPage, this.itemsPerPage)
  			.subscribe(
  				data =>  {
  					this.items = data.equipaments;
  					this.pagedItems = this.items;
            //console.log("num de pagines: " + parseInt(data.pages));
  				}
  			);
  	}

    // switch del formulari afegir equipament
  	toogleAddMode() {
  		this.addMode = !this.addMode;
  	}

    // switch del formulari modificar equipament
    editMode(equipament) {
      equipament.editMode = !equipament.editMode;
    }

    // crear un equipament
  	add(equipament) {
      this.equipamentService.add(equipament).subscribe();
  	}

    // modificar un equipament
    update(equipament) {
      delete equipament["editMode"]; // hem de treure la parella editMode - true del JSON (equipament) que enviem
      this.equipamentService.update(equipament).subscribe();
    }
}

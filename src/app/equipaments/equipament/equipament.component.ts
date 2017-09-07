import { Component, OnInit } from '@angular/core';
import { EquipamentService } from './equipament.service';

@Component({
  selector: 'app-equipament',
  templateUrl: './equipament.component.html',
  styleUrls: ['./equipament.component.css'],
  providers: [ EquipamentService ]
})
export class EquipamentComponent implements OnInit {
    
	sortingOrder: String = 'municipi';
	reverse: boolean = false;
	filteredItems = [];
	itemsPerPage: number = 10;
	maxSize: number = 5;
	pagedItems = [];
	currentPage: number = 1;
	addMode: boolean = false;
	query: String = "";
    numPages = [];
    newSortingOrder = this.sortingOrder;

	item = {};
	items;

	constructor(private equipamentService: EquipamentService) { }

  	ngOnInit() {
  		var sortingOrder = sortingOrder;
	    var reverse = false;
	    var filteredItems = [];
	    var itemsPerPage = 10;
	    var maxSize = 5;
	    var currentPage = 1;
	    var addMode = false;
	    var query = "";
	    var pagedItems = [];
        var numPages = [];
        
        var sortNom:string;
        var newSortingOrder = sortingOrder;
        
	    this.refreshData();
  	}
/*
    this.query = ($location.search()).query ? ($location.search()).query : "";
    var page = ($location.search()).page;
    var rpp = ($location.search()).rpp;
    this.currentPage = isNaN(page) || page<1 ? 1 : page;
    this.itemsPerPage = isNaN(rpp) || rpp<10 ? 10 : rpp;
    this.refreshData(); */

    /*sort_by = function(newSortingOrder) { 
        if (this.sortingOrder == newSortingOrder) 
            this.reverse = !this.reverse; 
  
        this.sortingOrder = newSortingOrder; 
    }; */
/*
sortType (sort:string){
    if(sort ==='nom'){
        this.sortingOrder = this.newSortingOrder.sort(this.sortByNom);
    }
}

sortByNom (c1: ){
    if(c1.sortNom > c2.sortNom) return 1
    else if(c1.sortNom === c2.sortNom) return 0
    else retun -1;
}
*/
  	refreshData(){
  		this.equipamentService.getAll(this.query, this.currentPage, this.itemsPerPage)
  			.subscribe(
  				data =>  {
  					this.items = data.equipaments;
  					this.pagedItems = this.items;
                    this.numPages = data.pages;
                    //console.log("num de pagines: " + parseInt(data.pages));
  				}
  			);
  	}
    canvi(pagina){
        this.currentPage = pagina;
        this.refreshData();
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

    del(equipament) {
      this.equipamentService.del(equipament).subscribe();
        
    }

    setPage2 = function () {
            if(isNaN(this.currentPage)){
                this.currentPage = 1
                return;
            } 
            this.refreshData();
        }; 
}

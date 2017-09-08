import { Component, OnInit, ChangeDetectionStrategy, Pipe, PipeTransform } from '@angular/core';
import { EquipamentService } from './equipament.service';

@Pipe({
  name: 'ordre'
})
export class Ordre implements PipeTransform{

  sortingOrder: String;

  transform(array: Array<any>, key: string): Array<string> {
<<<<<<< HEAD
    
    //key = key ? key : "id";
=======

    key = key ? key : "id";
>>>>>>> d670018a56752d2f056479b06b24e2e7ad4c82b2

    // hem de girar l'array
    if(key == this.sortingOrder)
      array.reverse();

    // hem de reordenar l'array segons la clau
    else {
      this.sortingOrder = key;
      
<<<<<<< HEAD
      switch(key){
        case 'id': if(a.id > b.id) return 1; if(a.id < b.id) return -1; return 0;
        case 'nom': if(a.nom > b.nom) return 1; if(a.nom < b.nom) return -1; return 0;
        case 'municipi': if(a.municipi > b.municipi) return 1; if(a.municipi < b.municipi) return -1; return 0;
      }
    });
=======
      array.sort(function(a,b){
        switch(key){
          case 'id': if(a.id > b.id) return 1; if(a.id < b.id) return -1; return 0;
          case 'nom': if(a.nom > b.nom) return 1; if(a.nom < b.nom) return -1; return 0;
          case 'comarca': if(a.comarca > b.comarca) return 1; if(a.comarca < b.comarca) return -1; return 0;
          case 'municipi': if(a.municipi > b.municipi) return 1; if(a.municipi < b.municipi) return -1; return 0;
          case 'categories': if(a.categories > b.categories) return 1; if(a.categories < b.categories) return -1; return 0;
        }
      });
    }
>>>>>>> d670018a56752d2f056479b06b24e2e7ad4c82b2

    return array;
  }
}

@Component({
  selector: 'app-equipament',
  templateUrl: './equipament.component.html',
  styleUrls: ['./equipament.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [ EquipamentService, Ordre ]
})
export class EquipamentComponent implements OnInit {

<<<<<<< HEAD
  sortingOrder: String = 'id';
  reverse: boolean = false;


=======
>>>>>>> d670018a56752d2f056479b06b24e2e7ad4c82b2
	filteredItems = [];
	itemsPerPage: number = 10;
	maxSize: number = 7;
	pagedItems = [];
	currentPage: number = 1;
	addMode: boolean = false;
	query: String = "";

  numPages: number = 1;


	item = {};
	items;

	constructor(private equipamentService: EquipamentService, private ordre: Ordre) { }

  	ngOnInit() {
<<<<<<< HEAD
  		var sortingOrder = sortingOrder;
	    var reverse = false;
=======

>>>>>>> d670018a56752d2f056479b06b24e2e7ad4c82b2
	    var filteredItems = [];
	    var itemsPerPage = 10;
	    var maxSize = 9;
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
            
            // console.log("pagines: " + data.pages);
            // console.log("items: " + JSON.stringify(this.items));
            // console.log("pagedItems" + JSON.stringify(this.pagedItems));
  				}
  			);
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

<<<<<<< HEAD

    errorServer;
    errorBuit;
    finished;

=======
>>>>>>> d670018a56752d2f056479b06b24e2e7ad4c82b2
    // esborrar un equipament
    del(equipament) {
      this.equipamentService
          .del(equipament)
          .subscribe();
    }

    sort_by(nouOrdre) {
      this.ordre.transform(this.pagedItems, nouOrdre);
    }

    canvi(number: number) {
        console.log(number);
        this.currentPage = number;

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

    setPage2 = function () {
        if(isNaN(this.currentPage)){
            this.currentPage = 1
            return;
        } 
        this.refreshData();
    }; 
<<<<<<< HEAD

}
=======
}
>>>>>>> d670018a56752d2f056479b06b24e2e7ad4c82b2

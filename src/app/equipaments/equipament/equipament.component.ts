import { Component, OnInit, ChangeDetectionStrategy, Pipe, PipeTransform } from '@angular/core';
import { EquipamentService } from './equipament.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Pipe({
  name: 'ordre'
})
export class Ordre implements PipeTransform{

  sortingOrder: String;

  transform(array: Array<any>, key: string, flag: boolean): Array<string> {


    key = key ? key : "id";
    flag = flag ? flag : false;

    // hem de girar l'array
<<<<<<< HEAD
    
    // hem de reordenar l'array segons la clau
   /* else {
=======
    if(key == this.sortingOrder && flag == true) {
      array.reverse();
      console.log("1- key: " + key + ", sortingOrder: " + this.sortingOrder + ", flag: " + flag);
    }

    // hem de reordenar l'array segons la clau
    else {
      console.log("2- key: " + key + ", sortingOrder: " + this.sortingOrder + ", flag: " + flag);
>>>>>>> 78c8c0b75013719a48a0c1a5a63f62ef3cc158a9
      this.sortingOrder = key;
      console.log("2");
        console.log(key);
        console.log(this.sortingOrder);
*/
      array.sort(function(a,b){
        switch(key){
          case 'id': if(a.id > b.id) return 1; if(a.id < b.id) return -1; return 0;
          case 'nom': if(a.nom > b.nom) return 1; if(a.nom < b.nom) return -1; return 0;
          case 'comarca': if(a.comarca > b.comarca) return 1; if(a.comarca < b.comarca) return -1; return 0;
          case 'municipi': if(a.municipi > b.municipi) return 1; if(a.municipi < b.municipi) return -1; return 0;
          case 'categories': if(a.categories > b.categories) return 1; if(a.categories < b.categories) return -1; return 0;
        }
      });
    //}
  if(key == this.sortingOrder){
     array.reverse();
    }
      else{
    this.sortingOrder = key;
      }
    return array;
  }
}

@Component({
  selector: 'app-equipament',
  templateUrl: './equipament.component.html',
  styleUrls: ['./equipament.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [ EquipamentService, Ordre, Location ]
})
export class EquipamentComponent implements OnInit {


	filteredItems = [];
	itemsPerPage: number = 10;
	maxSize: number = 7;
	pagedItems = [];
	currentPage: number = 1;
	addMode: boolean = false;
	query: String = "";

  numPages: number = 1;
  flag: boolean = true;

  location: Location;
  route: string;


	item = {};
	items;

	constructor(private equipamentService: EquipamentService, private ordre: Ordre, location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != '')
        this.route = location.path();
      else
        this.route = 'Home';
      this.location = location;
    });
  }

  	ngOnInit() {


	    var filteredItems = [];
	    var itemsPerPage = 10;
	    var maxSize = 9;
	    var currentPage = 1;
	    var addMode = false;
	    var query = "";
	    var pagedItems = [];
<<<<<<< HEAD
        var numPages = [];
        
        
=======

      console.log(this.route);
      console.log(this.location.path());

      /*
      $scope.query = ($location.search()).query ? ($location.search()).query : "";
    var page = ($location.search()).page;
    var rpp = ($location.search()).rpp;
    $scope.currentPage = isNaN(page) || page<1 ? 1 : page;
    $scope.itemsPerPage = isNaN(rpp) || rpp<10 ? 10 : rpp;*/

>>>>>>> 78c8c0b75013719a48a0c1a5a63f62ef3cc158a9
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
<<<<<<< HEAD
                    this.numPages = data.pages;
=======

            this.numPages = data.pages;

            this.location.replaceState("app-equipament", 'rpp=' + this.itemsPerPage + '&page=' + this.currentPage + '&query=' + this.query);
>>>>>>> 78c8c0b75013719a48a0c1a5a63f62ef3cc158a9
            
            // console.log("pagines: " + data.pages);
            // console.log("items: " + JSON.stringify(this.items));
            // console.log("pagedItems" + JSON.stringify(this.pagedItems));
  				}
  			);
  	}
    // crear un equipament
  	add(equipament) {
      this.equipamentService.add(equipament).subscribe();
<<<<<<< HEAD
        window.location.reload();
=======

      window.location.replace('http://localhost:4200/app-equipament/?rpp=' + this.itemsPerPage + '&page=' + this.currentPage + '&query=' + this.query);
      //this.refreshData();
      //window.location.reload();
>>>>>>> 78c8c0b75013719a48a0c1a5a63f62ef3cc158a9
  	}

    // modificar un equipament
    update(equipament) {
      delete equipament["editMode"]; // hem de treure la parella editMode - true del JSON (equipament) que enviem
      this.equipamentService.update(equipament).subscribe();
    }


    // esborrar un equipament
    del(equipament) {
      this.equipamentService
          .del(equipament)
          .subscribe();
<<<<<<< HEAD
         window.location.reload();
=======

      //this.location.go('app-equipament?rpp=' + this.itemsPerPage + '&page=' + this.currentPage + '&query=' + this.query);
      //window.location.replace('http://localhost:4200/app-equipament/?rpp=' + this.itemsPerPage + '&page=' + this.currentPage + '&query=' + this.query);

      this.refreshData();
      //window.location.reload();
>>>>>>> 78c8c0b75013719a48a0c1a5a63f62ef3cc158a9
    }

    sort_by(nouOrdre) {
      this.ordre.transform(this.pagedItems, nouOrdre, this.flag);
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

}


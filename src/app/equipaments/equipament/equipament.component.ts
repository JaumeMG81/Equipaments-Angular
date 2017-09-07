import { Component, OnInit, ChangeDetectionStrategy, Pipe, PipeTransform } from '@angular/core';
import { EquipamentService } from './equipament.service';
//import { PaginationInstance } from 'ngx-pagination';

@Pipe({
  name: 'ordre'
})
export class Ordre implements PipeTransform{

  transform(array: Array<any>, key: string): Array<string> {
    
    key = key ? key : "id";

    array.sort(function(a,b){
      
      switch(key){
        case 'id': if(a.id > b.id) return 1; if(a.id < b.id) return -1; return 0;
        case 'comarca': if(a.comarca > b.comarca) return 1; if(a.comarca < b.comarca) return -1; return 0;
        case 'municipi': if(a.municipi > b.municipi) return 1; if(a.municipi < b.municipi) return -1; return 0;
      }
    });

    return array;
  }
}

/*
$scope.sort_by = function(newSortingOrder) { 
        if ($scope.sortingOrder == newSortingOrder) 
            $scope.reverse = !$scope.reverse; 
  
        $scope.sortingOrder = newSortingOrder; 
    }; 
*/

@Component({
  selector: 'app-equipament',
  templateUrl: './equipament.component.html',
  styleUrls: ['./equipament.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [ EquipamentService, Ordre ]
})
export class EquipamentComponent implements OnInit {
<<<<<<< HEAD
    
	sortingOrder: String = 'municipi';
	reverse: boolean = false;
=======

  sortingOrder: String = 'id';
  reverse: boolean = false;

>>>>>>> cf0955a76041cb90213d62c56e9c51c7aca3281f
	filteredItems = [];
	itemsPerPage: number = 10;
	maxSize: number = 9;
	pagedItems = [];
	currentPage: number = 1;
	addMode: boolean = false;
	query: String = "";
<<<<<<< HEAD
    numPages = [];
    newSortingOrder = this.sortingOrder;
=======
  numPages: number = 1;
>>>>>>> cf0955a76041cb90213d62c56e9c51c7aca3281f

	item = {};
	items;

	constructor(private equipamentService: EquipamentService, private ordre: Ordre) { }

  	ngOnInit() {
  		var sortingOrder = sortingOrder;
	    var reverse = false;
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
      // console.log("query: " + this.query);
  		this.equipamentService.getAll(this.query, this.currentPage, this.itemsPerPage)
  			.subscribe(
  				data =>  {
  					this.items = data.equipaments;
  					this.pagedItems = this.items;
<<<<<<< HEAD
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
=======
            this.numPages = data.pages;
            
            //console.log("pagines: " + data.pages);
            console.log("items: " + JSON.stringify(this.items));
            //console.log("pagedItems" + JSON.stringify(this.pagedItems));
  				}
  			);
  	}
>>>>>>> cf0955a76041cb90213d62c56e9c51c7aca3281f

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
=======
    errorServer;
    errorBuit;
    finished;

    // esborrar un equipament
    del(equipament) {
      this.equipamentService
          .del(equipament)
          .catch((error: any) => {
            console.log("hi ha hagut algun error" + error);
            
               if (error.status === 0 || error.status === "0") {
                    console.log("Servidor Aturat"); 
                    this.errorServer = true;
               }
                else if (error.status === 400 || error.status === "400")
               {
                   console.log("falten dades o són incorrectes"); 
                   this.errorBuit = true;
               }
                else if (error.status === 500 || error.status === "500")
               {
                   console.log("Error genèric - no troba les dades a la BD");
                   this.errorBuit = true;
               }
                else if (error.status === 503 || error.status === "503")
               {
                   console.log("Error de servidor");
                   this.errorServer = true;
               }
                else {
                    this.finished = true 
                   return error.json();
               }
        })
          .subscribe(
            error => {},
            () => {this.finished = true; console.log("tot ha anat bé")}
          );
          this.finished = false;
        this.errorBuit=false;
        this.errorServer=false;
    }

    sort_by(nouOrdre) {
      this.ordre.transform(this.pagedItems, nouOrdre);
    }

    /*
    // change sorting order 
    $scope.sort_by = function(newSortingOrder) { 
        if ($scope.sortingOrder == newSortingOrder) 
            $scope.reverse = !$scope.reverse; 
  
        $scope.sortingOrder = newSortingOrder; 
    }; 
    */

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
>>>>>>> cf0955a76041cb90213d62c56e9c51c7aca3281f
}

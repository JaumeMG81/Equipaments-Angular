import { Component, OnInit } from '@angular/core';

import { EquipamentService } from '../equipament.service';

@Component({
  selector: 'app-read-equipament',
  templateUrl: './read-equipament.component.html',
  styleUrls: ['./read-equipament.component.css'],
  providers: [ EquipamentService ]
})
export class ReadEquipamentComponent implements OnInit {

  constructor(private equipamentService: EquipamentService) { }

  ngOnInit() {
  	//var sortingOrder = sortingOrder; 
  	var sortingOrder = 'id';
    var reverse = false;
    var filteredItems = [];
    var itemsPerPage = 10;
    var maxSize = 5;
    var pagedItems = [];
    var currentPage = 1;
    var addMode = false;
  }

  /*
  $scope.refreshData = function(){
        notificationsService.openModal();
        dadesFactory.getAll($scope.query,$scope.currentPage,$scope.itemsPerPage).success(function(data){ 
            $scope.items = data.equipaments; 
            $scope.pagedItems = $scope.items;

            $location.search("query", $scope.query);
            $location.search("page", $scope.currentPage);
            $location.search("rpp", $scope.itemsPerPage);

            $scope.totalPages =  $scope.noOfPages = parseInt(data.pages*10);
            $scope.maxSize = ($scope.noOfPages/10)<5 ? $scope.noOfPages : 5;
            notificationsService.closeModal();
        }); 
    }
  */

  refreshData() {
  }
}

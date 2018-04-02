(function() {
 'use strict';

 var myapp = angular.module("app", []);

 myapp.controller("MyCtrl", ['$scope', '$http', MyCtrl]);


 function MyCtrl($scope, $http) {

  $scope.mandals = ['Mandal 1', 'Mandal 2', 'Mandal 3'];
  $scope.villages = {
   'Mandal 1': ['Village A', 'Village B', 'Village C'],
   'Mandal 2': ['Village D', 'Village E', 'Village F'],
   'Mandal 3': ['Village G', 'Village H', 'Village I']
  };
  $scope.users = [];



  $scope.save = function() {
   $scope.data = {
    'sno': $scope.farmer.SNO,
    'name': $scope.farmer.NAME,
    'age': $scope.farmer.AGE,
    'mandal': $scope.farmer.selectedMandal,
    'village': $scope.farmer.selectedVillage
   };

   $http({
    method: 'POST',
    data: $scope.data,
    url: window.location.href + "save.php"
   }).then(function successCallback(response) {
    alert("Data Inserted Successfully");
    $scope.reset();
    $scope.showUsers(); 

   }, function errorCallback(response) {
    console.log("Error...", response.statusText);
   });


  };

  $scope.reset = function() {
   $scope.farmer = null;

   $scope.formName.$setPristine();
   $scope.formName.$setUntouched();
  };

  $scope.showUsers = function(){


    $http({
    method: 'GET',
    url:"show.php"
   }).then(function successCallback(response) {

        $scope.users = response.data;

   }, function errorCallback(response) {
    console.log("Error...");
   });



  };




 };





})();
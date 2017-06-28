

var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope','$interval','$http', function($scope,$interval,$http) {
    $scope.sort = '-modified';
    $scope.getScreenings = function(){
        $http.get("/api/screenings").then(function(response) {
            $scope.allresults = response.data.results;
            $scope.results =  $scope.allresults;
        });
        
    }
    $scope.getScreenings();

    $scope.applyFilter = function(){

        $scope.results = [];
        angular.forEach($scope.allresults, function(value, key) {
          var name = value.name;
          if(!$scope.name && !$scope.severity){
             $scope.results.push(value);
          } 
          if(!$scope.name && $scope.severity){
            if($scope.severity==value.country_check_severity)
             $scope.results.push(value);
          } 
          if($scope.name && !$scope.severity){
            if(name.indexOf($scope.name)!=-1)
             $scope.results.push(value);
          }
          if($scope.name && $scope.severity){
            if(name.indexOf($scope.name)!=-1 && $scope.severity==value.country_check_severity)
            $scope.results.push(value);
          }
        });
        
    }
}]);


app.filter("toArray", function(){
    return function(obj) {
        var result = [];
        angular.forEach(obj, function(val, key) {
            result.push(val);
        });
         return result.reverse();
    };
});


/*
 @file   :   Controller ctrl2.
 */
mymodule.controller('ctrl2',ctrl2);

ctrl2.$inject=['$scope','$http'];

function ctrl2($scope,$http){
    $scope.var_two=" I am from contrller two";
    $http({
        method:'GET',
        url:'http://www.w3schools.com/angular/customers.php'
    }).then(
        /* Function call on successful response */
        function funSuccess(response){
            $scope.var_two=response;
        },
        /* Function call on error response. */
        function funError(response){
            $scope.var_two='Failed request';
        }
    );

    /* $http get short method. */
    $http.get('http://www.w3schools.com/angular/customers.php').then(
        function (response){
            $scope.var_two_short=response;
        },
        function (response){
            $scope.var_two_short='Error from short get method call';
        }
    );

};
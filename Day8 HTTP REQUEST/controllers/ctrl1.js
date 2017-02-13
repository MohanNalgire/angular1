/*
    @file   :   Controller file.
    Ctroller file for ctrl1.
 */
mymodule.controller('ctrl1',ctrl1);

/*
    Injecting $scope and $http object with the function ctrl1.
    cd 
 */
ctrl1.$inject=['$scope','$http'];

function ctrl1($scope,$http){
    $scope.var_three="I am from controller three";
    $http(
        {
            /* Configuration object for $http. */
        method:'GET',
        url:'http://www.w3schools.com/angular/customers.php'
    }
    ).then(
        /* On  success response of $http execute this */
        function funSuccess(response){
            $scope.var_one=response;
        },
        /* On  error response of $http execute this */
        function funError(response){
            $scope.var_one=response;
        }
    );
};
mymodule.controller('ctrl3',ctrl3);

ctrl3.$inject=['$scope','$http'];


function ctrl3($scope,$http){
    $scope.var_three="I am from controller three";
    $http.jsonp("http://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero")
        .success(function (data){
            $scope.var_three=data;
        })
        .error(function (data) {
            $scope.var_three=data;
        });
};
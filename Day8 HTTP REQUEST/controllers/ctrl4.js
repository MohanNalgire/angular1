mymodule.controller('ctrl4',ctrl4);

ctrl4.$inject=['$scope','$http'];

function ctrl4($scope,$http){
    $scope.var_four="I am from controller4";
    $http.post(
        'http://angularjs.org/greet.php'
    ).then(
        function(response) {
        $scope.var_four=response;
    },
    function (response){
        $scope.var_four="Error occur in $http post method";
    }
    );
};
/*
 Creating controller ctrl1
 */
app.controller('ctrl1',ctrl1);
/*
 Injecting $scope to controller fuction.
 */
ctrl1.$inject=['$scope','$stateParams'];
/*
 Creating $scope object in ctrl1 function.
 */
function ctrl1($scope,$stateParams){
    $scope.var_one='I am from controller one'+$stateParams.id+"........."
        +$stateParams.name;
};
/*
    Creating controlller ctrl2
 */
app.controller('ctrl2',ctrl2);
ctrl2.$inject=['$scope'];
function ctrl2($scope){
    $scope.var_two='I am from controller two';
};
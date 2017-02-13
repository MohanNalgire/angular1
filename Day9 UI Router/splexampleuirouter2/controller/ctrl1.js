(function (){
    'use strict';
    app.controller('ctrl1',ctrl1);
    ctrl1.$inject=['$scope','$stateParams']

    function ctrl1($scope,$stateParams){
        $scope.var_one='I am from controller one'+$stateParams.id+".............."+$stateParams.name;
    }
})();
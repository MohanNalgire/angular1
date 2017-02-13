(function () {
        'use strict';
        app.controller('ctrl2', ctrl2);

        ctrl2.$inject = ['$scope', '$stateParams'];

        function ctrl2($scope, $stateParams) {
            $scope.var_two = 'I am from controller two'+$stateParams.id+".............."+$stateParams.name;
        }
    }
)();
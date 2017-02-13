(function () {
    'use strict';
    app.controller('home',home);
    home.$inject=['$scope'];
    function home($scope) {
        $scope.menu_one=function () {
          alert('Menu One Called !');
        };

        $scope.menu_two=function () {
            alert('Menu Two Called !');
        };

        $scope.menu_three=function () {
            alert('Menu Three Called !');
        };

        $scope.menu_four=function () {
            alert('Menu Four Called !');
        };

        $scope.menu_five=function () {
            alert('Menu Five Called !');
        };

        $scope.logout=function () {
            
            alert('Logout Called !');
        };
    }
})();
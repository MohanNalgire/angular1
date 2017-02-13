(function () {
    'use strict';
    app.controller('home',home);
    home.$inject=['$scope','$location'];
    function home($scope,$location) {
        $scope.homepage=function () {
          alert('homepage!!!');
        };

        $scope.about=function () {
            alert('about!!!');
        };

        $scope.services=function () {
            alert('services!!!');
        };

        $scope.contact=function () {
            alert('contact!!!');
        };

        $scope.events=function () {
            alert('events!!!');
        };

        $scope.logout=function () {
            $location.path('/login');
        };
    }
})();
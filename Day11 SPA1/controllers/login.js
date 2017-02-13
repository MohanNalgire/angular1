(function () {
    'use strict';
    app.controller('login',login);
    login.$inject=['$scope','login_service'];
    function login($scope,login_service) {
        $scope.login_details=function (data) {
            login_service.getlogin_details(data);
        };
    };
})();
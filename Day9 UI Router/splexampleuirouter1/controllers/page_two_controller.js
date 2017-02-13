(
    function (){
    'use strict';
    app.controller('page_two_controller',page_two_controller);
    page_two_controller.$inject=['$scope'];

    function page_two_controller($scope){
        $scope.var_two='I am from controller two';
    }
})();
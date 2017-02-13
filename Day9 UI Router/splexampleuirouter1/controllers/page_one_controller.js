(
    function (){
        'use strinct';
        app.controller('page_one_controller',page_one_controller);
        page_one_controller.$inject=['$scope'];

        function page_one_controller($scope){
            $scope.var_one='I am from controller one';
        }
    }
)();
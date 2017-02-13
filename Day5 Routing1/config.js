app.config(config);

config.$inject=['$stateProvider','$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('template_one',{
            url:'/one_temp',
            templateUrl:'templates/one_temp.html',
            controller:'onetempCtrl'
        })
        .state('template_one.viewone',{
            url:'viewone',
            templateUrl:'views/view_one.html',
            controller: function ($scope){
                $scope.var_viewone='I am from view one';
            }
        })
        .state('template_one.viewtwo',{
            url:'viewtwo',
            templateUrl:'views/view_two.html',
            controller:function ($scope){
            $scope.var_viewtwo='I am from view two';
            }
        })
        .state('template_two',{
            url:'/two_temp',
            templateUrl:'templates/two_temp.html',
            controller:'twotempCtrl'
        });


    $urlRouterProvider.otherwise('template_one');
}
app.config(config);
config.$inject=['$stateProvider','$urlRouterProvider'];
function config($stateProvider,$urlRouterProvider){
    //$urlRouterProvider.otherwise('page_one');

    $stateProvider
        .state(
        'page_one',
        {
            url:'/page_one',
            templateUrl:'templates/page_one.html',
            controller:'page_one_controller',
        }
    ).state(
        'page_two',
        {
            url:'/page_two',
            templateUrl:'templates/page_two.html',
            controller:'page_two_controller',
        }
    );
};
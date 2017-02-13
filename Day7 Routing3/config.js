app.config(config);

/*
 $injector service for injecting Services as $statePrivder and $routeProvider.
 Annotation used $inject
 $inject as Array
 */
config.$inject=['$stateProvider','$urlRouterProvider'];

/*
 function config
 */
function config($stateProvider,$urlRouterProvider){
    /*
     Service :   $stateProvider service
     Module  :   ui.router.router
     method  :   state(name,stateConfig);
     return  :
     */
    $stateProvider
        .state(
            'page_one',{
                /*
                 Passing parameters with the url.
                 */
                url:'/page_one/:id/:name',/*  Optional parameter */
                templateUrl:'templates/page_one.html',
                controller:'ctrl1'
            }).state(
        'page_two',{
            url:'/page_two',/*  Optional parameter */
            templateUrl:'templates/page_two.html',
            controller:'ctrl2'
        });
    /*
     Service :   $urlRouteProvider
     Module  :   ui.router.state
     method  :   otherwise(name);
     return  :
     */
    $urlRouterProvider.otherwise('page_two');

};
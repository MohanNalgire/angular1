/*
    Angular module configuration
    module      :   app ( created module)
    method      :   config(configfunction);
    use         :   Service configuration with module.
 */
app.config(config);
/*
    $inject     :   $injector service annotation
    $inject as array 
    use         :   the injection parameters can be specified.
 */
config.$inject=['$stateProvider','$urlRouterProvider'];
/*
    Creating instance of $stateProvider
    Module      :   ui.router
    $urlRouterProvider service
    Module      :   ui.router.routercls
 */
function config($stateProvider,$urlRouterProvider){
    $stateProvider
        .state(
        'page_one',
        {
            url:'/page_one/:id/:name',
            templateUrl:'templates/page_one.html',
            controller:'ctrl1'
        }
    ).state(
        'page_two',
        {
            url:'/page_two/:id/:name',
            templateUrl:'templates/page_two.html',
            controller:'ctrl2'
        }
    );
};
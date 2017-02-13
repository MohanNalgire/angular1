(function () {
    'use strict';
    app.config(config);
    config.$inject=['$stateProvider','$urlRouterProvider'];
    function config($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('login',{
           url:'/login',
            templateUrl:'templates/login.html',
            controller:'login'
        })
            .state('home',{
                url:'/home',
                templateUrl:'templates/home.html',
                controller:'home'
            });
    }
})();
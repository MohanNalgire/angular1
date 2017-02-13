var app=angular.module('app',[]);

app.config(config);
config.$inject=['$stateProivder','$urlRouterProvider'];

function config($stateProvider,$urlRouterProvider){

    $stateProvider.state();
    $urlRouterProvider.otherwise();

};

(function () {
    'use strict';
    app.controller('login',login);
    login.$inject=['$scope','$localStorage','$location'];
    
    //JavaScript expression function.
    function login($scope,$localStorage,$location) {
        //JavaScript Statement function.
        $scope.login_details=function (data) {
            //alert(JSON.stringify(data.u_name));

            //User data store in localstorage.

            if(data.u_name && data.u_pwd){
            	$localStorage.var_user=data.u_name;
            	$localStorage.var_upwd=data.u_pwd;
            	$location.path('/home');
            }
            


        };
    };
})();
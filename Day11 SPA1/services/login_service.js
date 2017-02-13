(function () {
    'use strict';
    app.service('login_service',login_service);
    login_service.$inject=['$http'];
    function login_service($http) {
        var obj=this;

        obj.getlogin_details=function (data) {
            console.log(data);
        };

        return obj;
    }
})();
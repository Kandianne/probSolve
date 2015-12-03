(function() {
  "use strict";
  angular.module('app').factory('UserFactory', UserFactory);
  UserFactory.$inject = ['$q', '$http', "$window", "$rootScope"];

  function UserFactory($q, $http, $window, $rootScope) {
    var o = {};
    o.status = {};
    //---------------------TOKENS----------------------------------------------------

    function setToken(token) {
      localStorage.setItem("token", token);
    };

    function removeToken() {
      localStorage.removeItem("token");
    };

    function getToken() {
      return localStorage.token;
    };

    function isLoggedIn() {
      var token = getToken();
      if(token) {
        var payload = JSON.parse(urlBase64Decoder(token.split(".")[1]));
        if(payload.exp > Date.now() / 1000) {
          return payload;
        }
      } else {
        return false;
      }
    };

    function urlBase64Decoder(str) {
      var output = str.replace(/-/g, '+').replace(/_/g, '/');
      switch(output.length % 4) {
        case 0:{break; }
        case 2: {output += '=='; break;}
        case 3: {output += '='; break;}
        default:
        throw 'Illegal base64url string'
      }
      return decodeURIComponent(escape($window.atob(output)));
    };

    //------------------------GET LOGGEDIN USER--------------------------------------

    o.getUserLoggedIn = function (id) {
      console.log(id);
      var q = $q.defer();
      $http.get('/api/user/'+ id).success(function (res) {
        q.resolve(res);
      })
      return q.promise;
    };

    //---------------------LOGIN, REGISTER, LOGOUT----------------------------------------------------

    o.register = function(user) {
      console.log(user);
      var q = $q.defer();
      $http.post('/api/user/register', user).success(function(res) {
        q.resolve();
      });
      return q.promise;
    };

    o.registerAnon = function(anonUser) {
      var q = $q.defer();
      $http.post('/api/user/anonRegister', user).success(function(res) {
        console.log(res);
        q.resolve();
      });
      return q.promise;
    };

    o.login = function(userLogginIn) {
      var q = $q.defer();
      // userLogginIn.username = userLogginIn.username.toLowerCase();
      $http.post('/api/user/login', userLogginIn).success(function(res) {
        setToken(res.token);
        $rootScope._user = isLoggedIn();
        console.log($rootScope._user);
        q.resolve($rootScope._user);
      });
      return q.promise;
    };

    o.logoutUser = function() {
      var q = $q.defer();
      removeToken();
      $rootScope._user = isLoggedIn();
      q.resolve();
      return q.promise;
    };
    
    return o;
  }
})();

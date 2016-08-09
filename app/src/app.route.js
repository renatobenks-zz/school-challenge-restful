'use strict';

angular
  .module('consumer', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/start.template.html',
        controller: 'StartCtrl',
        controllerAs: 'vm'
      })
      .when('/match', {
        templateUrl: 'views/match.template.html',
        controller: 'MatchCtrl',
        controllerAs: 'vm'
      })
      .when('/end', {
        templateUrl: 'views/game-over.template.html',
        controller: 'EndCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

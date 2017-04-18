// the root Angular module will act as a container for different parts of our application. The first argument passed, blocChat, is the prescribed name of the module. The empty array, passed as the second arugment injexts dependencies into an application. 
(function() {
  // use $stateProvider to configure the state behavior and use $locationProvider to configure how the application handles URLs in the browser
  function config($stateProvider, $locationProvider) {
    // locationProvider configures an applications paths
    $locationProvider
      .html5Mode({
      // disables hashbang (#!) URLs
        enabled: true,
      // remove requirement for specifying the base URL for the application after using html5Mode
        requireBase: false
      });
    // stateProvider, a component of UI-Router, will determine a number of properties for a state. For Bloc Jams, we need to configure at least four aspects of state: its name, URL route, controller, and template. stateProvider calls .state() which takes two arguments: stateName and stateConfig
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      });
    
  }
  
  angular
    .module('blocChat', ['ui.router', 'firebase'])
    .config(config);
})();
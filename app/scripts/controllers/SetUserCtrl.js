(function() {
  function SetUserCtrl($cookies, $location) {
    this.createUsername = function(username) {
      $cookies.put('blocChatCurrentUser', this.username);
      $location.path('/');
    }
    
  }
  
  angular
    .module('blocChat')
    .controller('SetUserCtrl', ['$cookies', '$location', SetUserCtrl])
})();
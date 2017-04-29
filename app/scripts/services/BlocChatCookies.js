(function() {
  function BlocChatCookies($cookies, $location) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    // conditional checks for the presence of a user name //
    if (!currentUser || currentUser === '') {
      // redirects to the new /setUser route if they do not have a cookie //
      $location.path('/setUser');
    }
  }
  
  angular
    .module('blocChat')
    // Angular modules have a .run() method that runs code when the app instance is created. Use a .run() block to make sure that a username is set at the time the app is initialized. 
    .run(['$cookies', '$location', BlocChatCookies]);
})();
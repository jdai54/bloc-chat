(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    // conditional checks for the presence of a user name //
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties //
        templateUrl: '/templates/login.html',
        size: 'sm',
        controller: 'ModalCtrl as modal',
        backdrop: 'static'
      });
    }
  }
  
  angular
    .module('blocChat')
    // Angular modules have a .run() method that runs code when the app instance is created. Use a .run() block to make sure that a username is set at the time the app is initialized. 
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
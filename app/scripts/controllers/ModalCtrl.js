(function() {
  function ModalCtrl($uibModalInstance, $cookies) {
    this.createUsername = function(username) {
      $cookies.put('blocChatCurrentUser', this.username);
      $uibModalInstance.close();
    }
    
  }
  
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', '$cookies', '$location', ModalCtrl])
})();
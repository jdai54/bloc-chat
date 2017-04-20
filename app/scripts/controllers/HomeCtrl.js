// Inject the Room service by passing it as the paramenter and as a dependency //
(function() {
  function HomeCtrl(Room) {
    // assign the array of objects retrieved by the all method to a $scope variable using this.rooms //
    this.rooms = Room.all;
    
    this.createRoom = Room.addRoom();
  }
  
  angular
    .module('blocChat')
    //The last item in the array must be the callback function that executes when the controller is initialized – in this case, HomeCtrl //
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
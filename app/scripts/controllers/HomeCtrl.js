// Inject the Room service by passing it as the paramenter and as a dependency //
(function() {
  function HomeCtrl(Room, Message) {
    // assign the array of objects retrieved by the all method to a $scope variable using this.rooms //
    this.showme = false;
    this.rooms = Room.all;
    this.messages = Message.getByRoomId;
    this.createRoom = function(roomName) {
      Room.addRoom(roomName);
      this.showme = false;
    }
    this.select = function(roomName) {
      this.activeRoom = roomName;
      this.messages = Message.getByRoomId(this.activeRoom.$roomId);
    }

  }
  
  angular
    .module('blocChat')
    //The last item in the array must be the callback function that executes when the controller is initialized – in this case, HomeCtrl //
    .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
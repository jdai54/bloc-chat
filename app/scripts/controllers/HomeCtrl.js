// Inject the Room service by passing it as the paramenter and as a dependency //
(function() {
  function HomeCtrl(Room, Message, $cookies) {
    // assign the array of objects retrieved by the all method to a $scope variable using this.rooms //
    this.showme = false;
    this.rooms = Room.all;
    this.messages = Message.getByRoomId;
    this.currentUser = $cookies.get('blocChatCurrentUser');
    this.activeRoom = null;
    this.createRoom = function(roomName) {
      Room.addRoom(roomName);
      this.showme = false;
    }
    this.select = function(room) {
      this.activeRoom = room;
      //console.log(this.activeRoom);
      //console.log(room.$id);
      this.messages = Message.getByRoomId(room.$id);
      console.log(this.messages);
    }
    this.sendMessage = function(newMessage) {
      this.newMessage.roomId = this.activeRoom.$id;
      newMessage.username = this.currentUser;
      console.log(newMessage.username);
      Message.send(newMessage);
    }

  }
  
  angular
    .module('blocChat')
    //The last item in the array must be the callback function that executes when the controller is initialized – in this case, HomeCtrl //
    .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
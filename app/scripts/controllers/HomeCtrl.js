// Inject the Room service by passing it as the paramenter and as a dependency
(function() {
  function HomeCtrl(Room, Message, $cookies) {
    /* assign the array of objects retrieved by the all method to a $scope variable using this.rooms */
    this.showme = false;
    this.rooms = Room.all;
    this.messages = Message.getByRoomId;
    this.currentUser = $cookies.get('blocChatCurrentUser');
    this.activeRoom = null;
    this.newMessage = {};
    
    this.createRoom = function(roomName) {
      Room.addRoom(roomName);
      this.showme = false;
      this.roomName = '';
    }
    
    this.select = function(room) {
      this.activeRoom = room;
      //console.log(this.activeRoom);
      //console.log(room.$id);
      this.messages = Message.getByRoomId(room.$id);
      console.log(this.messages);
    }
    
    this.sendMessage = function() {
      this.newMessage.roomId = this.activeRoom.$id;
      this.newMessage.username = this.currentUser;
      this.newMessage.content = this.messageText;
      this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
      Message.send(this.newMessage);
      // resets the message text box
      this.messageText = '';
    }

  }
  
  angular
    .module('blocChat')
    /* The last item in the array must be the callback function that executes when the controller is initialized – in this case, HomeCtrl */
    .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
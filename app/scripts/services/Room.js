(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    Room.addRoom = function() {
      rooms.$add({ room: "Room 4" });
    };
    return {
      all: rooms
    };
  }
    
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
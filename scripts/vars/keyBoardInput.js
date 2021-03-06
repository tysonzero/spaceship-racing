var keyBoardInput = {
  initialize:function() {
    this._bind_keys();
  },
  
  _bind_keys:function() {
    //called whenever a key is pressed
    window.onkeydown = function(e) {
      switch(e.keyCode) {
        //called when A key is pressed
        case 65:
          spaceship.turn.left = true;
          break;
        //called when D key is pressed
        case 68:
          spaceship.turn.right = true;
          break;
        //called when S key is pressed
        case 83:
          break;
        //called when W key is pressed
        case 87:
          spaceship.accelerate = true;
          break;
      }
    }
    
    //called whenever a key is released
    window.onkeyup = function(e) {
      switch(e.keyCode) {
        //called when A key is pressed
        case 65:
          spaceship.turn.left = false;
          break;
        //called when D key is pressed
        case 68:
          spaceship.turn.right = false;
          break;
        //called when S key is pressed
        case 83:
          break;
        //called when W key is pressed
        case 87:
          spaceship.accelerate = false;
          break;
      }
    }
  },
}
function cargarJugador(Q) {
  // You can create a sub-class by extending the Q.Sprite class to create Q.Player
  Q.Sprite.extend("Player",{

    // the init constructor is called on creation
    init: function(p) {
    
      // You can call the parent's constructor with this._super(..)
      this._super(p, {
        sheet: "player",
        x: 410,
        y: 90
      });
      
      // Add in pre-made components to get up and running quickly
      this.add('2d, platformerControls');
      
      // Write event handlers to respond hook into behaviors.
      // hit.sprite is called everytime the player collides with a sprite
      this.on("hit.sprite",function(collision) {
        // Check the collision, if it's the Tower, you win!
        if(collision.obj.isA("Tower")) {
          // Llegar a la torre: 50 puntos
          Q.sumarPuntaje(50);
          // Stage the endGame scene above the current stage
          Q.siguienteEtapa();
          // Remove the player to prevent them from moving
          this.destroy();
        }
      });
    }
  });
}
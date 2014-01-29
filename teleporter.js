function cargarTeleporter(Q) {
  // Create the Enemy class to add in some baddies
  Q.Sprite.extend("Teleporter",{
    init: function(p, pos) {
      this.pos = pos;
      this._super(p, { sheet: 'player'});

      this.add('2d');
      
      // Listen for a sprite collision, if it's the player,
      // end the game unless the enemy is hit on top
      this.on("bump.left,bump.right,bump.bottom, bump.top",function(collision) {
        if(collision.obj.isA("Player")) {
          var player = collision.obj;
          // Indicar la posición a la que se moverá el jugador
          player.p.x = pos.player_x;
          player.p.y = pos.player_y;
        }
      });
      
    }
  });
}
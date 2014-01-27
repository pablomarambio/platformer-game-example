function cargarEnemigo(Q) {
  // Create the Enemy class to add in some baddies
  Q.Sprite.extend("Enemy",{
    init: function(p) {
      this._super(p, { sheet: 'enemy', vx: 100 });
      
      // Enemies use the Bounce AI to change direction 
      // whenver they run into something.
      this.add('2d, aiBounce');
      
      // Listen for a sprite collision, if it's the player,
      // end the game unless the enemy is hit on top
      this.on("bump.left,bump.right,bump.bottom",function(collision) {
        if(collision.obj.isA("Player")) {
          this.destroy();
          // Menos 10 puntos por cada vida perdida
          Q.sumarPuntaje(-10);
          Q.restarVidas();
        }
      });
      
      // If the enemy gets hit on the top, destroy it
      // and give the user a "hop"
      this.on("bump.top",function(collision) {
        if(collision.obj.isA("Player")) { 
          this.meMataron(collision.obj);
          this.destroy();
          // 5 puntos por cada enemigo destruido
        }
      });
    },
    meMataron: function(player) {
      Q.sumarPuntaje(5);
      player.p.vy = -300;
    }
  });
}
function cargarEnemigoSaltarin(Q) {
  // Create the Enemy class to add in some baddies
  Q.Enemy.extend("JumpyEnemy",{
    init: function(p) {
      this._super(p);
    },
    step: function(dt) {
      if(this.p.vy == 0) {
        if(Math.random() < 0.05) {
          this.p.vy = -350;
        }
      }
    },
    meMataron: function(player) {
      // Matar a un saltarín da más puntaje
      Q.sumarPuntaje(20);
      player.p.vy = -300;
    }
  });
}
function cargarEnemigoLoco(Q) {
  // Create the Enemy class to add in some baddies
  Q.Enemy.extend("CrazyEnemy",{
    init: function(p) {
      this._super(p);
    },
    step: function(dt) {
      // Hace lo mismo que el acelerado...
      if(Math.abs(this.p.vx) < 50) {
        if(Math.random() < 0.05) {
          if(this.p.vx > 0)
            this.p.vx += 400*Math.random();
          else
            this.p.vx -= 400*Math.random();
        }
      } else {
        if(this.p.vx > 0)
          this.p.vx -= 10;
        else
          this.p.vx += 10;
      }
      // Y que el saltarín...
      if(this.p.vy == 0) {
        if(Math.random() < 0.05) {
          this.p.vy = -350;
        }
      } else if(Math.abs(this.p.vy)>100) {
        //... pero también vuela
        if(Math.random() < 0.1) {
          this.p.vy += -100;
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
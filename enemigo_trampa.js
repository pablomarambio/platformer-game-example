function cargarEnemigoTrampa(Q) {
  // Create the Enemy class to add in some baddies
  Q.Enemy.extend("TrapEnemy",{
    init: function(p) {
      this._super(p);
    },
    step: function(dt) {
      // Sale disparado cuando está quieto
      if(this.p.vx == 0) {
        if(Math.random()<0.05) {
          this.p.vx += Math.ceil(1000*Math.random());
          this.p.vy += Math.ceil(1000*Math.random());
        }
      }
      // Se frena con aceleración constante
      else if(this.p.vx > 0)
        this.p.vx -= 1;
      else if(this.p.vx < 0)
        this.p.vx += 1;
    },
    meMataron: function(player) {
      // Matar a un enemigo trampa da más puntaje
      Q.sumarPuntaje(20);
      player.p.vy = -300;
    }
  });
}
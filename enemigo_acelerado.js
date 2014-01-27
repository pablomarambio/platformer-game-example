function cargarEnemigoAcelerado(Q) {
  // Create the Enemy class to add in some baddies
  Q.JumpyEnemy.extend("DashEnemy",{
    init: function(p) {
      this._super(p);
    },
    step: function(dt) {
      // Acelera de manera aleatoria en la dirección en la que va caminando
      if(Math.abs(this.p.vx) < 50) {
        if(Math.random() < 0.05) {
          if(this.p.vx > 0)
            this.p.vx += 400*Math.random();
          else
            this.p.vx -= 400*Math.random();
        }
      // Se frena con aceleración constante
      } else {
        if(this.p.vx > 0)
          this.p.vx -= 10;
        else
          this.p.vx += 10;
      }
    },
    meMataron: function(player) {
      // Matar a un acelerado da más puntaje
      Q.sumarPuntaje(20);
    }
  });
}
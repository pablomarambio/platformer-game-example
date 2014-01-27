function cargarTorre(Q) {
  // Sprites can be simple, the Tower sprite just sets a custom sprite sheet
  Q.Sprite.extend("Tower", {
    init: function(p) {
      this._super(p, { sheet: 'tower' });
      this.add('2d');
    }
  });
}
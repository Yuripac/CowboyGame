var cowboy = cowboy || {};

cowboy.hero = {
  hero: {},
  cursors: {},

  preload: () => {
    cowboy.game.load.image("cowboy", "cowboy.png");
  },

  create: () => {
    this.hero = cowboy.game.add.sprite((cowboy.game.WIDTH_SCREEN - 160) / 2,
                                   (cowboy.game.HEIGHT_SCREEN - 121) / 2,
                                   "cowboy");

    this.hero.anchor.setTo(0.5, 0.5);
    this.hero.speed = 200;

    cowboy.game.physics.enable(this.hero, Phaser.Physics.ARCADE);
    this.cursors = cowboy.game.input.keyboard.createCursorKeys();
  },

  update: () => {
    this.hero.body.velocity.setTo(0, 0);

    if(this.cursors.left.isDown)  this.hero.body.velocity.x = -this.hero.speed;
    if(this.cursors.right.isDown) this.hero.body.velocity.x = this.hero.speed;
    if(this.cursors.up.isDown)    this.hero.body.velocity.y = -this.hero.speed;
    if(this.cursors.down.isDown)  this.hero.body.velocity.y = this.hero.speed;
  },

  render: () => {}
}

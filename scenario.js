var cowboy = cowboy || {};

cowboy.scenario = {

  preload : () => {
    cowboy.game.load.image("sand_ground", 'sand_ground.png');
  },

  create: () => {
    cowboy.game.add.tileSprite(0, 0, cowboy.screen.WIDTH, cowboy.screen.HEIGHT,
                                'sand_ground');
  },

  update: () => {
  },

  render: () => {
  }
}

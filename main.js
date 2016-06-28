var cowboy = cowboy || {};

cowboy.main = {

  preload: () => {
    cowboy.scenario.preload();
    cowboy.hero.preload();
  },

  create: () => {
    cowboy.scenario.create();
    cowboy.hero.create();
  },

  update: () => {
    cowboy.scenario.update();
    cowboy.hero.update();
  },

  render: () => {
    cowboy.scenario.render();
    cowboy.hero.render();
  }
};

cowboy.screen = {
  WIDTH: 1600,
  HEIGHT: 900
};

state = {
  preload: cowboy.main.preload,
  create:  cowboy.main.create,
  update:  cowboy.main.update,
  render:  cowboy.main.render
}

cowboy.game = new Phaser.Game(cowboy.screen.WIDTH, cowboy.screen.HEIGHT, "",
                                Phaser.AUTO, state);

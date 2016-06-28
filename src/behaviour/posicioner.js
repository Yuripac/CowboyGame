module.exports = (obj, posX = 0, posY = 0, speed = 1) => {
  let [_posX, _posY, _speed] = [posX, posY, speed];

  Object.defineProperties(obj, {
    posX: {
      get: () => _posX,
      set: value => {
        if(isNaN(value)) throw new Error("Must be a number");
        _posX = value
      }
    },
    posY: {
      get: () => _posY,
      set: value => {
        if(isNaN(value)) throw new Error("Must be a number");
        _posY = value
      }
    },
    speed: {
      get: () => _speed,
      set: value => {
        if(isNaN(value)) throw new Error("Must be a number");
        _speed = value
      }
    }
  });

  obj.move = (direction) => {
    switch(direction) {
      case(1): obj.posY -= obj.speed; break
      case(2): obj.posX += obj.speed; break
      case(3): obj.posY += obj.speed; break
      case(4): obj.posX -= obj.speed; break
    }
  }
}

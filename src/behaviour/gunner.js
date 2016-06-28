module.exports = (obj, gun = 'pistol') => {
  let _gun = gun;

  Object.defineProperties(obj,{
    gun: {
      get: () => _gun,
      set: value => _gun = value
    }
  });

  obj.shot = () => console.log("Shooting with a " + obj.gun)
};

module.exports = (maxHealth = 200) => {
  const MIN_HEALTH = 0;
  const character = {};

  let _maxHealth     = maxHealth;
  let _currentHealth = _maxHealth;


  let updateCurrentHealth = () => {
    if(_currentHealth > _maxHealth) _currentHealth = _maxHealth;
  }

  return {
    get maxHealth() { return maxHealth },
    set maxHealth(value) {
      _maxHealth = value < MIN_HEALTH ? MIN_HEALTH : value;
      updateCurrentHealth();
    },
    get currentHealth() { return _currentHealth },
    set currentHealth(value) {
      if(value > _maxHealth)
        _currentHealth = _maxHealth;
      else if(value < MIN_HEALTH)
        _currentHealth = MIN_HEALTH;
      else
        _currentHealth = value;
    }
  }
}

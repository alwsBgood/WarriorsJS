class Player {
  constructor() {
    this.health = 20;
  }

  isInjured(warrior) {
    return warrior.health() < 20
  }

  isTakingthDamage(warrior) {
    return this.health > warrior.health()
  }

  playTurn(warrior) {
    const space = warrior.feel();
    const unit = space.getUnit();
    if (
      space.isEmpty() &&
      !this.isTakingthDamage(warrior) &&
      this.isInjured(warrior)
    ) {
      warrior.rest()
    }  else {
      space.isEmpty() ?
        warrior.walk() :
        unit.isEnemy() && !unit.isBound() ?
          warrior.attack() :
          warrior.rescue();
    }

    this.health = warrior.health();
  }
}

class Player {
  constructor() {
    this.health = 20;
  }

  isInjured(warrior) {
    return warrior.health() < 15
  }

  isTakingthDamage(warrior) {
    return this.health > warrior.health()
  }

  playTurn(warrior) {
    if (
      warrior.feel().isEmpty() &&
      !this.isTakingthDamage(warrior) &&
      this.isInjured(warrior)
    ) {
      warrior.rest()
    } else if (warrior.feel().isEmpty()) {
      warrior.walk();
    } else {
      warrior.attack();
    }

    this.health = warrior.health();
  }
}

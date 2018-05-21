class Player {
  playTurn(warrior) {
    if(warrior.health() > 5) {

      warrior.feel().isUnit() ?
        warrior.attack() :
        warrior.walk();

    } else {
      warrior.feel().isUnit() ?
        warrior.walk('backward') :
        warrior.rest();
    }
  }
}


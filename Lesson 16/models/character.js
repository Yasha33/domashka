var Character = (function () {
  function Character(level) {
      Unit.call(this, 600, 1000, level,'Character');
  }

  Character.prototype = Object.create(Unit.prototype);
  Character.prototype.constructor = Character;


  return Character;
}());

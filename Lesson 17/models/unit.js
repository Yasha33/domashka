var Unit = (function () {
    function Unit(baseDamage, health, level) {
        var modifier = (level - 1) * 10;
        this.damage = baseDamage + modifier;
        this.maxHealth = this.health = health + modifier;;
        this.level = level;
    }

    Unit.prototype.attack = function (monster) {
        this.health *= 1-(monster.level * 0.1);
    }

    return Unit;
}());

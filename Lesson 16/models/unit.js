var Unit = (function () {
    function Unit(baseDamage, health, level,type) {
        var modifier = (level - 1) * 10;
        this.damage = baseDamage + modifier;
        this.maxHealth = this.health = health + modifier;;
        this.level = level;
        this.type = type;
    }

    Unit.prototype.attack = function (monster) {
        this.health *= 1 - monster.level / 10;
    }

    return Unit;
}());

var MilitaryResource = (function () {
    var type,
        health,
        maxHealth,
        distance,
        maxDistance;
    return {
        isReadyToMove: function () {
            return (health > 0 && distance > 0);
        },
        isReadyToFight: function () {
            return (health > 0);
        },
        restore: function (Health, Distance, Type) {
            health = Health;
            distance = Distance;
            type = Type;
        },
        distance: function () {
            return distance;
        },
        health: function () {
            return health;
        },
    }
}());
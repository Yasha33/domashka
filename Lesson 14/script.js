
function MilitaryResource(type, health, distance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.distance = distance;
    this.maxDistance = maxDistance;
}
MilitaryResource.prototype.isReadyToMove = function () {
    return (this.health > 0 && this.distance > 0);
};
MilitaryResource.prototype.isReadyToFight = function () {
    return (this.health > 0);
};
MilitaryResource.prototype.restore = function (health, distance) {
    this.health = health;
    this.distance = distance;
};
MilitaryResource.prototype.clone = function () {
    return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
};



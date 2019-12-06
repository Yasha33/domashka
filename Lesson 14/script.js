function MilitaryResource(type, health, distance) {
    this.type = type;
    this.health = health;
    this.maxHealth = health;
    this.distance = distance;
    this.maxDistance = distance;
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

    return new MilitaryResource(this.type, this.health, this.distance)

};

function Squad(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
}
Squad.prototype.combineResources = function (resources) {

    this.squad = resources.map(el => {
        return Object.assign({}, el);
    });
};
Squad.prototype.isReadyToMove = function () {
    return this.squad.some(el => (el.distance > 0 && el.health > 0));
};

Squad.prototype.isReadyToFight = function () {
    return this.squad.some(el => el.health > 0);
};
Squad.prototype.restore = function (health, distance) {
    this.squad.forEach(el => {
        el.health = health;
        el.distance = distance;
    });
};
Squad.prototype.cloneResource = function () {
    return new Squad(this.squad);
};


var resource = new MilitaryResource('voin', 100, 50);
var resource2 = resource.clone();
var squad = new Squad([resource, resource2]);

resource.type="tank";
console.log(squad.isReadyToMove());
var squadSecond = squad.cloneResource();
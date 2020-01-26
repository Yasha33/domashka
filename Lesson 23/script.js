class MilitaryResource {
    constructor(type, health, distance) {
        this.type = type;
        this.health = health;
        this.maxHealth = health;
        this.distance = distance;
        this.maxDistance = distance;
    }
    isReadyToMove() {
        return (this.health > 0 && this.distance > 0);
    }
    isReadyToFight() {
        return (this.health > 0);
    }
    restore(health, distance) {
        this.health = health;
        this.distance = distance;
    }
    clone() {
        return new MilitaryResource(this.type, this.health, this.distance)
    }
}

class Squad {
    constructor(defaultResources) {
        this.squad = [];
        if (defaultResources) this.combineResources(defaultResources);
    }
    combineResources(resources) {
        this.squad = resources.map(el => {
            return Object.assign({}, el);
        });
    }
    isReadyToMove() {
        return this.squad.some(el => (el.distance > 0 && el.health > 0));
    }
    isReadyToFight() {
        return this.squad.some(el => el.health > 0);
    }
    restore(health, distance) {
        this.squad.forEach(el => {
            el.health = health;
            el.distance = distance;
        });
    }
    cloneResource() {
        return new Squad(this.squad);
    }
}
let resource = new MilitaryResource('voin', 100, 50);
let resource2 = resource.clone();
let squad = new Squad([resource, resource2]);
console.log(squad.isReadyToMove());
let squadSecond = squad.cloneResource();
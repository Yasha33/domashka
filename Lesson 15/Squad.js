var Squad = (function (){
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
    return Squad;
}());


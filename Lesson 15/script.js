var resource = new MilitaryResource('voin', 100, 50);
var resource2 = resource.clone();
var squad = new Squad([resource, resource2]);

resource.type="tank";
console.log(squad.isReadyToMove());
var squadSecond = squad.cloneResource();
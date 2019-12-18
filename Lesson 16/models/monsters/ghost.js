var Ghost = (function () {
    function Ghost(level) {
        Unit.call(this, 50, 300, level,'Ghost');
    }

    Ghost.prototype = Object.create(Unit.prototype);
    Ghost.prototype.constructor = Ghost;


    return Ghost;
}());


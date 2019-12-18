var Pole = (function () {
    function Pole(element, game) {
        this.el = document.querySelector(element);
        this.GameObj = game;
        this.createPole();

    }
    Pole.prototype.createPole = function () {
        this.GameObj.area.forEach(element => {

            var a = document.createElement('div');
            a.classList.add('box');
            a.textContent=element.type;
            this.el.appendChild(a);
        });

    };
    return Pole;
})();
class Ground {
    constructor() {
        this.type = 'Ground';
        this.cost = 0;
        this.el = document.createElement('div');
        this.el.classList.add('cell');
        this.el.style.backgroundImage = 'url(img/0.jpg)';
        this.el.dataset.type = "Ground";
    }
}
class Wheat {
    constructor() {
        this.type = 'Wheat';
        this.cost = 1;
        this.profit = 3;
        this.speed = 6;
        this.el = document.createElement('div');
        this.el.classList.add('cell');
        this.el.style.backgroundImage = 'url(img/1.jpg)';
        this.el.dataset.type = "Wheat";
    }
}
class Corn {
    constructor() {
        this.type = 'Corn';
        this.cost = 2;
        this.profit = 5;
        this.speed = 9;
        this.el = document.createElement('div');
        this.el.classList.add('cell');
        this.el.style.backgroundImage = 'url(img/2.jpg)';
        this.el.dataset.type = "Corn";
    }
}
class SunFlower {
    constructor() {
        this.type = 'SunFlower';
        this.cost = 7;
        this.profit = 11;
        this.speed = 15;
        this.el = document.createElement('div');
        this.el.classList.add('cell');
        this.el.style.backgroundImage = 'url(img/3.jpeg)';
        this.el.dataset.type = "SunFlower";
    }
}
class Apple {
    constructor() {
        this.type = 'Apple';
        this.cost = 18;
        this.profit = 25;
        this.speed = 25;
        this.el = document.createElement('div');
        this.el.classList.add('cell');
        this.el.style.backgroundImage = 'url(img/4.jpg)';
        this.el.dataset.type = "Apple";
    }
}
class Peach {
    constructor() {
        this.type = 'Peach';
        this.cost = 25;
        this.profit = 35;
        this.speed = 30;
        this.el = document.createElement('div');
        this.el.classList.add('cell');
        this.el.style.backgroundImage = 'url(img/5.jpg)';
        this.el.dataset.type = "Peach";
    }
}
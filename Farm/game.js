class Game {
    constructor(value) {
        this.myMoney = 10;
        this.pole = document.querySelector('.pole');
        this.elMoney = document.querySelector('.money');
        this.choise = 'Ground';
        this.area = Array(value).fill(1).map(() => new Ground());
        this.show();
        this.showInventar([new Wheat(), new Corn(), new SunFlower(), new Apple(), new Peach()]);
        this.inventar = document.querySelector('.inventory');
        this.inventar.addEventListener('click', (el) => {
            this.choise = el.target.dataset.type;
        });
        this.pole.addEventListener('click', (el) => {
            if (el.target.dataset.type != 'Ground') {
                this.sell(el.target.dataset.number)
            } else {
                switch (this.choise) {
                    case 'Corn':
                        this.grow(el.target.dataset.number, new Corn());
                        break;
                    case 'Wheat':
                        this.grow(el.target.dataset.number, new Wheat());
                        break;
                    case 'SunFlower':
                        this.grow(el.target.dataset.number, new SunFlower());
                        break;
                    case 'Apple':
                        this.grow(el.target.dataset.number, new Apple());
                        break;
                    case 'Peach':
                        this.grow(el.target.dataset.number, new Peach());
                }
            }
        });
    }
    show() {
        this.pole.innerHTML = '';
        this.elMoney.textContent = `Bank: ${this.myMoney}`;
        this.area.forEach((value, index) => {
            value.el.dataset.number = index;
            // value.el.dataset.type = 'Ground';
            this.pole.appendChild(value.el)
            // this.pole.insertAdjacentElement('afterbegin',value.el);
        });
    }
    grow(value, plant) {
        if (this.area[value].type = 'Ground' && this.myMoney >= plant.cost) {
            plant.el.classList.add('disabled');
            this.area[value] = plant;
            this.myMoney -= plant.cost;
            this.area[value].el.style.filter = 'grayscale(0.9)';
            this.show();
            setTimeout(() => {
                this.area[value].el.style.filter = 'grayscale(0.6)';
                this.show();
                setTimeout(() => {
                    this.area[value].el.style.filter = 'grayscale(0)';
                    plant.el.classList.remove('disabled');
                    this.show();
                }, plant.speed * 1000 / 2);
            }, plant.speed * 1000 / 2);
        }
    }
    sell(value) {
        if (this.area[value].profit) {
            this.myMoney += this.area[value].profit;
            this.area[value] = new Ground();
            this.show();
        }
    }
    showInventar(invent) {
        this.inventar = document.querySelector('.inventory');
        invent.forEach(el => {
            this.tempEL = el.el;
            this.tempEL.classList.add('shopCell');
            this.tempEL.innerText = `Цена семян: ${el.cost}
                                     Цена урожая: ${el.profit}
                                     Скорость созревания: ${el.speed}с`;
            this.inventar.appendChild(this.tempEL);
        });
    }
}

const game = new Game(50);

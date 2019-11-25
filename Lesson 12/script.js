var obj = {
    circle: document.querySelector('.circle'),
    position: 1,
    increase: function (value) {
        this.position += value;
        this.circle.style.transform = `scale(${this.position})`;
    },
    decrease: function (value) {
        this.position -= value;
        this.circle.style.transform = `scale(${this.position})`;
    }
};
obj.increase(0.2);
setTimeout(function () {
    obj.increase(1);
    setTimeout(function () {
        obj.decrease(1.5);
    }, 1000);
}, 1000);


document.querySelector('#up').addEventListener('click', function () {
    obj.increase(0.5);
})

document.querySelector('#down').addEventListener('click', function () {
    obj.decrease(0.5);
})

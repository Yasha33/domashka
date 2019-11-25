var obj = {
    circle: document.querySelector('.circle'),
    position: 1,
    increase: function(value) {
        this.position += value;
        this.circle.style.transform = `scale(${this.position})`;
    },
    decrease: function(value) {
        this.position -= value;
        this.circle.style.transform = `scale(${this.position})`;
    }
};
obj.increase(0.2);
setTimeout(function() {
    obj.increase(1);
    setTimeout(function() {
        obj.decrease(2);
    }, 1000);
}, 1000);
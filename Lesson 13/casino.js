var values = [1, 2, 3, 4, 5];

var casino = {
    lines: [],
    result: false,
    createRandomLineFrom: function (arr) {
        return arr.map(function () {
            return Math.ceil(Math.random() * (arr.length - 1));
        });
    },
    fillLines: function (linesAmount, fromArray) {
        var self = this;
        this.lines = Array(linesAmount).fill(1).map(function () {
            return self.createRandomLineFrom(fromArray);
        })
    },
    checkLines: function () {
        this2 = this;
        this.lines[0].map(function (el, index) {
            return this2.lines.map(function (line) {
                return line[index];
            })
        }).forEach(line => {
            if (line.every(el => el == line[0])) // проверка горизонтальных
                this2.result = true;
        });
        this.lines.forEach(function (line) {
            if (line.every(el => el == line[0])) //проверка вертикальных
                this2.result = true;
        })
        return this.result;
    }
}
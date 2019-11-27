var values = [1, 2, 3, 4, 5];

var casino = {
    lines: [],
    transpLines: [],
    result: null,
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

        for (var i = 0; i < this.lines[0].length; i++) {
            this.transpLines[i] = [];
            for (var j = 0; j < this.lines.length; j++) {
                this.transpLines[i].push(this.lines[j][i]);

                if (this.lines[j].every(el => el == this.lines[j][0])) // проверка вертикальных
                    return this.result = true;
            }
            if (this.transpLines[i].every(el => el == this.transpLines[i][0])) //проверка горизонтальных
                return this.result = true;
        }
        return this.result = false;
    }
}
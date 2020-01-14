const values = [1, 2, 3, 4, 5];

const casino = {
    lines: [],
    result: false,
    createRandomLineFrom(arr) {
        return arr.map(() => Math.ceil(Math.random() * (arr.length - 1)));
    },
    fillLines(linesAmount, fromArray) {
        this.lines = Array(linesAmount).fill(1).map(() => this.createRandomLineFrom(fromArray));
    },
    checkLines() {
        this.lines[0].map((el, index) => this.lines.map((line) => line[index])).forEach(line => {
            if (line.every(el => el == line[0])) 
                this.result = true;
        });
        this.lines.forEach((line) => {
            if (line.every(el => el == line[0])) 
                this.result = true;
        })
        return this.result;
    }
}
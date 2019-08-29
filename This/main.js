function insteadArrow(n) {
    return n / this.length;
}

function normalize() {
    console.log(this.coord.map(n => n / this.length));
}

normalize.call({coord: [0, 2, 3], length: 5});

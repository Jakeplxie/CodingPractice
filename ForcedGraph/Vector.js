/**
 * Created by gjwei on 2016/6/23.
 */
var Vector = {
    x: 0,
    y: 0,
    newVector: function (x, y) {
        var v = Object.create(Vector);
        v.x = x;
        v.y = y;
        return v;
    },
    add: function (v) {
        return Vector.newVector(this.x + v.x, this.y + v.y);
    },
    sub: function (v) {
        return Vector.newVector(this.x - v.x, this.y - v.y);
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    multiply: function (k) {
        return Vector.newVector(this.x * k, this.y * k);
    },
    normalize: function() {
        return Vector.newVector(this.x / this.length(), this.y / this.length());
    }
};

function Node() {
    this.Vector = Vector.newVector(0, 0);
    this.position = {x: 0, y: 0};
    this.change = true;
    this.color = "";
}

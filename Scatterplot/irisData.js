/**
 * Created by Administrator on 2016/7/4.
 */
var setosa = [
    {"sepal_length":5.1,"sepal_width":3.5,"petal_length":1.4,"petal_width":0.2},
    {"sepal_length":4.9,"sepal_width":3,"petal_length":1.4,"petal_width":0.2},
    {"sepal_length":4.7,"sepal_width":3.2,"petal_length":1.3,"petal_width":0.2},
    {"sepal_length":4.6,"sepal_width":3.1,"petal_length":1.5,"petal_width":0.2},
    {"sepal_length":5,"sepal_width":3.6,"petal_length":1.4,"petal_width":0.2},
    {"sepal_length":5.4,"sepal_width":3.9,"petal_length":1.7,"petal_width":0.4},
    {"sepal_length":4.6,"sepal_width":3.4,"petal_length":1.4,"petal_width":0.3},
    {"sepal_length":5,"sepal_width":3.4,"petal_length":1.5,"petal_width":0.2},
    {"sepal_length":4.4,"sepal_width":2.9,"petal_length":1.4,"petal_width":0.2},
    {"sepal_length":4.9,"sepal_width":3.1,"petal_length":1.5,"petal_width":0.1},
    {"sepal_length":5.4,"sepal_width":3.7,"petal_length":1.5,"petal_width":0.2},
    {"sepal_length":4.8,"sepal_width":3.4,"petal_length":1.6,"petal_width":0.2},
    {"sepal_length":4.8,"sepal_width":3,"petal_length":1.4,"petal_width":0.1},
    {"sepal_length":4.3,"sepal_width":3,"petal_length":1.1,"petal_width":0.1},
    {"sepal_length":5.8,"sepal_width":4,"petal_length":1.2,"petal_width":0.2},
    {"sepal_length":5.7,"sepal_width":4.4,"petal_length":1.5,"petal_width":0.4},
    {"sepal_length":5.4,"sepal_width":3.9,"petal_length":1.3,"petal_width":0.4},
    {"sepal_length":5.1,"sepal_width":3.5,"petal_length":1.4,"petal_width":0.3},
    {"sepal_length":5.7,"sepal_width":3.8,"petal_length":1.7,"petal_width":0.3},
    {"sepal_length":5.1,"sepal_width":3.8,"petal_length":1.5,"petal_width":0.3},
    {"sepal_length":5.4,"sepal_width":3.4,"petal_length":1.7,"petal_width":0.2},
    {"sepal_length":5.1,"sepal_width":3.7,"petal_length":1.5,"petal_width":0.4},
    {"sepal_length":4.6,"sepal_width":3.6,"petal_length":1,"petal_width":0.2},
    {"sepal_length":5.1,"sepal_width":3.3,"petal_length":1.7,"petal_width":0.5},
    {"sepal_length":4.8,"sepal_width":3.4,"petal_length":1.9,"petal_width":0.2},
    {"sepal_length":5,"sepal_width":3,"petal_length":1.6,"petal_width":0.2},
    {"sepal_length":5,"sepal_width":3.4,"petal_length":1.6,"petal_width":0.4},
    {"sepal_length":5.2,"sepal_width":3.5,"petal_length":1.5,"petal_width":0.2},
    {"sepal_length":5.2,"sepal_width":3.4,"petal_length":1.4,"petal_width":0.2},
    {"sepal_length":4.7,"sepal_width":3.2,"petal_length":1.6,"petal_width":0.2},
    {"sepal_length":4.8,"sepal_width":3.1,"petal_length":1.6,"petal_width":0.2},
    {"sepal_length":5.4,"sepal_width":3.4,"petal_length":1.5,"petal_width":0.4},
    {"sepal_length":5.2,"sepal_width":4.1,"petal_length":1.5,"petal_width":0.1},
    {"sepal_length":5.5,"sepal_width":4.2,"petal_length":1.4,"petal_width":0.2},
    {"sepal_length":4.9,"sepal_width":3.1,"petal_length":1.5,"petal_width":0.2},
    {"sepal_length":5,"sepal_width":3.2,"petal_length":1.2,"petal_width":0.2},
    {"sepal_length":5.5,"sepal_width":3.5,"petal_length":1.3,"petal_width":0.2},
    {"sepal_length":4.9,"sepal_width":3.6,"petal_length":1.4,"petal_width":0.1},
    {"sepal_length":4.4,"sepal_width":3,"petal_length":1.3,"petal_width":0.2},
    {"sepal_length":5.1,"sepal_width":3.4,"petal_length":1.5,"petal_width":0.2},
    {"sepal_length":5,"sepal_width":3.5,"petal_length":1.3,"petal_width":0.3},
    {"sepal_length":4.5,"sepal_width":2.3,"petal_length":1.3,"petal_width":0.3},
    {"sepal_length":4.4,"sepal_width":3.2,"petal_length":1.3,"petal_width":0.2},
    {"sepal_length":5,"sepal_width":3.5,"petal_length":1.6,"petal_width":0.6},
    {"sepal_length":5.1,"sepal_width":3.8,"petal_length":1.9,"petal_width":0.4},
    {"sepal_length":4.8,"sepal_width":3,"petal_length":1.4,"petal_width":0.3},
    {"sepal_length":5.1,"sepal_width":3.8,"petal_length":1.6,"petal_width":0.2},
    {"sepal_length":4.6,"sepal_width":3.2,"petal_length":1.4,"petal_width":0.2},
    {"sepal_length":5.3,"sepal_width":3.7,"petal_length":1.5,"petal_width":0.2},
    {"sepal_length":5,"sepal_width":3.3,"petal_length":1.4,"petal_width":0.2}
];

var versicolor =[
    {"sepal_length":7,"sepal_width":3.2,"petal_length":4.7,"petal_width":1.4},
    {"sepal_length":6.4,"sepal_width":3.2,"petal_length":4.5,"petal_width":1.5},
    {"sepal_length":6.9,"sepal_width":3.1,"petal_length":4.9,"petal_width":1.5},
    {"sepal_length":5.5,"sepal_width":2.3,"petal_length":4,"petal_width":1.3},
    {"sepal_length":6.5,"sepal_width":2.8,"petal_length":4.6,"petal_width":1.5},
    {"sepal_length":5.7,"sepal_width":2.8,"petal_length":4.5,"petal_width":1.3},
    {"sepal_length":6.3,"sepal_width":3.3,"petal_length":4.7,"petal_width":1.6},
    {"sepal_length":4.9,"sepal_width":2.4,"petal_length":3.3,"petal_width":1},
    {"sepal_length":6.6,"sepal_width":2.9,"petal_length":4.6,"petal_width":1.3},
    {"sepal_length":5.2,"sepal_width":2.7,"petal_length":3.9,"petal_width":1.4},
    {"sepal_length":5,"sepal_width":2,"petal_length":3.5,"petal_width":1},
    {"sepal_length":5.9,"sepal_width":3,"petal_length":4.2,"petal_width":1.5},
    {"sepal_length":6,"sepal_width":2.2,"petal_length":4,"petal_width":1},
    {"sepal_length":6.1,"sepal_width":2.9,"petal_length":4.7,"petal_width":1.4},
    {"sepal_length":5.6,"sepal_width":2.9,"petal_length":3.6,"petal_width":1.3},
    {"sepal_length":6.7,"sepal_width":3.1,"petal_length":4.4,"petal_width":1.4},
    {"sepal_length":5.6,"sepal_width":3,"petal_length":4.5,"petal_width":1.5},
    {"sepal_length":5.8,"sepal_width":2.7,"petal_length":4.1,"petal_width":1},
    {"sepal_length":6.2,"sepal_width":2.2,"petal_length":4.5,"petal_width":1.5},
    {"sepal_length":5.6,"sepal_width":2.5,"petal_length":3.9,"petal_width":1.1},
    {"sepal_length":5.9,"sepal_width":3.2,"petal_length":4.8,"petal_width":1.8},
    {"sepal_length":6.1,"sepal_width":2.8,"petal_length":4,"petal_width":1.3},
    {"sepal_length":6.3,"sepal_width":2.5,"petal_length":4.9,"petal_width":1.5},
    {"sepal_length":6.1,"sepal_width":2.8,"petal_length":4.7,"petal_width":1.2},
    {"sepal_length":6.4,"sepal_width":2.9,"petal_length":4.3,"petal_width":1.3},
    {"sepal_length":6.6,"sepal_width":3,"petal_length":4.4,"petal_width":1.4},
    {"sepal_length":6.8,"sepal_width":2.8,"petal_length":4.8,"petal_width":1.4},
    {"sepal_length":6.7,"sepal_width":3,"petal_length":5,"petal_width":1.7},
    {"sepal_length":6,"sepal_width":2.9,"petal_length":4.5,"petal_width":1.5},
    {"sepal_length":5.7,"sepal_width":2.6,"petal_length":3.5,"petal_width":1},
    {"sepal_length":5.5,"sepal_width":2.4,"petal_length":3.8,"petal_width":1.1},
    {"sepal_length":5.5,"sepal_width":2.4,"petal_length":3.7,"petal_width":1},
    {"sepal_length":5.8,"sepal_width":2.7,"petal_length":3.9,"petal_width":1.2},
    {"sepal_length":6,"sepal_width":2.7,"petal_length":5.1,"petal_width":1.6},
    {"sepal_length":5.4,"sepal_width":3,"petal_length":4.5,"petal_width":1.5},
    {"sepal_length":6,"sepal_width":3.4,"petal_length":4.5,"petal_width":1.6},
    {"sepal_length":6.7,"sepal_width":3.1,"petal_length":4.7,"petal_width":1.5},
    {"sepal_length":6.3,"sepal_width":2.3,"petal_length":4.4,"petal_width":1.3},
    {"sepal_length":5.6,"sepal_width":3,"petal_length":4.1,"petal_width":1.3},
    {"sepal_length":5.5,"sepal_width":2.5,"petal_length":4,"petal_width":1.3},
    {"sepal_length":5.5,"sepal_width":2.6,"petal_length":4.4,"petal_width":1.2},
    {"sepal_length":6.1,"sepal_width":3,"petal_length":4.6,"petal_width":1.4},
    {"sepal_length":5.8,"sepal_width":2.6,"petal_length":4,"petal_width":1.2},
    {"sepal_length":5,"sepal_width":2.3,"petal_length":3.3,"petal_width":1},
    {"sepal_length":5.6,"sepal_width":2.7,"petal_length":4.2,"petal_width":1.3},
    {"sepal_length":5.7,"sepal_width":3,"petal_length":4.2,"petal_width":1.2},
    {"sepal_length":5.7,"sepal_width":2.9,"petal_length":4.2,"petal_width":1.3},
    {"sepal_length":6.2,"sepal_width":2.9,"petal_length":4.3,"petal_width":1.3},
    {"sepal_length":5.1,"sepal_width":2.5,"petal_length":3,"petal_width":1.1},
    {"sepal_length":5.7,"sepal_width":2.8,"petal_length":4.1,"petal_width":1.3}
];


var virginica = [
    {"sepal_length":6.3,"sepal_width":3.3,"petal_length":6,"petal_width":2.5},
    {"sepal_length":5.8,"sepal_width":2.7,"petal_length":5.1,"petal_width":1.9},
    {"sepal_length":7.1,"sepal_width":3,"petal_length":5.9,"petal_width":2.1},
    {"sepal_length":6.3,"sepal_width":2.9,"petal_length":5.6,"petal_width":1.8},
    {"sepal_length":6.5,"sepal_width":3,"petal_length":5.8,"petal_width":2.2},
    {"sepal_length":7.6,"sepal_width":3,"petal_length":6.6,"petal_width":2.1},
    {"sepal_length":4.9,"sepal_width":2.5,"petal_length":4.5,"petal_width":1.7},
    {"sepal_length":7.3,"sepal_width":2.9,"petal_length":6.3,"petal_width":1.8},
    {"sepal_length":6.7,"sepal_width":2.5,"petal_length":5.8,"petal_width":1.8},
    {"sepal_length":7.2,"sepal_width":3.6,"petal_length":6.1,"petal_width":2.5},
    {"sepal_length":6.5,"sepal_width":3.2,"petal_length":5.1,"petal_width":2},
    {"sepal_length":6.4,"sepal_width":2.7,"petal_length":5.3,"petal_width":1.9},
    {"sepal_length":6.8,"sepal_width":3,"petal_length":5.5,"petal_width":2.1},
    {"sepal_length":5.7,"sepal_width":2.5,"petal_length":5,"petal_width":2},
    {"sepal_length":5.8,"sepal_width":2.8,"petal_length":5.1,"petal_width":2.4},
    {"sepal_length":6.4,"sepal_width":3.2,"petal_length":5.3,"petal_width":2.3},
    {"sepal_length":6.5,"sepal_width":3,"petal_length":5.5,"petal_width":1.8},
    {"sepal_length":7.7,"sepal_width":3.8,"petal_length":6.7,"petal_width":2.2},
    {"sepal_length":7.7,"sepal_width":2.6,"petal_length":6.9,"petal_width":2.3},
    {"sepal_length":6,"sepal_width":2.2,"petal_length":5,"petal_width":1.5},
    {"sepal_length":6.9,"sepal_width":3.2,"petal_length":5.7,"petal_width":2.3},
    {"sepal_length":5.6,"sepal_width":2.8,"petal_length":4.9,"petal_width":2},
    {"sepal_length":7.7,"sepal_width":2.8,"petal_length":6.7,"petal_width":2},
    {"sepal_length":6.3,"sepal_width":2.7,"petal_length":4.9,"petal_width":1.8},
    {"sepal_length":6.7,"sepal_width":3.3,"petal_length":5.7,"petal_width":2.1},
    {"sepal_length":7.2,"sepal_width":3.2,"petal_length":6,"petal_width":1.8},
    {"sepal_length":6.2,"sepal_width":2.8,"petal_length":4.8,"petal_width":1.8},
    {"sepal_length":6.1,"sepal_width":3,"petal_length":4.9,"petal_width":1.8},
    {"sepal_length":6.4,"sepal_width":2.8,"petal_length":5.6,"petal_width":2.1},
    {"sepal_length":7.2,"sepal_width":3,"petal_length":5.8,"petal_width":1.6},
    {"sepal_length":7.4,"sepal_width":2.8,"petal_length":6.1,"petal_width":1.9},
    {"sepal_length":7.9,"sepal_width":3.8,"petal_length":6.4,"petal_width":2},
    {"sepal_length":6.4,"sepal_width":2.8,"petal_length":5.6,"petal_width":2.2},
    {"sepal_length":6.3,"sepal_width":2.8,"petal_length":5.1,"petal_width":1.5},
    {"sepal_length":6.1,"sepal_width":2.6,"petal_length":5.6,"petal_width":1.4},
    {"sepal_length":7.7,"sepal_width":3,"petal_length":6.1,"petal_width":2.3},
    {"sepal_length":6.3,"sepal_width":3.4,"petal_length":5.6,"petal_width":2.4},
    {"sepal_length":6.4,"sepal_width":3.1,"petal_length":5.5,"petal_width":1.8},
    {"sepal_length":6,"sepal_width":3,"petal_length":4.8,"petal_width":1.8},
    {"sepal_length":6.9,"sepal_width":3.1,"petal_length":5.4,"petal_width":2.1},
    {"sepal_length":6.7,"sepal_width":3.1,"petal_length":5.6,"petal_width":2.4},
    {"sepal_length":6.9,"sepal_width":3.1,"petal_length":5.1,"petal_width":2.3},
    {"sepal_length":5.8,"sepal_width":2.7,"petal_length":5.1,"petal_width":1.9},
    {"sepal_length":6.8,"sepal_width":3.2,"petal_length":5.9,"petal_width":2.3},
    {"sepal_length":6.7,"sepal_width":3.3,"petal_length":5.7,"petal_width":2.5},
    {"sepal_length":6.7,"sepal_width":3.5,"petal_length":5.2,"petal_width":2.3},
    {"sepal_length":6.3,"sepal_width":2.5,"petal_length":5,"petal_width":1.9},
    {"sepal_length":6.5,"sepal_width":3,"petal_length":5.2,"petal_width":2},
    {"sepal_length":6.2,"sepal_width":3.4,"petal_length":5.4,"petal_width":2.3},
    {"sepal_length":5.9,"sepal_width":3,"petal_length":5.1,"petal_width":1.8}
];

var dataset = [
    [
        {"species":"setosa","sepal_length":5.1,"sepal_width":3.5,"petal_length":1.4,"petal_width":0.2},
        {"species":"setosa","sepal_length":4.9,"sepal_width":3,"petal_length":1.4,"petal_width":0.2},
        {"species":"setosa","sepal_length":4.7,"sepal_width":3.2,"petal_length":1.3,"petal_width":0.2},
        {"species":"setosa","sepal_length":4.6,"sepal_width":3.1,"petal_length":1.5,"petal_width":0.2},
        {"species":"setosa","sepal_length":5,"sepal_width":3.6,"petal_length":1.4,"petal_width":0.2},
        {"species":"setosa","sepal_length":5.4,"sepal_width":3.9,"petal_length":1.7,"petal_width":0.4},
        {"species":"setosa","sepal_length":4.6,"sepal_width":3.4,"petal_length":1.4,"petal_width":0.3},
        {"species":"setosa","sepal_length":5,"sepal_width":3.4,"petal_length":1.5,"petal_width":0.2},
        {"species":"setosa","sepal_length":4.4,"sepal_width":2.9,"petal_length":1.4,"petal_width":0.2},
        {"species":"setosa","sepal_length":4.9,"sepal_width":3.1,"petal_length":1.5,"petal_width":0.1},
        {"species":"setosa","sepal_length":5.4,"sepal_width":3.7,"petal_length":1.5,"petal_width":0.2},
        {"species":"setosa","sepal_length":4.8,"sepal_width":3.4,"petal_length":1.6,"petal_width":0.2},
        {"species":"setosa","sepal_length":4.8,"sepal_width":3,"petal_length":1.4,"petal_width":0.1},
        {"species":"setosa","sepal_length":4.3,"sepal_width":3,"petal_length":1.1,"petal_width":0.1},
        {"species":"setosa","sepal_length":5.8,"sepal_width":4,"petal_length":1.2,"petal_width":0.2},
        {"species":"setosa","sepal_length":5.7,"sepal_width":4.4,"petal_length":1.5,"petal_width":0.4},
        {"species":"setosa","sepal_length":5.4,"sepal_width":3.9,"petal_length":1.3,"petal_width":0.4},
        {"species":"setosa","sepal_length":5.1,"sepal_width":3.5,"petal_length":1.4,"petal_width":0.3},
        {"species":"setosa","sepal_length":5.7,"sepal_width":3.8,"petal_length":1.7,"petal_width":0.3},
        {"species":"setosa","sepal_length":5.1,"sepal_width":3.8,"petal_length":1.5,"petal_width":0.3},
        {"species":"setosa","sepal_length":5.4,"sepal_width":3.4,"petal_length":1.7,"petal_width":0.2},
        {"species":"setosa","sepal_length":5.1,"sepal_width":3.7,"petal_length":1.5,"petal_width":0.4},
        {"species":"setosa","sepal_length":4.6,"sepal_width":3.6,"petal_length":1,"petal_width":0.2},
        {"species":"setosa","sepal_length":5.1,"sepal_width":3.3,"petal_length":1.7,"petal_width":0.5},
        {"species":"setosa","sepal_length":4.8,"sepal_width":3.4,"petal_length":1.9,"petal_width":0.2},
        {"species":"setosa","sepal_length":5,"sepal_width":3,"petal_length":1.6,"petal_width":0.2},
        {"species":"setosa","sepal_length":5,"sepal_width":3.4,"petal_length":1.6,"petal_width":0.4},
        {"species":"setosa","sepal_length":5.2,"sepal_width":3.5,"petal_length":1.5,"petal_width":0.2},
        {"species":"setosa","sepal_length":5.2,"sepal_width":3.4,"petal_length":1.4,"petal_width":0.2},
        {"species":"setosa","sepal_length":4.7,"sepal_width":3.2,"petal_length":1.6,"petal_width":0.2},
        {"species":"setosa","sepal_length":4.8,"sepal_width":3.1,"petal_length":1.6,"petal_width":0.2},
        {"species":"setosa","sepal_length":5.4,"sepal_width":3.4,"petal_length":1.5,"petal_width":0.4},
        {"species":"setosa","sepal_length":5.2,"sepal_width":4.1,"petal_length":1.5,"petal_width":0.1},
        {"species":"setosa","sepal_length":5.5,"sepal_width":4.2,"petal_length":1.4,"petal_width":0.2},
        {"species":"setosa","sepal_length":4.9,"sepal_width":3.1,"petal_length":1.5,"petal_width":0.2},
        {"species":"setosa","sepal_length":5,"sepal_width":3.2,"petal_length":1.2,"petal_width":0.2},
        {"species":"setosa","sepal_length":5.5,"sepal_width":3.5,"petal_length":1.3,"petal_width":0.2},
        {"species":"setosa","sepal_length":4.9,"sepal_width":3.6,"petal_length":1.4,"petal_width":0.1},
        {"species":"setosa","sepal_length":4.4,"sepal_width":3,"petal_length":1.3,"petal_width":0.2},
        {"species":"setosa","sepal_length":5.1,"sepal_width":3.4,"petal_length":1.5,"petal_width":0.2},
        {"species":"setosa","sepal_length":5,"sepal_width":3.5,"petal_length":1.3,"petal_width":0.3},
        {"species":"setosa","sepal_length":4.5,"sepal_width":2.3,"petal_length":1.3,"petal_width":0.3},
        {"species":"setosa","sepal_length":4.4,"sepal_width":3.2,"petal_length":1.3,"petal_width":0.2},
        {"species":"setosa","sepal_length":5,"sepal_width":3.5,"petal_length":1.6,"petal_width":0.6},
        {"species":"setosa","sepal_length":5.1,"sepal_width":3.8,"petal_length":1.9,"petal_width":0.4},
        {"species":"setosa","sepal_length":4.8,"sepal_width":3,"petal_length":1.4,"petal_width":0.3},
        {"species":"setosa","sepal_length":5.1,"sepal_width":3.8,"petal_length":1.6,"petal_width":0.2},
        {"species":"setosa","sepal_length":4.6,"sepal_width":3.2,"petal_length":1.4,"petal_width":0.2},
        {"species":"setosa","sepal_length":5.3,"sepal_width":3.7,"petal_length":1.5,"petal_width":0.2},
        {"species":"setosa","sepal_length":5,"sepal_width":3.3,"petal_length":1.4,"petal_width":0.2}
    ],
    [
        {"species":"versicolor","sepal_length":7,"sepal_width":3.2,"petal_length":4.7,"petal_width":1.4},
        {"species":"versicolor","sepal_length":6.4,"sepal_width":3.2,"petal_length":4.5,"petal_width":1.5},
        {"species":"versicolor","sepal_length":6.9,"sepal_width":3.1,"petal_length":4.9,"petal_width":1.5},
        {"species":"versicolor","sepal_length":5.5,"sepal_width":2.3,"petal_length":4,"petal_width":1.3},
        {"species":"versicolor","sepal_length":6.5,"sepal_width":2.8,"petal_length":4.6,"petal_width":1.5},
        {"species":"versicolor","sepal_length":5.7,"sepal_width":2.8,"petal_length":4.5,"petal_width":1.3},
        {"species":"versicolor","sepal_length":6.3,"sepal_width":3.3,"petal_length":4.7,"petal_width":1.6},
        {"species":"versicolor","sepal_length":4.9,"sepal_width":2.4,"petal_length":3.3,"petal_width":1},
        {"species":"versicolor","sepal_length":6.6,"sepal_width":2.9,"petal_length":4.6,"petal_width":1.3},
        {"species":"versicolor","sepal_length":5.2,"sepal_width":2.7,"petal_length":3.9,"petal_width":1.4},
        {"species":"versicolor","sepal_length":5,"sepal_width":2,"petal_length":3.5,"petal_width":1},
        {"species":"versicolor","sepal_length":5.9,"sepal_width":3,"petal_length":4.2,"petal_width":1.5},
        {"species":"versicolor","sepal_length":6,"sepal_width":2.2,"petal_length":4,"petal_width":1},
        {"species":"versicolor","sepal_length":6.1,"sepal_width":2.9,"petal_length":4.7,"petal_width":1.4},
        {"species":"versicolor","sepal_length":5.6,"sepal_width":2.9,"petal_length":3.6,"petal_width":1.3},
        {"species":"versicolor","sepal_length":6.7,"sepal_width":3.1,"petal_length":4.4,"petal_width":1.4},
        {"species":"versicolor","sepal_length":5.6,"sepal_width":3,"petal_length":4.5,"petal_width":1.5},
        {"species":"versicolor","sepal_length":5.8,"sepal_width":2.7,"petal_length":4.1,"petal_width":1},
        {"species":"versicolor","sepal_length":6.2,"sepal_width":2.2,"petal_length":4.5,"petal_width":1.5},
        {"species":"versicolor","sepal_length":5.6,"sepal_width":2.5,"petal_length":3.9,"petal_width":1.1},
        {"species":"versicolor","sepal_length":5.9,"sepal_width":3.2,"petal_length":4.8,"petal_width":1.8},
        {"species":"versicolor","sepal_length":6.1,"sepal_width":2.8,"petal_length":4,"petal_width":1.3},
        {"species":"versicolor","sepal_length":6.3,"sepal_width":2.5,"petal_length":4.9,"petal_width":1.5},
        {"species":"versicolor","sepal_length":6.1,"sepal_width":2.8,"petal_length":4.7,"petal_width":1.2},
        {"species":"versicolor","sepal_length":6.4,"sepal_width":2.9,"petal_length":4.3,"petal_width":1.3},
        {"species":"versicolor","sepal_length":6.6,"sepal_width":3,"petal_length":4.4,"petal_width":1.4},
        {"species":"versicolor","sepal_length":6.8,"sepal_width":2.8,"petal_length":4.8,"petal_width":1.4},
        {"species":"versicolor","sepal_length":6.7,"sepal_width":3,"petal_length":5,"petal_width":1.7},
        {"species":"versicolor","sepal_length":6,"sepal_width":2.9,"petal_length":4.5,"petal_width":1.5},
        {"species":"versicolor","sepal_length":5.7,"sepal_width":2.6,"petal_length":3.5,"petal_width":1},
        {"species":"versicolor","sepal_length":5.5,"sepal_width":2.4,"petal_length":3.8,"petal_width":1.1},
        {"species":"versicolor","sepal_length":5.5,"sepal_width":2.4,"petal_length":3.7,"petal_width":1},
        {"species":"versicolor","sepal_length":5.8,"sepal_width":2.7,"petal_length":3.9,"petal_width":1.2},
        {"species":"versicolor","sepal_length":6,"sepal_width":2.7,"petal_length":5.1,"petal_width":1.6},
        {"species":"versicolor","sepal_length":5.4,"sepal_width":3,"petal_length":4.5,"petal_width":1.5},
        {"species":"versicolor","sepal_length":6,"sepal_width":3.4,"petal_length":4.5,"petal_width":1.6},
        {"species":"versicolor","sepal_length":6.7,"sepal_width":3.1,"petal_length":4.7,"petal_width":1.5},
        {"species":"versicolor","sepal_length":6.3,"sepal_width":2.3,"petal_length":4.4,"petal_width":1.3},
        {"species":"versicolor","sepal_length":5.6,"sepal_width":3,"petal_length":4.1,"petal_width":1.3},
        {"species":"versicolor","sepal_length":5.5,"sepal_width":2.5,"petal_length":4,"petal_width":1.3},
        {"species":"versicolor","sepal_length":5.5,"sepal_width":2.6,"petal_length":4.4,"petal_width":1.2},
        {"species":"versicolor","sepal_length":6.1,"sepal_width":3,"petal_length":4.6,"petal_width":1.4},
        {"species":"versicolor","sepal_length":5.8,"sepal_width":2.6,"petal_length":4,"petal_width":1.2},
        {"species":"versicolor","sepal_length":5,"sepal_width":2.3,"petal_length":3.3,"petal_width":1},
        {"species":"versicolor","sepal_length":5.6,"sepal_width":2.7,"petal_length":4.2,"petal_width":1.3},
        {"species":"versicolor","sepal_length":5.7,"sepal_width":3,"petal_length":4.2,"petal_width":1.2},
        {"species":"versicolor","sepal_length":5.7,"sepal_width":2.9,"petal_length":4.2,"petal_width":1.3},
        {"species":"versicolor","sepal_length":6.2,"sepal_width":2.9,"petal_length":4.3,"petal_width":1.3},
        {"species":"versicolor","sepal_length":5.1,"sepal_width":2.5,"petal_length":3,"petal_width":1.1},
        {"species":"versicolor","sepal_length":5.7,"sepal_width":2.8,"petal_length":4.1,"petal_width":1.3}
    ],
    [
        {"species":"virginica","sepal_length":6.3,"sepal_width":3.3,"petal_length":6,"petal_width":2.5},
        {"species":"virginica","sepal_length":5.8,"sepal_width":2.7,"petal_length":5.1,"petal_width":1.9},
        {"species":"virginica","sepal_length":7.1,"sepal_width":3,"petal_length":5.9,"petal_width":2.1},
        {"species":"virginica","sepal_length":6.3,"sepal_width":2.9,"petal_length":5.6,"petal_width":1.8},
        {"species":"virginica","sepal_length":6.5,"sepal_width":3,"petal_length":5.8,"petal_width":2.2},
        {"species":"virginica","sepal_length":7.6,"sepal_width":3,"petal_length":6.6,"petal_width":2.1},
        {"species":"virginica","sepal_length":4.9,"sepal_width":2.5,"petal_length":4.5,"petal_width":1.7},
        {"species":"virginica","sepal_length":7.3,"sepal_width":2.9,"petal_length":6.3,"petal_width":1.8},
        {"species":"virginica","sepal_length":6.7,"sepal_width":2.5,"petal_length":5.8,"petal_width":1.8},
        {"species":"virginica","sepal_length":7.2,"sepal_width":3.6,"petal_length":6.1,"petal_width":2.5},
        {"species":"virginica","sepal_length":6.5,"sepal_width":3.2,"petal_length":5.1,"petal_width":2},
        {"species":"virginica","sepal_length":6.4,"sepal_width":2.7,"petal_length":5.3,"petal_width":1.9},
        {"species":"virginica","sepal_length":6.8,"sepal_width":3,"petal_length":5.5,"petal_width":2.1},
        {"species":"virginica","sepal_length":5.7,"sepal_width":2.5,"petal_length":5,"petal_width":2},
        {"species":"virginica","sepal_length":5.8,"sepal_width":2.8,"petal_length":5.1,"petal_width":2.4},
        {"species":"virginica","sepal_length":6.4,"sepal_width":3.2,"petal_length":5.3,"petal_width":2.3},
        {"species":"virginica","sepal_length":6.5,"sepal_width":3,"petal_length":5.5,"petal_width":1.8},
        {"species":"virginica","sepal_length":7.7,"sepal_width":3.8,"petal_length":6.7,"petal_width":2.2},
        {"species":"virginica","sepal_length":7.7,"sepal_width":2.6,"petal_length":6.9,"petal_width":2.3},
        {"species":"virginica","sepal_length":6,"sepal_width":2.2,"petal_length":5,"petal_width":1.5},
        {"species":"virginica","sepal_length":6.9,"sepal_width":3.2,"petal_length":5.7,"petal_width":2.3},
        {"species":"virginica","sepal_length":5.6,"sepal_width":2.8,"petal_length":4.9,"petal_width":2},
        {"species":"virginica","sepal_length":7.7,"sepal_width":2.8,"petal_length":6.7,"petal_width":2},
        {"species":"virginica","sepal_length":6.3,"sepal_width":2.7,"petal_length":4.9,"petal_width":1.8},
        {"species":"virginica","sepal_length":6.7,"sepal_width":3.3,"petal_length":5.7,"petal_width":2.1},
        {"species":"virginica","sepal_length":7.2,"sepal_width":3.2,"petal_length":6,"petal_width":1.8},
        {"species":"virginica","sepal_length":6.2,"sepal_width":2.8,"petal_length":4.8,"petal_width":1.8},
        {"species":"virginica","sepal_length":6.1,"sepal_width":3,"petal_length":4.9,"petal_width":1.8},
        {"species":"virginica","sepal_length":6.4,"sepal_width":2.8,"petal_length":5.6,"petal_width":2.1},
        {"species":"virginica","sepal_length":7.2,"sepal_width":3,"petal_length":5.8,"petal_width":1.6},
        {"species":"virginica","sepal_length":7.4,"sepal_width":2.8,"petal_length":6.1,"petal_width":1.9},
        {"species":"virginica","sepal_length":7.9,"sepal_width":3.8,"petal_length":6.4,"petal_width":2},
        {"species":"virginica","sepal_length":6.4,"sepal_width":2.8,"petal_length":5.6,"petal_width":2.2},
        {"species":"virginica","sepal_length":6.3,"sepal_width":2.8,"petal_length":5.1,"petal_width":1.5},
        {"species":"virginica","sepal_length":6.1,"sepal_width":2.6,"petal_length":5.6,"petal_width":1.4},
        {"species":"virginica","sepal_length":7.7,"sepal_width":3,"petal_length":6.1,"petal_width":2.3},
        {"species":"virginica","sepal_length":6.3,"sepal_width":3.4,"petal_length":5.6,"petal_width":2.4},
        {"species":"virginica","sepal_length":6.4,"sepal_width":3.1,"petal_length":5.5,"petal_width":1.8},
        {"species":"virginica","sepal_length":6,"sepal_width":3,"petal_length":4.8,"petal_width":1.8},
        {"species":"virginica","sepal_length":6.9,"sepal_width":3.1,"petal_length":5.4,"petal_width":2.1},
        {"species":"virginica","sepal_length":6.7,"sepal_width":3.1,"petal_length":5.6,"petal_width":2.4},
        {"species":"virginica","sepal_length":6.9,"sepal_width":3.1,"petal_length":5.1,"petal_width":2.3},
        {"species":"virginica","sepal_length":5.8,"sepal_width":2.7,"petal_length":5.1,"petal_width":1.9},
        {"species":"virginica","sepal_length":6.8,"sepal_width":3.2,"petal_length":5.9,"petal_width":2.3},
        {"species":"virginica","sepal_length":6.7,"sepal_width":3.3,"petal_length":5.7,"petal_width":2.5},
        {"species":"virginica","sepal_length":6.7,"sepal_width":3.5,"petal_length":5.2,"petal_width":2.3},
        {"species":"virginica","sepal_length":6.3,"sepal_width":2.5,"petal_length":5,"petal_width":1.9},
        {"species":"virginica","sepal_length":6.5,"sepal_width":3,"petal_length":5.2,"petal_width":2},
        {"species":"virginica","sepal_length":6.2,"sepal_width":3.4,"petal_length":5.4,"petal_width":2.3},
        {"species":"virginica","sepal_length":5.9,"sepal_width":3,"petal_length":5.1,"petal_width":1.8},
    ]
];

var dataset = [['setosa',5.1,3.5,1.4,0.2],['setosa',4.9,3,1.4,0.2],['setosa',4.7,3.2,1.3,0.2],['setosa',4.6,3.1,1.5,0.2],['setosa',5,3.6,1.4,0.2],['setosa',5.4,3.9,1.7,0.4],['setosa',4.6,3.4,1.4,0.3],['setosa',5,3.4,1.5,0.2],['setosa',4.4,2.9,1.4,0.2],['setosa',4.9,3.1,1.5,0.1],['setosa',5.4,3.7,1.5,0.2],['setosa',4.8,3.4,1.6,0.2],['setosa',4.8,3,1.4,0.1],['setosa',4.3,3,1.1,0.1],['setosa',5.8,4,1.2,0.2],['setosa',5.7,4.4,1.5,0.4],['setosa',5.4,3.9,1.3,0.4],['setosa',5.1,3.5,1.4,0.3],['setosa',5.7,3.8,1.7,0.3],['setosa',5.1,3.8,1.5,0.3],['setosa',5.4,3.4,1.7,0.2],['setosa',5.1,3.7,1.5,0.4],['setosa',4.6,3.6,1,0.2],['setosa',5.1,3.3,1.7,0.5],['setosa',4.8,3.4,1.9,0.2],['setosa',5,3,1.6,0.2],['setosa',5,3.4,1.6,0.4],['setosa',5.2,3.5,1.5,0.2],['setosa',5.2,3.4,1.4,0.2],['setosa',4.7,3.2,1.6,0.2],['setosa',4.8,3.1,1.6,0.2],['setosa',5.4,3.4,1.5,0.4],['setosa',5.2,4.1,1.5,0.1],['setosa',5.5,4.2,1.4,0.2],['setosa',4.9,3.1,1.5,0.2],['setosa',5,3.2,1.2,0.2],['setosa',5.5,3.5,1.3,0.2],['setosa',4.9,3.6,1.4,0.1],['setosa',4.4,3,1.3,0.2],['setosa',5.1,3.4,1.5,0.2],['setosa',5,3.5,1.3,0.3],['setosa',4.5,2.3,1.3,0.3],['setosa',4.4,3.2,1.3,0.2],['setosa',5,3.5,1.6,0.6],['setosa',5.1,3.8,1.9,0.4],['setosa',4.8,3,1.4,0.3],['setosa',5.1,3.8,1.6,0.2],['setosa',4.6,3.2,1.4,0.2],['setosa',5.3,3.7,1.5,0.2],['setosa',5,3.3,1.4,0.2],['versicolor',7,3.2,4.7,1.4],['versicolor',6.4,3.2,4.5,1.5],['versicolor',6.9,3.1,4.9,1.5],['versicolor',5.5,2.3,4,1.3],['versicolor',6.5,2.8,4.6,1.5],['versicolor',5.7,2.8,4.5,1.3],['versicolor',6.3,3.3,4.7,1.6],['versicolor',4.9,2.4,3.3,1],['versicolor',6.6,2.9,4.6,1.3],['versicolor',5.2,2.7,3.9,1.4],['versicolor',5,2,3.5,1],['versicolor',5.9,3,4.2,1.5],['versicolor',6,2.2,4,1],['versicolor',6.1,2.9,4.7,1.4],['versicolor',5.6,2.9,3.6,1.3],['versicolor',6.7,3.1,4.4,1.4],['versicolor',5.6,3,4.5,1.5],['versicolor',5.8,2.7,4.1,1],['versicolor',6.2,2.2,4.5,1.5],['versicolor',5.6,2.5,3.9,1.1],['versicolor',5.9,3.2,4.8,1.8],['versicolor',6.1,2.8,4,1.3],['versicolor',6.3,2.5,4.9,1.5],['versicolor',6.1,2.8,4.7,1.2],['versicolor',6.4,2.9,4.3,1.3],['versicolor',6.6,3,4.4,1.4],['versicolor',6.8,2.8,4.8,1.4],['versicolor',6.7,3,5,1.7],['versicolor',6,2.9,4.5,1.5],['versicolor',5.7,2.6,3.5,1],['versicolor',5.5,2.4,3.8,1.1],['versicolor',5.5,2.4,3.7,1],['versicolor',5.8,2.7,3.9,1.2],['versicolor',6,2.7,5.1,1.6],['versicolor',5.4,3,4.5,1.5],['versicolor',6,3.4,4.5,1.6],['versicolor',6.7,3.1,4.7,1.5],['versicolor',6.3,2.3,4.4,1.3],['versicolor',5.6,3,4.1,1.3],['versicolor',5.5,2.5,4,1.3],['versicolor',5.5,2.6,4.4,1.2],['versicolor',6.1,3,4.6,1.4],['versicolor',5.8,2.6,4,1.2],['versicolor',5,2.3,3.3,1],['versicolor',5.6,2.7,4.2,1.3],['versicolor',5.7,3,4.2,1.2],['versicolor',5.7,2.9,4.2,1.3],['versicolor',6.2,2.9,4.3,1.3],['versicolor',5.1,2.5,3,1.1],['versicolor',5.7,2.8,4.1,1.3],['virginica',6.3,3.3,6,2.5],['virginica',5.8,2.7,5.1,1.9],['virginica',7.1,3,5.9,2.1],['virginica',6.3,2.9,5.6,1.8],['virginica',6.5,3,5.8,2.2],['virginica',7.6,3,6.6,2.1],['virginica',4.9,2.5,4.5,1.7],['virginica',7.3,2.9,6.3,1.8],['virginica',6.7,2.5,5.8,1.8],['virginica',7.2,3.6,6.1,2.5],['virginica',6.5,3.2,5.1,2],['virginica',6.4,2.7,5.3,1.9],['virginica',6.8,3,5.5,2.1],['virginica',5.7,2.5,5,2],['virginica',5.8,2.8,5.1,2.4],['virginica',6.4,3.2,5.3,2.3],['virginica',6.5,3,5.5,1.8],['virginica',7.7,3.8,6.7,2.2],['virginica',7.7,2.6,6.9,2.3],['virginica',6,2.2,5,1.5],['virginica',6.9,3.2,5.7,2.3],['virginica',5.6,2.8,4.9,2],['virginica',7.7,2.8,6.7,2],['virginica',6.3,2.7,4.9,1.8],['virginica',6.7,3.3,5.7,2.1],['virginica',7.2,3.2,6,1.8],['virginica',6.2,2.8,4.8,1.8],['virginica',6.1,3,4.9,1.8],['virginica',6.4,2.8,5.6,2.1],['virginica',7.2,3,5.8,1.6],['virginica',7.4,2.8,6.1,1.9],['virginica',7.9,3.8,6.4,2],['virginica',6.4,2.8,5.6,2.2],['virginica',6.3,2.8,5.1,1.5],['virginica',6.1,2.6,5.6,1.4],['virginica',7.7,3,6.1,2.3],['virginica',6.3,3.4,5.6,2.4],['virginica',6.4,3.1,5.5,1.8],['virginica',6,3,4.8,1.8],['virginica',6.9,3.1,5.4,2.1],['virginica',6.7,3.1,5.6,2.4],['virginica',6.9,3.1,5.1,2.3],['virginica',5.8,2.7,5.1,1.9],['virginica',6.8,3.2,5.9,2.3],['virginica',6.7,3.3,5.7,2.5],['virginica',6.7,3,5.2,2.3],['virginica',6.3,2.5,5,1.9],['virginica',6.5,3,5.2,2],['virginica',6.2,3.4,5.4,2.3],['virginica',5.9,3,5.1,1.8]];



var species = ["setosa", "versicolor", "virginica"];
/**
 * Created by Administrator on 2016/6/28.
 */

var canvas = document.getElementsByTagName("canvas")[0];

//var sliding = document.getElementById("slide");
console.log(0);
if(canvas.getContext){
    console.log(1);
    var cxt = canvas.getContext("2d");

    var isLink = [];
    var nodes = [
        {"name":"0","group":1},
        {"name":"1","group":1},
        {"name":"2","group":1},
        {"name":"3","group":1},
        {"name":"4","group":1},
        {"name":"5","group":1},
        {"name":"6","group":1},
        {"name":"7","group":1},
        {"name":"8","group":1},
        {"name":"9","group":1},
        {"name":"10","group":1},
        {"name":"11","group":1},
        {"name":"12","group":1},
        {"name":"13","group":1},
        {"name":"14","group":1},
        {"name":"15","group":1}

    ];
    var links = [
        {"source":1,"target":0,"value":1},
        {"source":2,"target":0,"value":8},
        {"source":3,"target":0,"value":10},
        {"source":3,"target":2,"value":6},
        {"source":4,"target":0,"value":1},
        {"source":5,"target":0,"value":1},
        {"source":6,"target":0,"value":1},
        {"source":7,"target":0,"value":1},
        {"source":8,"target":0,"value":2},
        {"source":9,"target":0,"value":1},
        {"source":11,"target":10,"value":1},
        {"source":11,"target":3,"value":3},
        {"source":11,"target":2,"value":3},
        {"source":11,"target":0,"value":5},
        {"source":12,"target":11,"value":1},
        {"source":13,"target":11,"value":1},
        {"source":14,"target":11,"value":1},
        {"source":15,"target":11,"value":1},
    ];

}

var num = nodes.length;
var force = new Array(num);
var radius = 10;
var PI = Math.PI;

var id = -1;

var period = 10;


function preProcess(){
    //节点的位置
    for(var i = 0; i < num; i++) {
        nodes[i].x = Math.random() * ( canvas.width - 100 );
        nodes[i].y = Math.random() * ( canvas.height - 100 );
        nodes[i].color = getColor();
        nodes[i].isPress = false;
    }

    for(var i = 0; i < num; i++) {
        isLink[i] = new Array(num);
        for(var j = 0; j < num; j++) {
            isLink[i][j] = false;
        }
    }

    for(var i = 0; i < links.length; i++) {
        isLink[links[i].source][links[i].target] = true;
        isLink[links[i].target][links[i].source] = true;
    }

}

function getColor(){
    var r = Math.floor(Math.random()*100) + 100;
    var g = Math.floor(Math.random()*100) + 100;
    var b = Math.floor(Math.random()*100) + 100;

    return "rgb(" + r +"," + g + "," + b +")";

}

function drawCanvas() {

    for(var i = 0; i < links.length; i++){
        cxt.width = 1;
        cxt.strokeStyle = "gray";
        cxt.beginPath();
        cxt.moveTo(nodes[parseInt(links[i].source)].x, nodes[parseInt(links[i].source)].y);
        cxt.lineTo(nodes[parseInt(links[i].target)].x, nodes[parseInt(links[i].target)].y);

        cxt.stroke();
    }

    for(var i = 0; i < num; i++){
        cxt.beginPath();
        cxt.arc(nodes[i].x, nodes[i].y, radius, 0, 2 * PI, false);

        cxt.fillStyle = nodes[i].color;
        cxt.fill();

        cxt.fillStyle = "black";
        cxt.stroke();
        cxt.fillText(nodes[i].name, nodes[i].x + radius, nodes[i].y + radius);
        cxt.strokeStyle = nodes[i].color;
    }


    //console.log(44);

}

function calDistance (v1, v2) {
    return Math.sqrt(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2));
}

function calForce1(v1, v2) {
    var k = 5000;
    var force = (k / ((v1.x - v2.x) * (v1.x - v2.x) + (v1.y - v2.y) * (v1.y - v2.y)) );
    var repV = Vector.newVector(v1.x - v2.x, v1.y - v2.y);
    return repV.normalize().multiply(force);
}

function calForce2(v1, v2, relation) {
    var k = 0.05;
    //var relation = 100.0;
    var force = k * (calDistance(v1, v2) - relation);
    var repV = Vector.newVector(v2.x - v1.x, v2.y - v1.y);
    return repV.normalize().multiply(force);
}



// the animation of mouse



function getMouse(e) {
    var mouse = {
        x: 0,
        y: 0
    };
    var event = e || window.event;
    if(event.pageX || event.pageY) {
        var x = event.pageX;
        var y = event.pageY;
    }else {
        var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var x = e.pageX || e.clientX + scrollX;
        var y = e.pageY || e.clientY + scrollY;
    }
    mouse.x = x;
    mouse.y = y;
    return mouse;
}

function down(e){
    var mouse = getMouse();
    console.log(mouse.x);
    for(var i = 0; i < nodes.length; i++) {
        if(isClick(nodes[i], mouse)) {
            nodes[i].isPress = true;
            id = i;
        }
    }
}

function isClick(node, mouse){
    return Math.sqrt(((mouse.x - node.x) * (mouse.x - node.x)) + ((mouse.y - node.y) * (mouse.y - node.y))) <= radius + 5;
}

function move(e){
    var mouse = getMouse(e);
    if(id == -1) return;
    if(nodes[id].isPress) {

        nodes[id].x = mouse.x;
        nodes[id].y = mouse.y;
        console.log(nodes[id].x);
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        drawCanvas();
    }
}
function up(){
    if(id == -1) return;
    nodes[id].isPress = false;
    id = -1;
}

function update() {

    var relation = document.getElementById("slide").value;
    document.getElementById("display").innerHTML = relation;
    //textfield.setAttribute("value", relation);
    console.log(relation);
    cxt.clearRect(0, 0, canvas.width, canvas.height);



    for(var i = 0; i < nodes.length; i++){
        force[i] = Vector.newVector(0,0);
    }

    for(var i = 0; i < nodes.length; i++){
        for(var j = 0; j < i; j++) {
            var tempf = calForce1(nodes[i], nodes[j]);
            var f;
            if(isLink[i][j] == true){
                f = calForce2(nodes[i], nodes[j], relation).add(tempf);
            }
            else{
                f = tempf;
            }
            force[i] = force[i].add(f);
            force[j] = force[j].sub(f);

        }
    }

    for(var i = 0; i < nodes.length; i++){
        if(nodes[i].isPress == false){
            nodes[i].x += force[i].x;
            nodes[i].y += force[i].y;
        }
    }
    drawCanvas();
}



canvas.addEventListener("mousedown", down, false);
canvas.addEventListener("mousemove", move, false);
canvas.addEventListener("mouseup", up, false);



preProcess();
setInterval(function () {
    update();
}, period);



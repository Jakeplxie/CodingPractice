/**
 * Created by Administrator on 2016/6/24.
 */

var num = 3;
var width = 1500;
var height = 1200;
function preProcess(data) {
    var svg = document.getElementById("draw");
    data.status = "fold";
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    var radius = 10;
    circle.setAttribute("fill", "white");
    circle.setAttribute("r", radius);

    data.path = [];

    data.text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    data.text.innerHTML = data.name;

    data.oldPosition = Vector.newVector(0,0);
    data.newPosition = Vector.newVector(0,0);
    data.nowPosition = Vector.newVector(0,0);

    if(data.children) {
        data.text.setAttribute("text-anchor", "end");
        circle.setAttribute("fill", "green");
        for(var i = 0; i < data.children/length; i++){
            preProcess(data.children);
            data.path.push(document.createElementNS("http://www.w3.org/2000/svg", "path"));
            data.path[i].setAttribute("stroke", "gray");
            data.path[i].setAttribute("stroke-width", 1);
            svg.appendChild(data.path[i]);
        }
    }

    circle.onclick = function () {
        if(data.status == "fold"){
            data.status = "unfold";
        }else{
            data.status = "fold";
        }
    }


    data.cirlce = circle;
    svg.appendChild(data.circle);
    svg.appendChild(data.text);

}

function getLink(a, b){
    var x1 = parseInt(a.getAttribute("cx")) + parseInt(a.getAttribute("r"));
    var y1 = parseInt(a.getAttribute("cy")) + parseInt(a.getAttribute("r"));

    var x2 = parseInt(a.getAttribute("cx")) + parseInt(a.getAttribute("r"));
    var y2 = parseInt(a.getAttribute("cy")) + parseInt(a.getAttribute("r"));

    var mid = (x1 + x2) / 2;

    return "M" + x1 + " " + y1 + "C" + mid + " " + y1 + " " + mid + " " + y2 + " " + x2 + " " + y2;

}

function getLayer(data, id){
    var layer = [];
    var queue = [];
    var count = 0;
    queue.push({id:1, data:data});
    while(queue.length){
        var q = queue.shift();
        if(q.id == id){
            layer.push({data: q.data, })
        }
    }

}

function drawTest(data, layer){
    if(layer == 0){
        data.cirlce.x = 100;
        data.circle.y = height / 2;
    }
    
}



function draw(data, layer) {

}




window.onload = function () {
    var margin = {top: 20, right: 120, bottom: 20, left: 120},
        width = 960 - margin.right - margin.left,
        height = 800 - margin.top - margin.bottom;
    d3.json("flare.json",function (error,flare) {
        if(error) throw error;

        root = flare;
        root.x0 = height / 2;
        root.y0 = 0;

        function collapse(d) {
            if(d.children){
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }

        root.children.forEach(collapse);
        update(root);
    });
}
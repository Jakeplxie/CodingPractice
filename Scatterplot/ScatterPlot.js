/**
 * Created by Administrator on 2016/7/4.
 */
var rect_h = 200;
var rect_w = 200;
var w = 860;
var h = 860;
var margin = 20;
var los = 200;

var nameAxes = ["sepal length", "sepal width", "petal length", "petal width"];

var color = [""]

var Axe = {
    createNewAxe: function (min1, max1,min2, max2, id_x, id_y) {
        var axe = {};
        axe.minX = min1.toFixed(2);
        axe.maxX = max1.toFixed(2);

        axe.minY = min2.toFixed(2);
        axe.maxY = max2.toFixed(2);
        axe.id = {x:id_x, y:id_y};



        var posx = axe.id.y * (margin + los);
        var posy = axe.id.x * (margin + los);

        axe.x = posx;
        axe.y = posy;
        axe.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        axe.rect.setAttribute("stroke", "gray");
        axe.rect.setAttribute("fill", "none");
        axe.rect.setAttribute("stroke-width", 1);
        axe.rect.setAttribute("width", rect_w);
        axe.rect.setAttribute("height", rect_h);
        axe.rect.setAttribute("x", posx);
        axe.rect.setAttribute("y", posy);


        axe.text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        if(id_x == id_y){
            axe.text.innerHTML = nameAxes[id_x];
        }
        else{
            axe.text.innerHTML = "";
        }
        axe.text.setAttribute("x", posx + 15);
        axe.text.setAttribute("y", posy + 15);
        axe.text.setAttribute("font-size", 20);
        axe.points = [];

        axe.getY = function (value) {
            value = parseFloat(value);
            var len = parseFloat(axe.maxY) - parseFloat(axe.minY);
            var ratio = (value - parseFloat(axe.minY)) / len;

            var y2 = axe.y;
            var y1 = axe.y + los;

            var data =  parseFloat(y1) - (parseFloat(y1) - parseFloat(y2)) * ratio;
            //document.write(value + " " + len + " " + ratio + " " + y2 + " " + y1 + " " + data);
            return data;
        };

        axe.getX = function (value) {
            value = parseFloat(value);
            var len = parseFloat(axe.maxX) - parseFloat(axe.minX);
            var ratio = (value - parseFloat(axe.minX)) / len;

            var x2 = axe.x + los;
            var x1 = axe.x;
            //console.log(parseFloat(x1) + (parseFloat(x2) - parseFloat(axe.x1)) * ratio);
            return parseFloat(x1) + (parseFloat(x2) - parseFloat(x1)) * ratio;
        };

        axe.appendChildtoSvg = function (svg) {
            svg.appendChild(axe.rect);
            svg.appendChild(axe.text);
        };
        return axe;
    }
};


var Node = {
    createNode:function (x, y, name) {
        var node = {};
        node.x = x;
        node.y = y;
        
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("class", name);
        circle.setAttribute("r", 4);
        circle.setAttribute("fill-opacity", 0.5);
        if(name == "setosa"){
            circle.setAttribute("fill","#800");
        }else if(name == "versicolor"){
            circle.setAttribute("fill", "#080");
        }
        else {
            circle.setAttribute("fill", "#008");
        }
        node.circle = circle;

        node.appendPointtosvg = function (svg) {
            svg.appendChild(node.circle);
        }
        return node;
    }

};



function getMin(data) {
    var min = 9999;
    for(var i = 0; i < data.length; i++){
        min = Math.min(min, data[i]);
    }
    return min;
}

function getMax(data){
    var max = -9999;
    for(var i = 0; i < data.length; i++){
        max = Math.max(max, data[i]);
    }
    return max;
}


var sepal_length = {};
var sepal_width = {};
var petal_length = {};
var petal_width = {};
var data = [];
var nodes = [];

var dataAll = [[],[],[],[]];

function preProcess(rowdata){
    var data = [[],[],[],[]];

    for(var j = 0; j < rowdata.length; j++){
        var count = 0;
         for(var k in rowdata[j]){
             data[count].push(rowdata[j][k]);
             dataAll[count].push(rowdata[j][k]);
             count++;
         }
    }
    return data;
}

//var data = preProcess(setosa);
//document.write(data + "<br />" + data.length + "<br/>" + data[0].length);

function createNodes(arr1, arr2, name, axe) {
    for(var i = 0; i < arr1.length; i++){
        var node = Node.createNode(arr1[i], arr2[i], name);
        var x = axe.getX(arr1[i]);

        var y = axe.getY(arr2[i]);
        //console.log(x);
        //console.log(y);
        node.circle.setAttribute("cx", x);
        node.circle.setAttribute("cy", y);
        axe.points.push(node);
    }
}

function drawScatterPlot(){

    var svg = document.getElementById("mainsvg");

    var _setosa = preProcess(setosa);

    var _versicolor = preProcess(versicolor);
    console.log(_versicolor);
    var _virginica = preProcess(virginica);
    
    
    
    var min = [];
    var max = [];
    for(var i = 0; i < dataAll.length; i++){
        min[i] = getMin(dataAll[i]);
        max[i] = getMax(dataAll[i]);
    }

    //console.log(max);
    //console.log(min);

    var axes = [[],[],[],[]];

    for(var i = 0; i < max.length; i++){
        for(var j = 0; j < max.length; j++){
            var axe = Axe.createNewAxe(min[i], max[i], min[j],max[j], j, i);
            console.log(axe);
            createNodes(_setosa[i],_setosa[j],"setosa",axe);
            createNodes(_versicolor[i],_versicolor[j],"versicolor",axe);
            createNodes(_virginica[i],_virginica[j],"virginica",axe);

            axes[j].push(axe);
        }
    }

    for(var i = 0; i < axes.length; i++){
        for(var j = 0; j < axes.length; j++){
            axes[i][j].appendChildtoSvg(svg);
            for(var k = 0; k < axes[i][j].points.length; k++){
                axes[i][j].points[k].appendPointtosvg(svg);
            }
        }
    }

}

var scale1 = [["5","6","7"], ["2.0","2.5","3.0","3.5","4.0"], ["1","2","3","4","5","6"], ["0.5","1.0","1.5","2.0","2.5"]];
var scale2 = [["7","6","5"], ["4.0","3.5","3.0","2.5","2.0"], ["6","5","4","3","2","1"], ["2.5","2.0","1.5","1.0","0.5"]];
var positionTemp = [[50, 100, 150],[220, 260, 300, 340 ,380], [440, 473, 506, 539, 572, 605], [700, 740, 780, 820, 860]];
function addScale() {
    var svg = document.getElementById("mainsvg");
    for(var i = 0; i < scale1.length; i++){
        for(var j = 0; j < scale1[i].length; j++){
            var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.innerHTML = scale1[i][j];
            text.setAttribute("font-size", 20);
            text.setAttribute("x", positionTemp[i][j]);
            text.setAttribute("y", 890);
            svg.appendChild(text);
        }
    }
    for(var i = 0; i < scale2.length; i++){
        for(var j = 0; j < scale2[i].length; j++){
            var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.innerHTML = scale2[i][j];
            text.setAttribute("font-size", 20);
            text.setAttribute("x", 880);
            text.setAttribute("y", positionTemp[i][j]);
            svg.appendChild(text);
        }
    }


    var nas = ["  setosa", "  versicolor", "  virginica"];
    var cols = ["#800", "#080", "#008"];

    for(var i = 0; i < 3; i++){
        var ci = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        var txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        txt.innerHTML = nas[i];
        ci.setAttribute("cx",10);
        ci.setAttribute("cy",950 + i * 30);
        ci.setAttribute("r", 10);
        ci.setAttribute("fill","#800");
        ci.setAttribute("stroke", cols[i]);
        ci.setAttribute("stroke-width", 4);
        txt.setAttribute("x", 20);
        txt.setAttribute("y", 950 + i * 30);
        txt.setAttribute("font-size", 30);
        //txt.setAttribute("color", cols[i]);
        txt.setAttribute("text-align", "middle");
        txt.setAttribute("dominant-baseline", "middle");

        console.log(txt);
        console.log(ci);
        svg.appendChild(txt);
        svg.appendChild(ci);
    }
}

//interactor


var rect;
var dragging;
var obj;
var cells;


var Cell = {
  createNew: function (len, x, y) {
      var cell = {};
      cell.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      cell.g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      cell.g.appendChild(cell.rect);
      
      cell.rect.setAttribute("width", len);
      cell.rect.setAttribute("height", len);
      cell.rect.setAttribute("x", x);
      cell.rect.setAttribute("y", y);
      cell.rect.setAttribute("stroke", "black");
      cell.rect.setAttribute("fill", "white");
      cell.rect.setAttribute("fill-opacity", 0);
      cell.rect.style.cursor = 'crosshair';
      cell.points = [];
      cell.addPoint = function (minX, maxX, minY, maxY, value, color) {
          var r = 10;
          var w = parseFloat(cell.rect.getAttribute("width"));
          var h = parseFloat(cell.rect.getAttribute("height"));
          var x = parseFloat(cell.rect.getAttribute("x"));
          var y = parseFloat(cell.rect.getAttribute("y"));

          var p1 = (value.x - minX) / (maxX - minX);
          var p2 = (value.y - minY) / (maxY - minY);

          var x1 = p1 * w + x;
          var y1 = y + (1 - p2) * h;

          var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          circle.setAttribute("r", r);
          circle.setAttribute("cx", x1);
          circle.setAttribute("cy", y1);
          circle.setAttribute("fill", color);
          circle.setAttribute("fill-opacity", 0.2);
          cell.g.appendChild(circle);
          cell.points.push(circle);
          return circle;
      }
      return cell;
  }
};

function setOnMouseDown(cell) {
    cell.rect.onmousedown = function () {
        console.log(cell);
        var targ;
        if(!e){
            var e = window.event;
        }
        if(e.target){
            targ = e.target;
        }
        else if(e.srcElement){
            targ = e.srcElement;
        }
        if(targ.nodeType == 3){
            targ = targ.parentNode;
        }
        dragging = true;
        obj = cell;
        mouseX = parseFloat(e.pageX);
        mouseY = parseFloat(e.pageY);
        rect.style.visibility = "visible";
        rect.setAttribute("x", mouseX);
        rect.setAttribute("y", mouseY);
        rect.setAttribute("width", 0);
        rect.setAttribute("height", 0);
    };
}


window.onload = function () {

    


    drawScatterPlot();
    addScale();



}
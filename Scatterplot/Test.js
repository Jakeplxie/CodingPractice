/**
 * Created by Administrator on 2016/7/11.
 */
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

var color = [""];

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
        circle.setAttribute("fill-opacity", 0.8);
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

var tag = 0;
var dataTag = [];
for(var i = 0; i < dataAll[0].length; i++){
    dataTag[i] = 1;
}

function preProcess(rowdata){
    var data = [[],[],[],[]];

    for(var j = 0; j < rowdata.length; j++){
        var count = 0;
        for(var k in rowdata[j]){
            data[count].push({value:rowdata[j][k], id: tag});
            dataAll[count].push(rowdata[j][k]);
            count++;
        }
        tag++;
    }
    // console.log(data.length);
    return data;
}

//var data = preProcess(setosa);
//document.write(data + "<br />" + data.length + "<br/>" + data[0].length);


function createNodes(arr1, arr2, name, axe) {
    for(var i = 0; i < arr1.length; i++){
        var node = Node.createNode(arr1[i].value, arr2[i].value, name);
        var x = axe.getX(arr1[i].value);

        var y = axe.getY(arr2[i].value);
        //console.log(x);
        //console.log(y);
        node.tag = arr1[i].tag;
        node.circle.setAttribute("cx", x);
        node.circle.setAttribute("cy", y);

        if(dataTag[i] === 1){
            node.circle.setAttribute("fill-opacity", 1);
        }
        else{
            node.circle.setAttribute("fill", "#DBDBDB");
        }
        axe.points.push(node);
    }
}

var selectRect = {};
var rect = {};

function drawScatterPlot(){

    var svg = document.getElementById("svg");
    svg.onmousedown = mouseDown;
    svg.innerHTML = "";

    var _setosa = preProcess(setosa);

    var _versicolor = preProcess(versicolor);
    // console.log(_versicolor);
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
            // console.log(axe);
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

    addScale();

    // $("#svg").mousedown(function(e){
    //     var offset=$(this).offset();
    //     var pos={};
    //     pos.x=e.pageX-offset.left;
    //     pos.y=e.pageY-offset.top;
    //
    //     for(var i=0;i<4;i++)
    //         for(var j=0;j<4;j++)
    //             if(pos.x>i*220 && pos.x < i*220+200 && pos.y > j*220 && pos.y < j*220+200)
    //             {
    //                 selectRect.i=i;
    //                 selectRect.j=j;
    //                 break;
    //             }
    //     selectRect.x = pos.x;
    //     selectRect.y = pos.y;
    //
    // });
    //
    //
    // $("#svg").mouseup(function(e){
    //     var offset=$(this).offset();
    //     var pos={};
    //     pos.x=e.pageX-offset.left;
    //     pos.y=e.pageY-offset.top;
    //
    //     if(pos.x<selectRect.i*220)pos.x=selectRect.i*220;
    //     if(pos.x>selectRect.i*220+200)pos.x=selectRect.i*220+200;
    //     if(pos.y<selectRect.j*220)pos.y=selectRect.j*220;
    //     if(pos.y>selectRect.j*220+200)pos.y=selectRect.j*220+200;
    //
    //     rect.x = pos.x < selectRect.x ? pos.x : selectRect.x;
    //     rect.y = pos.y < selectRect.y ? pos.y : selectRect.y;
    //
    //     rect.height=Math.abs(pos.y-selectRect.y);
    //     rect.width=Math.abs(pos.x-selectRect.x);
    //
    //     var i = selectRect.i || 0;
    //     var j = selectRect.j || 0;
    //
    //     console.log(i);
    //     console.log(j);
    //     console.log(axes);
    //     console.log(axes[i][j]);
    //     var x=0,y=0;
    //
    //     for(var k = 0; k < dataAll[0].length; k++){
    //        // console.log(axes[i][j].getX(dataset[k][j+1]));
    //         x=axes[i][j].getX(dataAll[j][k]) + i * 220;
    //         y=axes[i][j].getY(dataAll[j][k]) + j * 220;
    //
    //         console.log(x);
    //         console.log(y);
    //         console.log(rect);
    //
    //         console.log(x > rect.x && x < rect.x + rect.width && y > rect.y && y < rect.y + rect.height);
    //         if(x > rect.x && x < rect.x + rect.width && y > rect.y && y < rect.y + rect.height)
    //             dataTag[k]=1;
    //         else
    //             dataTag[k]=0;
    //     }
    //     console.log(dataTag);
    //     drawScatterPlot();
    // });
    
}

var scale1 = [["5","6","7"], ["2.0","2.5","3.0","3.5","4.0"], ["1","2","3","4","5","6"], ["0.5","1.0","1.5","2.0","2.5"]];
var scale2 = [["7","6","5"], ["4.0","3.5","3.0","2.5","2.0"], ["6","5","4","3","2","1"], ["2.5","2.0","1.5","1.0","0.5"]];
var positionTemp = [[50, 100, 150],[220, 260, 300, 340 ,380], [440, 473, 506, 539, 572, 605], [700, 740, 780, 820, 860]];
function addScale() {
    var svg = document.getElementById("svg");
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

        // console.log(txt);
        // console.log(ci);
        svg.appendChild(txt);
        svg.appendChild(ci);
    }
}

//interactor

var rect;
var dragging;
var obj;
var cells;

function mouseDown(e) {
    if(!e){
        var e = window.event;
    }

    var offset=$(this).offset();
    var pos={};
    pos.x=e.pageX-offset.left;
    pos.y=e.pageY-offset.top;

    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++)
            if(pos.x>i*220 && pos.x < i*220+200 && pos.y > j*220 && pos.y < j*220+200)
            {
                selectRect.i=i;
                selectRect.j=j;
                break;
            }
    selectRect.x = pos.x;
    selectRect.y = pos.y;

}


function mouseUp(e) {
    var offset=$(this).offset();
    var pos={};
    pos.x=e.pageX-offset.left;
    pos.y=e.pageY-offset.top;

    if(pos.x<selectRect.i*220)pos.x=selectRect.i*220;
    if(pos.x>selectRect.i*220+200)pos.x=selectRect.i*220+200;
    if(pos.y<selectRect.j*220)pos.y=selectRect.j*220;
    if(pos.y>selectRect.j*220+200)pos.y=selectRect.j*220+200;

    rect.x = pos.x < selectRect.x ? pos.x : selectRect.x;
    rect.y = pos.y < selectRect.y ? pos.y : selectRect.y;

    rect.height=Math.abs(pos.y-selectRect.y);
    rect.width=Math.abs(pos.x-selectRect.x);

    var i = selectRect.i || 0;
    var j = selectRect.j || 0;

    console.log(i);
    console.log(j);
    console.log(axes);
    console.log(axes[i][j]);
    var x=0,y=0;

    for(var k = 0; k < dataAll[0].length; k++){
        // console.log(axes[i][j].getX(dataset[k][j+1]));
        x=axes[i][j].getX(dataAll[j][k]) + i * 220;
        y=axes[i][j].getY(dataAll[j][k]) + j * 220;

        console.log(x);
        console.log(y);
        console.log(rect);

        console.log(x > rect.x && x < rect.x + rect.width && y > rect.y && y < rect.y + rect.height);
        if(x > rect.x && x < rect.x + rect.width && y > rect.y && y < rect.y + rect.height)
            dataTag[k]=1;
        else
            dataTag[k]=0;
    }
    console.log(dataTag);
}

document.onmouseup = mouseUp;

window.onload = function () {
    //drawScatterPlot();
    setInterval(drawScatterPlot, 20);
}
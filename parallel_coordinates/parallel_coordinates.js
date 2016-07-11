/**
 * Created by Administrator on 2016/7/1.
 */
var Axe = {
    createNewAxe: function (min, max, name) {
        var axe = {};
        axe.min = min.toFixed(2);
        axe.max = max.toFixed(2);   // return string type
        axe.name = name;

        axe.line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        axe.line.setAttribute("stroke", "black");
        //axe.line.setAttribute("stroke-width", 2);

        axe.text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        axe.text.innerHTML = axe.name;
        axe.text.setAttribute("text-anchor", "middle");
        axe.text.setAttribute("dominant-baseline", "end");
        axe.text.setAttribute("font-size", 13);
        //axe.text.setAttribute("font-weight", "bold");
        axe.text.setAttribute("font-family", "Microsoft YaHei")

        axe.points = [];

        //（x1, y1）是下面的点，相当于零点；（x2, y2）是上面的点，为定点
        axe.x1 = 0;
        axe.x2 = 0;
        axe.y1 = 0;
        axe.y2 = 0;

        axe.processAxe = function () {
            var top = 10;
            axe.line.setAttribute("x1", axe.x1);
            axe.line.setAttribute("y1", axe.y1);
            axe.line.setAttribute("x2", axe.x2);
            axe.line.setAttribute("y2", axe.y2);
            axe.text.setAttribute("x", axe.x2);
            axe.text.setAttribute("y", axe.y2 - top);
            normalize(axe);
        };

        axe.getY = function (value) {
            value = parseFloat(value);
            var len = parseFloat(axe.max) - parseFloat(axe.min);
            var ratio = (value - parseFloat(axe.min)) / len;
            return parseFloat(axe.y1) - (parseFloat(axe.y1) - parseFloat(axe.y2)) * ratio;
        };

        axe.setAttribute = function (name, value) {
            axe[name] = value;
        };

        axe.appendChildtoSvg = function (svg) {
            svg.appendChild(axe.line);
            svg.appendChild(axe.text);
            for(var i = 0; i < axe.points.length; i++){
                svg.appendChild(axe.points[i]);
            }
        };

        return axe;
        
        function normalize(axe){

            while(axe.points.length > 0){
                axe.points.pop();
            }

            var len = parseFloat(axe.max) - parseFloat(axe.min);
            var top = 10;
            var num = 10;
            var interval = len / num;

            if(interval > 1) {
                interval = Math.round(interval);
            }
            else{
                interval = interval.toFixed(2);
            }
            var start = parseFloat(axe.min);
            while(start < parseFloat(axe.max)){
                var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute("text-anchor", "start");
                text.setAttribute("dominant-baseline", "middle");
                text.setAttribute("font-size", 12);
                text.innerHTML = "- " + start;
                var y = axe.getY(start);
                text.setAttribute("x", axe.x1 + 0.05);
                text.setAttribute("y", y);

                axe.points.push(text);
                console.log(interval);
                console.log(start);
                interval = parseFloat(interval);
                start += interval;
                console.log(start);
                start = parseFloat(start.toFixed(2));
            }
        }

    }
};

function getAttr() {
    var attr = [];
    attr.push("protein(g%)");
    attr.push("calcium(g%)");
    attr.push("sodium(g%)");
    attr.push("fiber(g%)");
    attr.push("vitaminc(g%)");
    attr.push("potassium(g%)");
    attr.push("carbohydrate(g%)");
    attr.push("sugars(g%)");
    attr.push("fat(g%)");
    attr.push("water(g%)");
    attr.push("calories(g%)");
    attr.push("saturates(g%)");
    attr.push("monounsat(g%)");
    attr.push("polyunsat(g%)");

    return attr;
}

function getMax(data){
    var max = {};
    for(var i in data[0]){
        max[i] = -9999;
    }
    for(var i = 0; i < data.length; i++){
        for(var j in data[i]){
            if(data[i][j] != null && !isNaN(data[i][j])){
                max[j] = Math.max(max[j], data[i][j]);
            }
        }
    }
    return max;
}

function getMin(data) {
    var min = {};
    for(var i in data[0]){
        min[i] = 0;
    }
    for(var i = 0; i < data.length; i++){
        for(var j in data[i]){
            if(data[i][j] != null && !isNaN(data[i][j])){
                min[j] = Math.min(min[j], data[i][j]);
            }
        }
    }
    return min;
}

function getColor(){
    var r = Math.floor(Math.random()*100) + 100;
    var g = Math.floor(Math.random()*100) + 100;
    var b = Math.floor(Math.random()*100) + 100;

    return "rgb(" + r +"," + g + "," + b +")";
}


function preProcess(data) {
    var numofaxe = 0;
    var numofline = data.length;
    var attrofaxe = [];
    var max = {};
    var min = {};

    max = getMax(data);
    min = getMin(data);

    var count1 = 0;

    var interval = 100;
    var ystart = 600;
    var yend = 40;
    var x = 100;

    var svg = document.getElementById("mainDraw");

    var names = getAttr();

    var axes = {};

    //初始化坐标轴

    for(var i in max){
        if(max[i] != -9999) {
            var axe = Axe.createNewAxe(min[i], max[i], i);
            axe.setAttribute("x1", x + count1 * interval);
            axe.setAttribute("x2", x + count1 * interval);
            axe.setAttribute("y1", ystart);
            axe.setAttribute("y2", yend);
            axes[i] = axe;
            count1++;
        }
    }

    //初始化line

    for(var i = 0; i < data.length; i++){
        var path = document.createElementNS("http://www。w3/org/2000/svg", "path");
        var pathArr = [];
        var count2 = 0;
        for(var j in data[i]){

            if(max[j] != -9999){
                if(data[i][j] != null){
                    pathArr.push({x: axes[j].x1, y: axes[j].getY(data[i][j])});
                }else{
                     pathArr.push({x: axes[j].x1, y: axes[j].getY(0)});
                }
            }
            count2++;
        }
        console.log(pathArr);

        var d = "M";
        for(var j = 0; j < pathArr.length; j++){
            if(j != pathArr.length - 1){
                d += pathArr[j].x + " " + pathArr[j].y + "L";
            }
            else{
                d += pathArr[j].x + " " + pathArr[j].y;
            }
        }

        console.log(path);
        path.setAttribute("d", d);
        path.setAttribute("stroke", getColor());
        path.setAttribute("stroke-width", 1);
        path.setAttribute("stroke-opacity", 0.4);
        path.setAttribute("fill", "none");

        svg.appendChild(path);

    }

    for(var i in axes){
        axes[i].processAxe();
        axes[i].appendChildtoSvg(svg);
    }
}

window.onload = function () {
    preProcess(foodsData);
}


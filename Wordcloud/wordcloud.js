window.onload = function(){
    initial();
}
function initial(){
    var w = 1000;
    var h = 1000;
    var _w = 500;
    var _h = 500;
    var canvas1 = document.getElementsByTagName("canvas")[0];
    var canvas2 = document.getElementsByTagName("canvas")[1];
    var cxt1 = canvas1.getContext("2d");
    var cxt2 = canvas2.getContext("2d");
    canvas1.setAttribute("width", w);
    canvas1.setAttribute("height", h);
    canvas2.setAttribute("width", _w);
    canvas2.setAttribute("height", _h);
    cxt1.textAlign = "center";
    cxt1.textBaseline = "middle";
    cxt1.fillStyle = "black";
    cxt2.textAlign = "center";
    cxt2.textBaseline = "middle";
    cxt2.fillStyle = "black";
}


function hasProperty(arr, name){
    for(var i = 0; i < arr.length; i++){
        if(arr[i].text === name)
            return i;
    }
    return -1;
}

function text2Words(str){
    var words =  str.replace(/[\s|\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\¡°|\,|\¡±|¡®\<|\.|\>|\/|\¡ª|\?|\t|\n]+/g, " ").split(" ");
    if(words[0] == "")
        words.shift();
    if(words[words.length - 1] == "")
        words.pop();
    var res = [];
    for(var i = 0; i < words.length; i++){
        var id = hasProperty(res, words[i]);
        if(id >= 0){
            res[id].value++;
        }
        else{
            res.push({text:words[i], value:1});
        }
    }
    return res.sort(function(a,b){ return b.value - a.value; });
}

function draw(data){
    var offset = 10;
    var scale = 5;
    var minSize = 8;

    var colors = [
        "009900" , "009933" , "009966" , "009999" , "0099CC" , "0099FF",
        "00CC00" , "00CC33" , "00CC66" , "00CC99" , "00CCCC" , "00CCFF",
        "00FF00" , "00FF33" , "00FF66" , "00FF99" , "00FFCC" , "00FFFF",
        "336600" , "336633" , "336666" , "336699" , "3366CC" , "3366FF",
        "339900" , "339933" , "339966" , "339999" , "3399CC" , "3399FF",
        "33CC00" , "33CC33" , "33CC66" , "33CC99" , "33CCCC" , "33CCFF",
        "33FF00" , "33FF33" , "33FF66" , "33FF99" , "33FFCC" , "33FFFF",
        "666600" , "666633" , "666666" , "666699" , "6666CC" , "6666FF",
        "669900" , "669933" , "669966" , "669999" , "6699CC" , "6699FF",
        "66CC00" , "66CC33" , "66CC66" , "66CC99" , "66CCCC" , "66CCFF",
        "66FF00" , "66FF33" , "66FF66" , "66FF99" , "66FFCC" , "66FFFF",
        "990000" , "990033" , "990066" , "990099" , "9900CC" , "9900FF",
        "993300" , "993333" , "993366" , "993399" , "9933CC" , "9933FF",
        "996600" , "996633" , "996666" , "996699" , "9966CC" , "9966FF",
        "999900" , "999933" , "999966" , "999999" , "9999CC" , "9999FF",
        "99CC00" , "99CC33" , "99CC66" , "99CC99" , "99CCCC" , "99CCFF",
        "99FF00" , "99FF33" , "99FF66" , "99FF99" , "99FFCC" , "99FFFF",
        "CC0000" , "CC0033" , "CC0066" , "CC0099" , "CC00CC" , "CC00FF",
        "CC3300" , "CC3333" , "CC3366" , "CC3399" , "CC33CC" , "CC33FF",
        "CC6600" , "CC6633" , "CC6666" , "CC6699" , "CC66CC" , "CC66FF",
        "CC9900" , "CC9933" , "CC9966" , "CC9999" , "CC99CC" , "CC99FF",
        "CCCC00" , "CCCC33" , "CCCC66" , "CCCC99" , "CCCCCC" , "CCCCFF",
        "CCFF00" , "CCFF33" , "CCFF66" , "CCFF99" , "CCFFCC" , "CCFFFF",
        "FF0000" , "FF0033" , "FF0066" , "FF0099" , "FF00CC" , "FF00FF",
        "FF3300" , "FF3333" , "FF3366" , "FF3399" , "FF33CC" , "FF33FF",
        "FF6600" , "FF6633" , "FF6666" , "FF6699" , "FF66CC" , "FF66FF",
        "FFCC00" , "FFCC33" , "FFCC66" , "FFCC99" , "FFCCCC" , "FFCCFF",
        "FFFF00" , "FFFF33" , "FFFF66" , "FFFF99" , "FFFFCC" , "FFFFFF"];

    var canvas1 = document.getElementsByTagName("canvas")[0];
    var canvas2 = document.getElementsByTagName("canvas")[1];
    var cxt1 = canvas1.getContext("2d");
    var cxt2 = canvas2.getContext("2d");



    cxt1.clearRect(0,0,canvas1.width,canvas1.height); //清空整个画布

    var fix = {x:canvas1.width/2,y:canvas1.height/2};

    var position = {x:canvas1.width/2, y:canvas1.height/2 - offset};
    var id = 0;


    var getPosition = getNextPosition;

    for(var i = 0; i < data.length; i++) {



        var font_color = "#" + colors[i % 168];
        

        var fontSize = data[i].value*scale + minSize;
        cxt1.font = fontSize + "px Arial";
        cxt2.font = fontSize + "px Arial";

        cxt1.fillStyle = font_color;
        cxt2.fillStyle = font_color;
        if(i === 0){
            cxt1.fillText(data[i].text, fix.x, fix.y);
            var oldData = cxt1.getImageData(0, 0, canvas1.width, canvas1.height);
        }
        else {
            position = {x: canvas1.width / 2, y: canvas1.height / 2 - offset};
            var width = cxt1.measureText(data[i].text).width;
            id = 0;
            if(Math.round(width)%2 != 0){
                var _width = Math.round(width) + 1;
            }
            else{
                var _width = Math.round(width);
            }
            if(Math.round(fontSize)%2 != 0){
                var _height = Math.round(fontSize) + 1;
            }
            else{
                var _height = Math.round(fontSize);
            }
            
            cxt2.fillText(data[i].text, _width/2, _height/2);
            
            var newData =  cxt2.getImageData(0, 0, _width, _height);
            
            while (isOverLap(position, oldData, newData)) {
                position = getPosition(fix, position, offset);
                id++;
            }
            
            cxt1.fillText(data[i].text, position.x, position.y);
            cxt2.clearRect(0,0,canvas2.width,canvas2.height);
            
            console.log(i);
        }
    }
}

function update(position, oldData, newData){
    
    var size = 4;
    var offset = 3;
    
    for(var i = 0; i < newData.data.length/size; i++){
        var x = i%newData.width + position.x - newData.width/2;
        var y = Math.floor(i/newData.width) + position.y - newData.height/2;
        var id = y*oldData.height+x;
        oldData.data[id*size+offset] += newData.data[i*size+offset];
    }
}

function isOverLap(position, oldData, newData){
    var oldPix = oldData.data;
    var newPix = newData.data;
    var size = 4;
    var offset = 3;


    for(var i = 0; i < newPix.length/size; i++){
        var x = i%newData.width + position.x - newData.width/2;
        var y = Math.floor(i/newData.width) + position.y - newData.height/2;
        var id = y*oldData.height+x;
        if((oldPix[id*size+offset]&newPix[i*size+offset]) != 0) { return true; }  //按位与判断两个凸显数据是否有重叠部分
    }
    
    update(position, oldData, newData);
    return false;
}


function getNextPosition(fix, position, len){
    var dx = position.x - fix.x;
    var dy = -position.y + fix.y;
    if(Math.abs(dx) < Math.abs(dy)){
        dx += (dy/Math.abs(dy)) * len;
    }
    else if(Math.abs(dx) === Math.abs(dy)){
        if(dx < 0 && dy > 0){
            dy += len;
        }
        else if(dx > 0 && dy > 0){
            dy -= len;
        }
        else if(dx > 0 && dy < 0){
            dx -= len;
        }
        else{
            dy += len;
        }
    }
    else{
        dy += -(dx/Math.abs(dx)) * len;
    }
    return {x:fix.x + dx, y:fix.y - dy};
}
function WordCloudGenerator(){
    var canvas = document.getElementsByTagName("canvas")[0];
    var text = document.getElementsByTagName("textarea")[0].value;
    var data = text2Words(text);
    //console.log(data);
    draw(data);
}

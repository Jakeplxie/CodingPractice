function calculateSize(data){
    if(data.children == undefined){
        return data.size;
    }
    data.size = 0;
    for(var i = 0; i < data.children.length; i++){
        data.size += calculateSize(data.children[i]);
    }
    return data.size;
}

var ratio;
var color = getColor();
function reSize(data){
    data.size = data.size * ratio;

    if(data.children == undefined){
        return;
    }

    for(var i = 0; i < data.children.length; i++){
        reSize(data.children[i]);
    }
}

function squrify(data, rect){
    if(data.children == undefined){
        var tempRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        tempRect.setAttribute("x", rect.x + 0.5);
        tempRect.setAttribute("y", rect.y + 0.5);
        tempRect.setAttribute("width", rect.width - 1);
        tempRect.setAttribute("height", rect.height - 1);

        //color = getColor();
        tempRect.setAttribute("fill",color);
        svg.appendChild(tempRect);

        var tempText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        tempText.setAttribute("x", rect.x);
        tempText.setAttribute("y", rect.y + 15);
        tempText.setAttribute("font-size", 10);
        tempText.innerHTML = data.name;
        svg.appendChild(tempText);
    }
    else{
        if(data.children[0].children == undefined)
            color = getColor();
        data.children.sort( function(a, b){ return a.size < b.size ? 1 : -1 } );
        var i = 0;
        while(i < data.children.length){
            var sum = data.children[i].size;
            var swap = 0;
            if(rect.height <= rect.width)
                short = rect.height;
            else{
                swap = 1;
                short = rect.width;
            }
            var tempI = i;
            var a = 0;
            var oldratio = 1;
            var newratio = 0;
            while(oldratio > newratio && i < data.children.length){
                if(i == data.children.length-1){
                    a=1;
                    break;
                }
                i++;
                sum += data.children[i].size
                newratio = (sum/short) / (data.children[i].size/(sum/short));
                oldratio = (data.children[i-1].size/((sum-data.children[i].size)/short))/
                    ((sum-data.children[i].size)/short);
            }

            if(i < data.children.length-1 || a == 0){
                sum = sum - data.children[i].size;
            }
            else
            {
                i++;
            }

            if(swap == 0){
                var width = sum / short;
                var height = 0;
                var tempRect = {};
                tempRect.x = rect.x;
                tempRect.y = rect.y;
                tempRect.width = rect.width;
                tempRect.height = rect.height;
                for(var j = tempI; j < i; j++){
                    tempRect.x = rect.x;
                    tempRect.y = rect.y + height;
                    tempRect.width = width;
                    tempRect.height = data.children[j].size / width;
                    var tempColor = color;
                    squrify(data.children[j], tempRect);
                    color = tempColor;
                    height += data.children[j].size / width;
                }
                rect.x = rect.x + width;
                rect.y = rect.y;
                rect.width = rect.width - width;
                rect.height = rect.height;

            }
            else{
                var height = sum / short;
                var width = 0;
                var tempRect = {};
                tempRect.x = rect.x;
                tempRect.y = rect.y;
                tempRect.width = rect.width;
                tempRect.height = rect.height;
                for(var j = tempI; j < i; j++){
                    tempRect.x = rect.x + width;
                    tempRect.y = rect.y;
                    tempRect.width = data.children[j].size / height;
                    tempRect.height = height;
                    var tempColor = color;
                    squrify(data.children[j], tempRect);
                    color = tempColor;
                    width += data.children[j].size / height;
                }
                rect.x = rect.x;
                rect.y = rect.y + height;
                rect.width = rect.width;
                rect.height = rect.height - height;
            }
        }

    }

}


function getColor(){
    var r = Math.floor(Math.random()*100)+100;
    var g = Math.floor(Math.random()*150)+100;
    var b = Math.floor(Math.random()*100)+100;
    return "rgb("+r+","+g+","+b+")";
}

window.onload = function(){
    var w = 1200;
    var h = 800;
    var svg = document.getElementById("svg");
    svg.setAttribute("width", w);
    svg.setAttribute("height", h);

    var rect = {};
    rect.x = 0;
    rect.y = 0;
    rect.height = h;
    rect.width = w;
    //var color = getColor();

    d3.json("TreeData.json", function(json) {
        if(json != null) {
            var totalSize = calculateSize(json);
            ratio = rect.width * rect.height / totalSize;
            reSize(json);
            squrify(json, rect);
        }
    });
}
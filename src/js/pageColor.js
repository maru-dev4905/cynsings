const pageColor = function(){
    let
        path;

    const item = document.querySelectorAll(".nav--item");

    const initModule = function(){

        path = window.location.pathname;
        path = path.split("/").pop();

        _addEventHandlers();
    }
    const _addEventHandlers = function(){
        window.addEventListener("load", _changeColor);
    }
    const _changeColor = function(){
        if(path === "index.html" || "/"){
            item[0].childNodes[0].classList.add("color-red");
        }
        else if(path === "music.html"){
            item[1].childNodes[0].classList.add("color-red");
        }
        else if(path === "videos.html"){
            item[2].childNodes[0].classList.add("color-red");
        }
        else if(path === "tour.html"){
            item[3].childNodes[0].classList.add("color-red");
        }
    }

    return {
        init : initModule
    }
}
pageColor().init();
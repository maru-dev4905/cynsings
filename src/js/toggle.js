let path;
path = location.pathname.split("/").pop();

if(path === "music.html"){
    const allBtn = document.querySelector(".toggle1");
    const soloBtn = document.querySelector(".toggle2");
    const soloVideo = document.querySelectorAll(".solo-video");
    
    allBtn.addEventListener("click",()=>{
        for(let i = 0; i <soloVideo.length; i++){
            soloVideo[i].style.display="block";
        }
    });
    soloBtn.addEventListener("click",()=>{
        for(let i = 0; i <soloVideo.length; i++){
            soloVideo[i].style.display="none";
        }
    })
}
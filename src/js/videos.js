let path;
path = location.pathname.split("/").pop();

if(path === "videos.html"){
    const videoBox = document.querySelector(".video__box");
    const videoBtn = document.querySelectorAll(".video--btn");
    const video = document.querySelector(".video");
    
    const videos = {
        DRINKS_URL  : "https://www.youtube.com/embed/YQbpkaTIQ2M",
        BELIEVE_URL : "https://www.youtube.com/embed/kn0GuW5OG0w",
        WHATARE_URL : "https://www.youtube.com/embed/Y8poNnu73ts",
        NEVER_URL   : "https://www.youtube.com/embed/vAbzxtOvt9g",
        HOLY_URL    : "https://www.youtube.com/embed/XeJyuKHuF2w",
        TERRIBLE_URL: "https://www.youtube.com/embed/5mFgDhnPqTo",
        STILL_URL   : "https://www.youtube.com/embed/-MZgtCp8mtc",
        ONLY_URL    : "https://www.youtube.com/embed/0xCggNCs2kU",
        ALRIGHT_URL : "https://www.youtube.com/embed/Z1FjZ0bQiRA",
        TOGETHER_URL: "https://www.youtube.com/embed/y0I5RqCmU_A",
        MOMENT_URL  : "https://www.youtube.com/embed/u9NCwW8iRiw",
    }
    
    for(let i = 0; i < videoBtn.length; i++){
        videoBtn[i].addEventListener("click",()=>{
            videoBox.style.display = "flex";

            switch (videoBtn[i]) {
                case videoBtn[0]:
                    video.setAttribute("src",videos.DRINKS_URL);
                    break;
                case videoBtn[1]:
                    video.setAttribute("src",videos.BELIEVE_URL);
                    break;
                case videoBtn[2]:
                    video.setAttribute("src",videos.WHATARE_URL);
                    break;
                case videoBtn[3]:
                    video.setAttribute("src",videos.NEVER_URL);
                    break;
                case videoBtn[4]:
                    video.setAttribute("src",videos.HOLY_URL);
                    break;
                case videoBtn[5]:
                    video.setAttribute("src",videos.TERRIBLE_URL);
                    break;
                case videoBtn[6]:
                    video.setAttribute("src",videos.STILL_URL);
                    break;
                case videoBtn[7]:
                    video.setAttribute("src",videos.ONLY_URL);
                    break;
                case videoBtn[8]:
                    video.setAttribute("src",videos.ALRIGHT_URL);
                    break;
                case videoBtn[9]:
                    video.setAttribute("src",videos.TOGETHER_URL);
                    break;
                case videoBtn[10]:
                    video.setAttribute("src",videos.MOMENT_URL);
                    break;
                default:
                    break;
            }
        });
    }

    videoBox.addEventListener("click",()=>{
        videoBox.style.display="none";
    });

}
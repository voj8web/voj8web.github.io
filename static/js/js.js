const pcDiv = document.querySelector(".pc");
const mobileDiv = document.querySelector(".mobile");
const body = document.body;

function handleWindowResize() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // Mobile
        mobileDiv.style.display = "block";
        pcDiv.style.display = "none";
        body.style.backgroundSize = "125%";
        body.style.backgroundPositionX = "center";
        body.style.backgroundPositionY = "60px";
    } else {
        // PC
        if (window.innerWidth < 1200) {
            mobileDiv.style.display = "block";
            pcDiv.style.display = "none";
            body.style.backgroundSize = "125%";
            body.style.backgroundPositionX = "center";
            body.style.backgroundPositionY = "60px";
        } else {
            pcDiv.style.display = "block";
            mobileDiv.style.display = "none";
            body.style.backgroundSize = "100%";
        }
    }
}

handleWindowResize();
window.addEventListener("resize", handleWindowResize);
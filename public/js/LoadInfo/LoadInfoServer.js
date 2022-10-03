var loadInfoContent = document.getElementById("load-info-content");
var loadInfoContainer = document.getElementById("load-info-container");



function LoadInfoServer() {
    loadInfoContent.classList.toggle("active");

    if (loadInfoContent.classList.contains('active')) {
        loadInfoContainer.style.height = "50px";
    }
    else {
      loadInfoContainer.style.height = "20px";
    }
}




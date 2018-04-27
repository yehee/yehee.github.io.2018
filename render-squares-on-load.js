var backgroundColors = ["pink", "lightgrey", "lightblue"];
var width = [278, 278, 556];
var height = [270, 540, 270];
var numColumns = 4;

window.onload = function () {
    initializeNumColumns();
    renderProfile();
}

window.onresize = function () {
    updateNumColumns();
}

function initializeNumColumns() {
    if (window.innerWidth < 570) {
        numColumns = 1;
    } else if (window.innerWidth < 860) {
        numColumns = 2;
    } else if (window.innerWidth < 1200) {
        numColumns = 3;
    }
}

function updateNumColumns() {
    var temp = 4;
    if (window.innerWidth < 570) {
        temp = 1;
    } else if (window.innerWidth < 860) {
        temp = 2;
    } else if (window.innerWidth < 1200) {
        temp = 3;
    }
    if (numColumns != temp) {
        numColumns = temp;
        renderProfile();
    }
}

function renderProfile() {
    var profilesBlock = document.getElementById("block-views-profiles-list-block-1");
    if (profilesBlock != null) {
        var profilesList = document.getElementsByClassName("grid-item");
        var positionX = 0;
        var currentY = 0;
        var positionY = [0, 0, 0, 0];
        for (var i = 0; i < profilesList.length; i++) {
            var currentProfile = profilesList[i];
            while (positionY[positionX] > currentY) {
                positionX = (positionX + 1) % numColumns;
                if (positionX == 0) {
                    currentY++;
                }
            }
            if (positionX == (numColumns - 1) || positionY[positionX + 1] > currentY) {
                var range = 2;
            } else {
                var range = 3;
            }
            var chosen = Math.floor(Math.random() * range);
            var images = profilesList[i].getElementsByTagName("img");
            for (var j = 0; j < images.length; j++) {
                if (j == chosen) {
                    images[j].style.display = "block";
                } else {
                    images[j].style.display = "none";
                }
            }
            profilesList[i].style.width = width[chosen] + "px";
            profilesList[i].style.height = height[chosen] + "px";
            profilesList[i].style.position = "absolute";

            profilesList[i].style.left = positionX * 278 + "px";
            profilesList[i].style.top = positionY[positionX] * 270 + "px";
            images[chosen].style.width = width[chosen] + "px";
            images[chosen].style.height = height[chosen] + "px";
            if (chosen == 0) {
                positionY[positionX] += 1;
                positionX = (positionX + 1) % numColumns;
            } else if (chosen == 1) {
                positionY[positionX] += 2;
                positionX = (positionX + 1) % numColumns;
            } else {
                // chosen == 2
                positionY[positionX] += 1;
                positionY[positionX + 1] += 1;
                positionX = (positionX + 2) % numColumns;
            }
            if (positionX == 0) {
                currentY++;
            }
            //assign random background color
            var backgroundColor = backgroundColors[Math.floor(backgroundColors.length * Math.random())];
            images[chosen].style.background = backgroundColor;
        }
        var viewContent = document.getElementsByClassName("view-content");
        viewContent[0].style.position = "relative";
        viewContent[0].style.height = Math.max(...positionY) * 270 + "px";
    }
}
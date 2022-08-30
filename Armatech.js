import {getDim, setGameContainer} from "./Unitygame.js"

 
let dimensions = getDim();

//Toggle whether to show the game based on screen size
//For now, this doesn't work if user toggles screen size!
let gameContainer = document.querySelector(".gameContainer");
let innerGameContainer = document.createElement("div");


innerGameContainer.innerHTML = setGameContainer("Media/WebGL - Armatech/index.html", "armatech", dimensions, 820, 510);
window.addEventListener("resize", () => {
    innerGameContainer.innerHTML = setGameContainer("Media/WebGL - Armatech/index.html", "armatech", dimensions, 820, 510);
});
gameContainer.append(innerGameContainer);







// Declare variables
let button = document.querySelector(".sidebar");
let sidebar = document.getElementsByTagName("sidebar");
console.log(sidebar);
let isMovedOut = false;
// Add button listener
button.addEventListener("click", swap);

// Swap sidebar state
function swap(){
    console.log(document);
    /*let opposite = !isMovedOut;
    toggle(opposite);
    isMovedOut = opposite;*/
}

function toggle(isMovedOut){
    switch(isMovedOut){
        case false:
            sidebar.style.setProperty("width", "0px");
            button.style.setProperty("left", "0px");
            button.style.setProperty("background-image", 'url("/Try-N2/site/images/menu.png")');
            break;
        case true:
            sidebar.style.setProperty("width", "200px");
            button.style.setProperty("left", "200px");
            button.style.setProperty("background-image", 'url("/Try-N2/site/images/menu_close.png")');
            break;
    }
}

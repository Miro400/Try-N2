// Declare variables
document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector(".sidebar");
    let sidebar = document.body.querySelector("sidebar");
}.catch(err => alert(err)));
let isMovedOut = false;

// Add button listener
button.addEventListener("click", swap);

// Swap sidebar state
function swap(){
    let opposite = !isMovedOut;
    console.log(opposite);
    toggle(opposite);
    isMovedOut = opposite;
}

function toggle(){
    switch(isMovedOut){
        case false:
            sidebar.style.setProperty("width", "0px").catch(err => alert(err));
            button.style.setProperty("left", "0px");
            break;
        case true:
            sidebar.style.setProperty("width", "200px");
            button.style.setProperty("left", "200px");
            break;
    }
}

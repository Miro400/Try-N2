// Declare variables
let button = document.querySelector(".sidebar");
let sidebar = document.querySelector("sidebar");
let buttonstyle = getComputedStyle(button);
let sidebarstyle = getComputedStyle(sidebar);
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
    let sidebarwidth = Number(sidebarstyle.getPropertyValue("width").slice(0, -2));
    let buttonpos = Number(buttonstyle.getPropertyValue("left").slice(0, -2));

    switch(isMovedOut){
        case false:
            while (sidebarwidth < 200 & buttonpos < 200){
                sidebarwidth += 2;
                buttonpos += 2;
                sidebarstyle.setProperty("width", sidebarwidth + 'px');
                buttonstyle.setProperty("left", buttonpos + 'px');
            }
            break;
        case true:
            while (sidebarwidth > 0 & buttonpos > 0){
                sidebarwidth -= 2;
                buttonpos -= 2;
                sidebarstyle.setProperty("width", sidebarwidth + 'px');
                buttonstyle.setProperty("left", buttonpos + 'px');
            }
            break;
    }
}
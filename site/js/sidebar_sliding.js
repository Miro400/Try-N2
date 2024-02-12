// Declare variables
let button = document.querySelector(".sidebar");
let sidebar = document.querySelector("sidebar");
let isMovedOut = false;

// Add button listener
button.addEventListener("click", swap);

// Swap sidebar state
function swap(){
    let opposite = !isMovedOut;
    toggle(opposite);
    isMovedOut = opposite;
}

function toggle(){
    let sidebarwidth = sidebar.style.width;
    let buttonpos = button.style.left;

    switch(isMovedOut){
        case false:
            while (sidebarwidth < 200 & buttonpos < 200){
                sidebarwidth += 2;
                buttonpos += 2;
                sidebar.style.width = sidebarwidth;
                button.style.left = buttonpos;
            }
            break;
        case true:
            while (sidebarwidth > 0 & buttonpos > 0){
                sidebarwidth -= 2;
                buttonpos -= 2;
                sidebar.style.width = sidebarwidth;
                button.style.left = buttonpos;
            }
            break;
    }
}
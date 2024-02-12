// Declare variables

document.addEventListener("load", (event) => {
    let button = document.querySelector(".sidebar");
    let sidebar = document.querySelector("sidebar");
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
                sidebar.style.setProperty("width", "0px");
                button.style.setProperty("left", "0px");
                break;
            case true:
                sidebar.style.setProperty("width", "200px");
                button.style.setProperty("left", "200px");
                break;
        }
    }
});


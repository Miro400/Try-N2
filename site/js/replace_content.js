function replace_content(){
    if (document.querySelector("replace#sidebar") != null){
        console.log("YEEEES");
        fetch("sidebar.html").then(response => response.text()).then(data => replace_sidebar(data));
    }
    if (document.querySelector("replace#topbar") != null){
        fetch("topbar.html").then(response => response.text()).then(data => replace_topbar(data));
    }
    if (document.querySelector("replace#footer") != null){
        fetch("footer.html").then(response => response.text()).then(data => replace_footer(data));
    }
    console.log(document);
}

function replace_sidebar(data){
    let old_elem = document.querySelector("replace#sidebar");
    let parent = old_elem.parentNode;
    let elem = new DOMParser().parseFromString(data, "text/html").getElementById("sidebar");
    parent.replaceChild(elem, old_elem);
}

function replace_topbar(data){
    let old_elem = document.querySelector("replace#topbar");
    let parent = old_elem.parentNode;
    let elem = new DOMParser().parseFromString(data, "text/html").getElementById("sidebar");
    parent.replaceChild(elem, old_elem);
}

function replace_footer(data){
    let old_elem = document.querySelector("replace#footer");
    let parent = old_elem.parentNode;
    let elem = new DOMParser().parseFromString(data, "text/html").getElementById("sidebar");
    parent.replaceChild(elem, old_elem);
}      

replace_content();

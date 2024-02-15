function replace_content(){
    var el_type;
    if (document.querySelector("replace#sidebar") != null){
        fetch("sidebar.html").then(response => response.text()).then(data => replace_sidebar(data));
    }
    if (document.querySelector("replace#topbar") != null){
        fetch("topbar.html").then(response => response.text()).then(data => replace_topbar(data));
    }
    if (document.querySelector("replace#footer") != null){
        fetch("footer.html").then(response => response.text()).then(data => replace_footer(data));
    }
}

function replace_sidebar(data){
    let old_elem = document.querySelector("replace#sidebar");
    let parent = old_elem.parentNode;
    parent.removeChild(old_elem);
    let elem_list = new DOMParser().parseFromString(data, "text/html").querySelectorAll(".sidebar");
    for (let i = 0; i < elem_list.length; i++) {
        parent.appendChild(elem_list[i]);
    }
}

function replace_topbar(data){
    let old_elem = document.querySelector("replace#topbar");
    let parent = old_elem.parentNode;
    parent.removeChild(old_elem);
    let elem_list = new DOMParser().parseFromString(data, "text/html").querySelectorAll(".topbar");
    for (let i = 0; i < elem_list.length; i++) {
        parent.appendChild(elem_list[i]);
    }
}

function replace_footer(data){
    let old_elem = document.querySelector("replace#footer");
    let parent = old_elem.parentNode;
    parent.removeChild(old_elem);
    let elem_list = new DOMParser().parseFromString(data, "text/html").querySelectorAll(".footer");
    for (let i = 0; i < elem_list.length; i++) {
        parent.appendChild(elem_list[i]);
    }
}      

replace_content();

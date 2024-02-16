function replace_content(){
    if (document.querySelector("replace#sidebar") != null){
        fetch("sidebar.html").then(response => response.text()).then(data => replace_sidebar(data));
    }
    if (document.querySelector("replace#topbar") != null){
        fetch("topbar.html").then(response => response.text()).then(data => replace_topbar(data));
    }
    if (document.querySelector("replace#footer") != null){
        fetch("footer.html").then(response => response.text()).then(data => replace_footer(data));
    }
    return document;
}

function replace_sidebar(data){
    let old_elem = document.querySelector("replace#sidebar");
    let parent = old_elem.parentNode;
    let elem = new DOMParser().parseFromString(data, "text/html").querySelector("sidebar");
    parent.replaceChild(elem, old_elem);
}

function replace_topbar(data){
    let old_elem = document.querySelector("replace#topbar");
    let parent = old_elem.parentNode;
    let elem = new DOMParser().parseFromString(data, "text/html").querySelector("topbar");
    parent.replaceChild(elem, old_elem);
}

function replace_footer(data){
    let old_elem = document.querySelector("replace#footer");
    let parent = old_elem.parentNode;
    let elem = new DOMParser().parseFromString(data, "text/html").querySelector("footer");
    parent.replaceChild(elem, old_elem);
}      

export default replace_content;
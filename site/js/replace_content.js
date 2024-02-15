function replace_content(){
  var el_type;
  if (document.querySelector("replace#sidebar") != null){
    el_type = "sb";
    fetch("sidebar.html").then(response => response.text()).then(data => replace(data, el_type));
  }
  if (document.querySelector("replace#topbar") != null){
    el_type = "tb";
    fetch("topbar.html").then(response => response.text()).then(data => replace(data, el_type));
  }
  if (document.querySelector("replace#footer") != null){
    el_type = "ft";
    fetch("footer.html").then(response => response.text()).then(data => replace(data, el_type));
  }
}

function replace(data, el_type){
  let old_elem, parent, elem;
  switch(el_type){
    case "sb":
      old_elem = document.querySelector("replace#sidebar");
      parent = old_elem.parentNode;
      parent.removeChild(old_elem);
      let elem_list = new DOMParser().parseFromString(data, "text/html").querySelectorAll("form#sidebar");
      for (let i = 0; i < elem_list.length; i++) {
        parent.appendChild(elem_list[i]);
      }
      break;
    case "tb":
      old_elem = document.querySelector("replace#topbar");
      parent = old_elem.parentNode;
      parent.removeChild(old_elem);
      elem = new DOMParser().parseFromString(data, "text/html").querySelector("topbar");
      parent.appendChild(elem);
      break;
    case "ft":
      old_elem = document.querySelector("replace#footer");
      parent = old_elem.parentNode;
      parent.removeChild(old_elem);
      elem = new DOMParser().parseFromString(data, "text/html").querySelector("footer");
      parent.appendChild(elem);
      break;
  } 
} 

replace_content();

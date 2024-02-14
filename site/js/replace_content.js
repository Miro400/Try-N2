function replace_content(){
  var el_type;
  if (document.querySelector("replace#sidebar") != null){
    el_type = "sb";
    fetch("sidebar.html").then(data => data.text).then(text => replace(text, el_type));
  }
}

function replace(text, el_type){
  switch(el_type){
    case "sb":
      let old_elem = document.querySelector("replace#sidebar");
      let parent = old_elem.parentNode;
      parent.removeChild(old_elem);
      let elem_list = new DOMParser().parseFromString(text, "text/html").querySelectorAll("*");
      for (let i = 0; i < elem_list.length; i++) {
        parent.appendChild(elem_list[i]);
      } 

      break;
    case "tb":

      break;
    case "ft":

      break;
  } 
} 

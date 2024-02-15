function replace_content(){
  var el_type;
  if (document.querySelector("replace#sidebar") != null){
    el_type = "sb";
    console.log("HAHAHAHHAHHHAHAHAHAHA");
    fetch("sidebar.html").then(response => response.text()).then(data => replace(data, el_type));
  }
}

function replace(data, el_type){
  switch(el_type){
    case "sb":
      let old_elem = document.querySelector("replace#sidebar");
      let parent = old_elem.parentNode;
      parent.removeChild(old_elem);
      let elem_list = new DOMParser().parseFromString(data, "text/html").querySelectorAll("form#sidebar");
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

replace_content();

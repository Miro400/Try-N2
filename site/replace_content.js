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
      let old_elem =
      break;
    case "tb":

      break;
    case "ft":

      break;
}

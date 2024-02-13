fetch("sidebar.html") 
.then((response) => response.text())
.then(replace_sidebar(data)).catch((err) => console.log(err));

function replace_sidebar(data) {
  let old_element = document.querySelector("script#sidebar_replace");
  let new_element = new DOMParser().parseFromString(data, "text/html").querySelectorAll("#sidebar");
  old_element.parentNode.replaceChild(new_element, old_element);
}

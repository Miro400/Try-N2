fetch("sidebar.html") 
.then((response) => response.text())
.then((data) => { let old_element = document.querySelector("script#sidebar_replace");
                   let new_element = new DOMParser().parseFromString(data, "text/html").querySelector("sidebar");
                   old_element.parentNode.replaceChild(new_element, old_element);
                  }).catch((err) => console.log(err));

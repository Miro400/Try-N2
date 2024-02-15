fetch("topbar.html") 
.then((response) => response.text())
.then((data) => { let old_element = document.querySelector("script#topbar_replace");
                  let new_element = new DOMParser().parseFromString(data, "text/html");//.querySelector("topbar");
                  console.log(new_element);
                   //old_element.parentNode.replaceChild(new_element, old_element);
                  }).catch((err) => console.log(err));

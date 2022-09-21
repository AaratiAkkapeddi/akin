

let archive_images = [
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00024.png",      
    "MISCELLANEOUS_M8_2015_00112.png",
    "MISCELLANEOUS_M8_2015_00017.png",                
    "MISCELLANEOUS_M8_2015_00135.png",
    "MISCELLANEOUS_M8_2015_00025.png",                 
    "MISCELLANEOUS_M8_2015_00137.png",
    "MISCELLANEOUS_M8_2015_00101.png"         
]
let ogtext = "<h1>Cluster 1</h1><p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.</p>"
let text = [
  "<h1>R DASEN STUDIO</h1><p>Karaikudi, Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>",
  "<h1>Unknown Studio</h1><p>Unknown location in Tamil Nadu</p>"
]
let loader = document.getElementById("loader")
for(let i = 0; i < archive_images.length; i ++){
    let img = document.createElement("img");
    img.src = "assets/1/"+archive_images[i];
    img.id = "id-"+i;
    let referenceNode = document.querySelector('#wrapper');
    dragElement(img);
    referenceNode.appendChild(img)
    if(i == archive_images.length - 1){
      img.onload = function(){
        loader.classList.remove('on');
      }
    }
}


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    e.target.classList.add('on')

    document.querySelector("#text").innerHTML = text[parseInt(e.target.id.split("-")[1])];
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    let els = document.querySelectorAll("#history img");
    for(let i = 0; i < els.length; i ++){
      els[i].classList.remove("on")
    }
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement(e) {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    e.target.classList.remove('on')
    let hist = document.querySelector("#history-icons");
    let newDiv = document.createElement("div");
    if(e.target.src){
      let newEl = document.createElement('img')
      let rest = e.target.src.substring(0, e.target.src.lastIndexOf("/") + 1);
      let last = e.target.src.substring(e.target.src.lastIndexOf("/") + 1, e.target.src.length);
      newEl.src = rest + "small/" + last
      newEl.id = "icon"+e.target.id
      hist.insertBefore(newEl,hist.firstChild)
      newEl.addEventListener("click", function(){
        if(this.classList.contains("on")){
          this.classList.remove("on")
          document.querySelector("#text").innerHTML = ogtext;
        }else{
          let els = document.querySelectorAll("#history img");
          for(let i = 0; i < els.length; i ++){
            els[i].classList.remove("on")
          }
          this.classList.add("on")
          document.querySelector("#text").innerHTML = text[parseInt(this.id.split("-")[1])];
        }
      })
      let label = document.querySelector("#hist-label");
      label.classList.add('on')
    }
    document.querySelector("#text").innerHTML = ogtext;
    e.target.classList.add('moved');
    let imgs = document.querySelectorAll("img");
    let count = 0;
    for(let i = 0; i < imgs.length; i ++){
        if(imgs[i].classList.contains("moved")){
            count = count + 1;
        }
    }
    if(count == imgs.length){
        document.querySelector("#over").classList.add('on')
    }
  }
}


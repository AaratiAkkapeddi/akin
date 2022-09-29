

let archive_images = [
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00011.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00012.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00021.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00040.png",
    "MADURAI_1A_VICTORIA STUDIO_2015_00008.png",
    "MADURAI_1A_VICTORIA STUDIO_2015_00028.png",
    "MISCELLANEOUS_M8_2015_00132.png",
    "MISCELLANEOUS_M8_2015_00150.png",
    "MISCELLANEOUS_M8_2015_00164.png",
    "MISCELLANEOUS_M9_2015_00185.png",
    "MISCELLANEOUS_M9_2015_00194.png",
    "MISCELLANEOUS_M9_2015_00195.png",
    "PATTUKKOTTAI_12A_THANGAM STUDIO_2016_00001.png",
    "THANJAVUR_13A_G MUTHUVEL STUDIO_2015_00001.png"
]
let ogtext = "<h1>Portrait of a seated woman.</h1><p>Composite of 13 photographs from R. Dasen Studio in Karaikudi, Victoria Studio in Madurai, Thangam Studio in Pattukkottai, Muthuvel Studio in Thanjavur, and other unidentified studios – all from the stars.archive.<br><br>“I have so many individual portraits of the men in my family but very few of my matriarchs, especially those that aren't ID photographs. A few of the photos in this cluster could actually be group photos that have been edited by studio photographers using a technique called vignetting.”</p>"
let text = [
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu.</p>",
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu.</p>",
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu.</p>",
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu.</p>",
    "<h1>Victoria Studio</h1><p>Maruai, Tamil Nadu</p>",
    "<h1>Victoria Studio</h1><p>Maruai, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Thangam Studio</h1><p>Pattukkottai, Tamil Nadu</p>",
    "<h1>Muthuvel Studio</h1><p>Thanjavur, Tamil Nadu</p>"
]

let loader = document.getElementById("loader")
for(let i = 0; i < archive_images.length; i ++){
    let img = document.createElement("img");
    img.src = "assets/4/"+archive_images[i];
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


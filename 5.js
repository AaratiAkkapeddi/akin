

let archive_images = [
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00032.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00043.png",
    "MADURAI_1A_TAMILNADU STUDIO_2015_00009.png",
    "MADURAI_1A_VICTORIA STUDIO_2015_00034.png",
    "MISCELLANEOUS_M8_2015_00009.png",
    "MISCELLANEOUS_M8_2015_00013.png",
    "MISCELLANEOUS_M8_2015_00060.png",
    "MISCELLANEOUS_M8_2015_00106.png",
    "MISCELLANEOUS_M8_2015_00121.png",
    "MISCELLANEOUS_M8_2015_00138.png",
    "MISCELLANEOUS_M8_2015_00176.png",
    "PONDICHERRY_17A_LEO PHOTO WORKS STUDIO_2016_00001.png",
    "TIRUPPUR_14A_J B MAHADEV BROS STUDIO_2015_00001.png",
    "image47.png"
]
let ogtext = "<h1>Family portrait with a young child in the centre.</h1><p>Composite of 14 photographs, 13 of them from the stars.archive and one from the artist’s family albums. Images included from R. Dasen Studio in Karaikudi, Victoria Studio and Tamilnadu Studio in Madurai, Leo Photo Works Studio in Pondicherry, Guhan Studio in Chennai and Mahadev Bros Studio in Tiruppur as well as unidentified sources.<br><br>“Many family portraits in the stars.archive feature the youngest child in the centre of the group. Children also show specific traditions and rituals such as head shaving or applying கண்மை which in Tamil means eyeliner, or a dot to the side of the face to ward off the evil eye.“</p>"
let text = [
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu</p>",
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu</p>",
    "<h1>Tamilnadu Studio</h1><p>Madurai, Tamil Nadu<br><br>On the lower left side of the little girl's face you can see a mark made with kajal (கண்மை). This mark is to ward off evil eye.</p>",
    "<h1>Victoria Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu<br><br>It was mentioned to me by a family member in the context of viewing a different photo that some babies might not have been clothed in photographs in order to show that they were male. </p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu<br><br>On the lower left side of the child's face you can see a mark made with kajal (கண்மை). This mark is to ward off evil eye.</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Leo Photo Works Studio</h1><p>Pondicherry/Puducherry</p>",
    "<h1>Mahadev Bros Studio</h1><p>Tiruppur, Tamil Nadu</p>",
    "<h1>Guhan Photo Studio</h1><p>Chennai, Tamil Nadu.<br><br>This is a photograph of my mother's family (Ramji Rao Ramavarapu, Seetharam Ramavarapu, Sreenivas Ramavarapu, Suseela Ramavarapu neé Vyasarayani and Sudha Akkapeddi) probably taken sometime in the early 1970s because my grandfather was about to leave to work in Geneva, Switzerland for a year or so.</p>"
]

let loader = document.getElementById("loader")
for(let i = 0; i < archive_images.length; i ++){
    let img = document.createElement("img");
    img.src = "assets/5/"+archive_images[i];
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


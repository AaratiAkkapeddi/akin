

let archive_images = [
    "COIMBATORE_9A_R DASEN STUDIO_2016_00003.png",
    "COIMBATORE_9A_R DASEN STUDIO_2016_00004.png",
    "ERODE_11A_BALU ART STUDIO_2015_00001.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00028.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00029.png",
    "MADURAI_1A_TAMILNADU STUDIO_2015_00022.png",
    "MADURAI_1D_NEW STUDIO_2015_00008.png",
    "MISCELLANEOUS_M8_2015_00011.png",
    "MISCELLANEOUS_M8_2015_00035.png",
    "MISCELLANEOUS_M8_2015_00059.png",
    "MISCELLANEOUS_M8_2015_00062.png",
    "MISCELLANEOUS_M8_2015_00071.png",
    "MISCELLANEOUS_M8_2015_00087.png",
    "POLLACHI_12A_RAJUs ELECTRICI STUDIO_2015_00001.png",
    "THENI_13A_NAVAJEEVEN STUDIO_2015_00001.png",
    "THOOTHUKUDI_14A_IMERIAL STUDIO_2015_00001.png",
    "image106.png",
    "image107.png"
]
let ogtext = "<h1>Close-up portrait of a couple where the woman is on the left-hand side of the image.</h1><p>Composite of 18 photographs from R. Dasen Studio and Sundram Studio in Karaikudi, Tamilnadu Studio and Victoria Studio in Madurai,The City Photo Works Studio in Pondicherry, Natarajan Photo Studio in Villupuram and other unidentified studios. One of the images is from the artist's family archive, the rest are from stars.archive.<br><br>“In my own family album, photographs of weddings or of couples shortly after marriage are probably the most common archetype. It makes me think of the cultural and financial significance placed on marriage. In the stars.archive I noticed many images of what appear to be portraits of married couples. I'm also interested in whether the wife is on the husband's left or right. Anecdotally, my grandmother mentioned to me that in Tamil, ‘இடம் means left. இடம் also means place. So, if you give இடம் to your wife, she will take your place.’  However, despite this, I did see a few photographs with wives to the left of their husbands. In these close-up portraits, you can also really see details like nose rings, flowers, textile patterns, ties, or the presence/absence of a bindi.”</p>"
let text = [
    "<h1>R. Dasen Studio</h1><p>Coimbatore, Tamil Nadu</p>",
    "<h1>R. Dasen Studio</h1><p>Coimbatore, Tamil Nadu</p>",
    "<h1>Balu Art Studio</h1><p>Erode, Tamil Nadu.</p>",
    "<h1>R. Dasen Studio</h1><p>Coimbatore, Tamil Nadu</p>",
    "<h1>R. Dasen Studio</h1><p>Coimbatore, Tamil Nadu</p>",
    "<h1>Tamilnadu Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>New Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Raju's Electric Studio</h1><p>Pollachi, Tamil Nadu</p>",
    "<h1>Navajeevan Studio</h1><p>Theni, Tamil Nadu</p>",
    "<h1>Imperial Studio</h1><p>Thoothukudi, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown Location<br><br>This is my maternal grandmother's brother, Sreenivasarao Vyasarayani and his wife, Indhira.</p>",
    "<h1>Unknown Studio</h1><p>Unknown Location<br><br>This is my maternal grandfather's brother Venu Gopala Rao and his wife Jaya Lakshmi.</p>",
]

let loader = document.getElementById("loader")
for(let i = 0; i < archive_images.length; i ++){
    let img = document.createElement("img");
    img.src = "assets/10/"+archive_images[i];
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


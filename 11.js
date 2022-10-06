

let archive_images = [
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00003.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00004.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00027.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00030.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00037.png",
    "KARAIKUDI_3A_SUNDRAM STUDIO_2015_00003.png",
    "MADURAI_1A_TAMILNADU STUDIO_2015_00007.png",
    "MADURAI_1A_VICTORIA STUDIO_2015_00018.png",
    "MISCELLANEOUS_M8_2015_00050.png",
    "MISCELLANEOUS_M8_2015_00077.png",
    "MISCELLANEOUS_M8_2015_00078.png",
    "PONDICHERRY_17A_THE CITY PHOTO STUDIO_2016_00006.png",
    "Scan_59.png",
    "VILLUPURAM_14A_NATARAJAN PHOTO STUDIO_2015_00001.png"
]
let ogtext = "<h1>Close-up portrait of a couple where the woman is on the right-hand side of the image.</h1><p>Composite of 14 photographs from R. Dasen Studio in Karaikudi, Balu Art Studio in Erode, Tamilnadu Studio and New Studio in Madurai, Raju's Electric Studio in Pollachi, Navajeevan Studio in Theni, Imperial Studio in Thoothukudi and other unidentified studios. Two of the images are from the artist's family archive, the rest are from stars.archive.“In my own family album, photographs of weddings or of couples shortly after marriage are probably the most common archetype. It makes me think of the cultural and financial significance placed on marriage. In the stars.archive I noticed many images of what appear to be portraits of married couples. I'm also interested in whether the wife is on the husband's left or right. Anecdotally, my grandmother mentioned to me that in Tamil, ‘இடம் means left. இடம் also means place. So, if you give இடம் to your wife, she will take your place.’  However, despite this, in all these photographs, wives are to the left of their husbands. In these close-up portraits, you can also really see details like nose rings, flowers, textile patterns, ties, or the presence/absence of a bindi.”</p>"
let text = [
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu</p>",
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu<br><br>Many Hindu women wear a particular type of necklace after marriage. The pendant varies depending on which region or caste you are from.</p>",
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu<br><br>Many Hindu women wear a particular type of necklace after marriage. The pendant varies depending on which region or caste you are from.</p>",
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu</p>",
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu<br><br>Many Hindu women wear a particular type of necklace after marriage. The pendant varies depending on which region or caste you are from.</p>",
    "<h1>Sundram Studio</h1><p>Karaikudi, Tamil Nadu</p>",
    "<h1>Tamilnadu Studio</h1><p>Madurai, Tamil Nadu<br><br>Many Hindu women wear a particular type of necklace after marriage. The pendant varies depending on which region or caste you are from. </p>",
    "<h1>Victioria Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu<br><br>This image looks like it maybe was created using a technique called vignetting where black or white paper is cut around a subject to isolate them and then a new print is made.</p>",
    "<h1>The City Photo Studio</h1><p>Pondicherry/Puducherry</p>",
    "<h1>Unknown Studio</h1><p>This is an image of my maternal granmother's sister, Padmavathi Indhurthi (neé Vyasarayani) and her husband, Venugopala Rao Indhurthi.</p>",
    "<h1>Natarajan Photo Studio</h1><p>Villupuram, Tamil Nadu<br><br>This seems to have been overpainted slightly on the lips, jewelry, and bottu or bindi.</p>",
]

let loader = document.getElementById("loader")
for(let i = 0; i < archive_images.length; i ++){
    let img = document.createElement("img");
    img.src = "assets/11/"+archive_images[i];
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


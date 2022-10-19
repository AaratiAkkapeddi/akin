

let archive_images = [
    "MADURAI_1D_NEW STUDIO_2015_00016.png",
    "MISCELLANEOUS_M8_2015_00014.png",
    "MISCELLANEOUS_M8_2015_00140.png",
    "PATTUKKOTTAI_12A_SRI DEVI STUDIO_2015_00001.png",
    "VILLUPURAM_14A_CHITRA STUDIO_2015_00001.png"
]
let ogtext = "<h1>Women posing with a mirror to show off their elaborate hair braiding and flowers.</h1><p>Composite of 5 photographs, all from the stars.archive. Images made in New Studio in Madurai, Sri Devi Studio in Pattukkottai and Chitra Studio in Villupuram are featured with others from unidentified sources.<br><br>“My mother was too young in many of the studio photographs to remember the experience. But she did recall having flowers stitched into her hair before having a photo taken with her cousins. I was particularly intrigued by images in the stars.archive where a mirror was used to also show the back view of the women's hair in the portrait.”</p>"
let text = [
    "<h1>Women posing with a mirror to show off their elaborate hair braiding and flowers.</h1><p>Composite of 5 photographs, all from the stars.archive. Images made in New Studio in Madurai, Sri Devi Studio in Pattukkottai and Chitra Studio in Villupuram are featured with others from unidentified sources.<br><br>“My mother was too young in many of the studio photographs to remember the experience. But she did recall having flowers stitched into her hair before having a photo taken with her cousins. I was particularly intrigued by images in the stars.archive where a mirror was used to also show the back view of the women's hair in the portrait.”</p><h1>New Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Women posing with a mirror to show off their elaborate hair braiding and flowers.</h1><p>Composite of 5 photographs, all from the stars.archive. Images made in New Studio in Madurai, Sri Devi Studio in Pattukkottai and Chitra Studio in Villupuram are featured with others from unidentified sources.<br><br>“My mother was too young in many of the studio photographs to remember the experience. But she did recall having flowers stitched into her hair before having a photo taken with her cousins. I was particularly intrigued by images in the stars.archive where a mirror was used to also show the back view of the women's hair in the portrait.”</p><h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Women posing with a mirror to show off their elaborate hair braiding and flowers.</h1><p>Composite of 5 photographs, all from the stars.archive. Images made in New Studio in Madurai, Sri Devi Studio in Pattukkottai and Chitra Studio in Villupuram are featured with others from unidentified sources.<br><br>“My mother was too young in many of the studio photographs to remember the experience. But she did recall having flowers stitched into her hair before having a photo taken with her cousins. I was particularly intrigued by images in the stars.archive where a mirror was used to also show the back view of the women's hair in the portrait.”</p><h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Women posing with a mirror to show off their elaborate hair braiding and flowers.</h1><p>Composite of 5 photographs, all from the stars.archive. Images made in New Studio in Madurai, Sri Devi Studio in Pattukkottai and Chitra Studio in Villupuram are featured with others from unidentified sources.<br><br>“My mother was too young in many of the studio photographs to remember the experience. But she did recall having flowers stitched into her hair before having a photo taken with her cousins. I was particularly intrigued by images in the stars.archive where a mirror was used to also show the back view of the women's hair in the portrait.”</p><h1>Sri Devi Studio</h1><p>Pattukkottai, Tamil Nadu</p>",
    "<h1>Women posing with a mirror to show off their elaborate hair braiding and flowers.</h1><p>Composite of 5 photographs, all from the stars.archive. Images made in New Studio in Madurai, Sri Devi Studio in Pattukkottai and Chitra Studio in Villupuram are featured with others from unidentified sources.<br><br>“My mother was too young in many of the studio photographs to remember the experience. But she did recall having flowers stitched into her hair before having a photo taken with her cousins. I was particularly intrigued by images in the stars.archive where a mirror was used to also show the back view of the women's hair in the portrait.”</p><h1>Chitra Studio</h1><p>Villupuram, Tamil Nadu</p>"
]

let loader = document.getElementById("loader")
for(let i = 0; i < archive_images.length; i ++){
    let img = document.createElement("img");
    img.src = "assets/6/"+archive_images[i];
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
  var clicked = false;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    if(clicked){
      closeDragElement(e);
    }else{
      clicked = true;
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      e.target.classList.add('on')

      document.querySelector("#text").innerHTML = text[parseInt(e.target.id.split("-")[1])];
      
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag; 
    }
  
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


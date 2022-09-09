

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
let ogtext = "<h1>Cluster 1</h1><p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.</p>"
let text = [
    "<h1>Lorem 2</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 3</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 4</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 5</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 6</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 7</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 8</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 9</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 6</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 7</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 8</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 9</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 10</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 10</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 11</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 12</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 13</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 14</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "<h1>Lorem 15</h1><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>"
]

for(let i = 0; i < archive_images.length; i ++){
    let img = document.createElement("img");
    img.src = "assets/4/"+archive_images[i];
    img.id = "id-"+i;
    let referenceNode = document.querySelector('#wrapper');
    dragElement(img);
    referenceNode.appendChild(img)
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
      elmnt.ontouchstart = dragMouseDown;
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
      document.ontouchend = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      document.ontouchmove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
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
      document.ontouchend = null;
      document.onmousemove = null;
      document.ontouchmove = null;
      e.target.classList.remove('on')
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
  
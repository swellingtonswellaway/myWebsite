/*
window.onscroll = function() {scroll()};

const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

function scroll() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
*/

//pop up //

function myFunction() {
  let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


// change Picture //

let imageTracker = 'imgInterests';
function change() {
  let image = document.getElementById('yoga');
  if(imageTracker === 'imgInterests') {
    image.src = 'images/intereststext.jpg';
    imageTracker = 'imgInterestsText'
  } else {
    image.src = 'images/interests.jpg';
    imageTracker = 'imgInterests';
  }
}

/*let imageTracker = 'imgRainbow';
function change() {
  let image = document.getElementById('rainbow');
  if(imageTracker === 'imgRainbow') {
    image.src = 'images/interests/rainbowtext.jpg';
    imageTracker = 'imgRainbowText'
  } else {
    image.src = 'images/interests/foodrainbow.jpg';
    imageTracker = 'imgRainbow';
  }

}
This doesn't work. Why? What am I messing up?
*/

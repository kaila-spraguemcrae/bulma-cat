const myHeading = document.querySelector('h1');
myHeading.textContent = 'BULMA CAT';

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bulma-face.jpg') {
      myImage.setAttribute ('src','images/bulma-beauty.jpg');
    } else {
      myImage.setAttribute ('src','images/bulma-face.jpg');
    }
}

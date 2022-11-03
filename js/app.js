const search = document.getElementById("search");
let images = document.querySelectorAll("a[data-caption]");

window.addEventListener('load', function() {
  baguetteBox.run('.gallery');
  titleTag = true;
});
//const search = new Filter('search', 'data-caption');
search.addEventListener("keyup", e=>{
  images.forEach(image=>{
      if(image.getAttribute("data-caption").toLowerCase().includes(e.target.value.toLowerCase())){
        image.style.display="block";
      }else{
        image.style.display="none";
      }
  })
})
///////////////////////////////////////////////////////////////////////////
const allImages = document.querySelectorAll("img");
// allImages.style.animation= `fadeIn 3s .2s ease forwards`;
// // console.log(delayRandom);
allImages.forEach( img=>{
    let delayRandom = Math.floor(Math.random()*1000)
    // console.log(delayRandom);
    img.style.animation= `fadeIn 3s .2s ease forwards`;
});


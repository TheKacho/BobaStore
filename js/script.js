//This part of the script uses Slick to convert the images into a horizontal carousel gallery with 
//$('.gallery').slick();

// note that this will enable the previous and next buttons, as when the user clicks on either button, it will switch over to the 
// next image. Swiping does work too


var images = document.getElementsByClassName('img-responsive');
var currentImageIndex = 0; //it will start at the first image
UpdateImages();

function IncrementGallery(){ //this will increase the value by 1, thus changing the image to the next one on the list
    if(currentImageIndex == images.length - 1){
        currentImageIndex = 0;
    }
    else currentImageIndex++;
    UpdateImages();
}

function DecrementGallery(){ //alternatively, this will decrease the value by 1, going backwards on the list of images
    if(currentImageIndex == 0){
        currentImageIndex = images.length - 1;
    }
    else currentImageIndex--;
    UpdateImages();
}

function UpdateImages(){
    for(let i = 0; i < images.length; i++){
        images[i].style.display = 'none';
    }
    images[currentImageIndex].style.display = 'block';
}
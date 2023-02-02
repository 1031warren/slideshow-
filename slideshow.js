window.onload = initLinks;

var thePic = 0;
var arrayMyPix = new Array("universe image 1.jpg", "universe image 2.jpg", "universe image 3.jpg", "universe image 4.jpg");

function initLinks(){
   document.getElementById("prevLink").onclick = processPrevious;
   document.getElementById("nextLink").onclick = processNext;

}

function processPrevious(){
    if(thePic == 0){
        thePic = arrayMyPix.length;

    }
    thePic--;
    document.getElementById("myPicture").src = arrayMyPix[thePic];
    return false;




}

function processNext(){
    thePic++;
    if(thePic == arrayMyPix.length){
        thePic = 0;
    }
        document.getElementById("myPicture").src = arrayMyPix[thePic];
        return false;




}




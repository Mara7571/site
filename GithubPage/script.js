const imageURL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let images = 5; 
let currentPosition = 1;
let directionRight = true;

function changeIMG (){
    for (let i = 0; i < images; i++) {
        if (currentPosition + i >= imageURL.length) {
            console.log(currentPosition + i - imageURL.length);
            document.images[i].src = `./img/img${imageURL[currentPosition + i - imageURL.length] }.jpg`;
        } else {
            console.log(currentPosition + i);
            document.images[i].src = `./img/img${imageURL[currentPosition + i]}.jpg`;
        }
    }
}

function loadLeft() {
    if (currentPosition == 0){
        currentPosition = 12;
    } else {
        currentPosition--;
    }
    changeIMG();
}

function loadRight() {
    if (currentPosition == 12){
        currentPosition = 1;
    } else {
        currentPosition++;
    }
    console.log(currentPosition)
    changeIMG();
}

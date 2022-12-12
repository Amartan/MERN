var ImgArray = [
    "./pic/grey.jpeg",
    "./pic/red.jpeg",
    "./pic/teal.jpeg",
    "./pic/yellow.jpeg",
];

function ChangeImg(imgPtr) {
    document.getElementById('CommonImg').src = ImgArray[imgPtr];
//    document.getElementById('CommonImg').alt = ImgArray[imgPtr]; // optional comment
}
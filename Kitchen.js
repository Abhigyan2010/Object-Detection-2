var status="";
function preload(){
    loadImage("Kitchen.jpg");
}
function setup(){
    canvas=createCanvas(350,400);
    canvas.center();
    objectDetector = ml5.ObjectDetector('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML="Detecting Objects..."
}
function modelLoaded() {
    console.log('Model Loaded!');
    status=true;
    objectDetector.detect(error, results);{
        console.log(results);
    }
}
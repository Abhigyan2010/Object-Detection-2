status="";
results=[];
function preload(){
    loadImage("Almirah.jpg");
}
function setup(){
    canvas=createCanvas(350,400);
    canvas.center();
    objectDetector = ml5.ObjectDetector('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML="Detecting Objects..."
}
function modelLoaded(){
    console.log('Model Loaded!');
    status=true;
    objectDetector.detect(error, gotResult);
}
function gotResult(){
    console.log(results);
}
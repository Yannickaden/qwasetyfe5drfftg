//teachablemachine.withgoogle.com/models/fcKke5Gut/
prediction1="";


Webcam.set({
    width:351,
    height:301,
    image_format:'png',
    png_quality:89
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="' +data_uri+'">'
    });
}
function speak(){
    var synth=window.speechSynthesis;
    speakData1="first prediction is"+prediction1;
    var utterthis=new SpeechSynthesisUtterance(speakData1+speakData2);
    synth.speak(utterthis);
}

console.log("ml5 version",ml5.version);
ml5.imageClassifier("teachablemachine.withgoogle.com/models/fcKke5Gut/model.json",modelLoaded);

function modelLoaded(){
console.log("model loaded");
}

function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result").innerHTML=results[0].label;
        prediction1=results[0].label;
        speak();
if(results[0].label=="happy"){
document.getElementById("updatePending").innerHTML="&#128522;";
}
if(results[0].label=="sad"){
document.getElementById("updatePending").innerHTML="&#128532;";
}
if(results[0].label=="angry"){
document.getElementById("updatePending").innerHTML="&#128548;";
}


    }
}













var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run (event){
    console.log(event);
     var Content = event.results[0][0].transcript; 
     console.log(Content);
     speak();
document.getElementById("textbox").innerHTML=Content;
}

function speak(){
	var synth = window.speechSynthesis;

	speak_data = document.getElementById("textbox").value;

	var utterThis = new SpeechSynthesisUtterance(speak_data);
	synth.speak(utterThis);
	Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    imageformat:'png',
    png_quality:90
});

camera = document.getElementById("camera");


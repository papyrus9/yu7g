Webcam.set({
    width:300,
    height:300,
    image_format:"jpg",jpg_quality:90
})
camera=document.getElementById("a2");
Webcam.attach(camera);
function a3() { Webcam.snap(function(data_uri)     
    {
     document.getElementById("a4").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; }); }
   

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qbNr2_ADH/model.json', cuyo);
function cuyo(){
  console.log("te faltan cosas para entrar a la guerra") ;
}

function a5(){
huh= document.getElementById("captured_image");
classifier.classify(huh, resultado)
}
function resultado(error,results){
if(error){
  console.log(error);
}
else{
  document.getElementById("w").innerHTML=results[0].label;
  document.getElementById("e").innerHTML=results[0].confidence;
  
}
}
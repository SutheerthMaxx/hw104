Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 100
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function clickk()
{
    Webcam.snap(function(data_uri){
    document.getElementById("answer").innerHTML = '<img id="capturedd_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version" , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/j4zUw22Hy/",modelloaded);
function modelloaded()
{
    console.log("model is loaded");
}
Webcam.set(
{
    width:600,
    height:400,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera")

Webcam.attach(camera);

function snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML = '<img id="image_result" src="'+data_uri+'">';
    })
}

console.log("The version is:", ml5.version);

Classify = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RloD-OsIo/model.json', modelLoaded);

function modelLoaded()
{
    console.log('The model has been loaded :D');
}

function identify()
{
    image = document.getElementById("image_result");
    Classify.classify(image, gotResult);
}

function gotResult(error, result)
{
    if (error) 
    {
        console.error(error);
    }
    else
    {
        console.log(result);
        document.getElementById("object_result").innerHTML = result[0].label;
        document.getElementById("accuracy_result").innerHTML = result[0].confidence.toFixed(2);
    }
}
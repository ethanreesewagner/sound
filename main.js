function change(first,second,third,fourth,fifth){
    document.getElementById("one").src=first;
    document.getElementById("two").src=second;
    document.getElementById("three").src=third;
    document.getElementById("four").src=fourth;
    document.getElementById("five").src=fifth;
}
function identify(){
    var options = { probabilityThreshold: 0.7 };
    var classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/p3evGbRvi/model.json', options, modelReady);
    function modelReady() {
        classifier.classify(gotResult);
    } 
    function gotResult(error, result) {
        if (error) {
            console.log(error);
            document.write("<h1>Your browser doesen't work with the microphone. Check your browser settings.</h1>");
            return;
        }
        console.log(result);
        sound=result[0]['label'];
        document.getElementById('sound').innerHTML='Sound: '+result[0]['label'];
        document.getElementById('accuracy').innerHTML='Accuracy: '+Math.trunc(result[0]['confidence']*100)+'%';
        if(sound=='Background Noise'){
            change("clap.jpg","dance.jpg","paper.jpg","stranger.jpg","sound.gif");
        }
        if(sound=='Clap'){
            change("clapping.gif","dance.jpg","paper.jpg","stranger.jpg","noise.jpg");
        }
        if(sound=='Stranger Things'){
            change("clap.jpg","dance.jpg","paper.jpg","strangerthings.gif","noise.jpg");
        }
        if(sound=='Never Gonna Give You Up'){
            change("clap.jpg","rickroll.gif","paper.jpg","stranger.jpg","noise.jpg");
        }
        if(sound=='Ripping Paper'){
            change("clap.jpg","dance.jpg","rippingpaper.gif","stranger.jpg","noise.jpg");
        }
    }
}
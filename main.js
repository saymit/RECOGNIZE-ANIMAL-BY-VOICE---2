function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hDEXzznob/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
console.log("We have got result");
}
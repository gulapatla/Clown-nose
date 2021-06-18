noseX=0;
noseY=0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/qRdNXRcR/clown-nose.jpg');
}
function setup(){
canvas = createCanvas(300, 300);
canvas.center;
video = createCapture("VIDEO");
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 300, 300); 
circle(noseX, noseY, 20);
fill(225,0,0);
stroke(225,0,0);



}
function take_snapshot(){
    save('MyFilterImage.png');
}
function modelLoaded() {
    console.log('PoseNet is Initialized');
    poseNet.on('pose', gotPoses);

}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
        noseX = results[0].pose.nose.x ;
        noseY = results[0].pose.nose.y ;
    
        
    }
}
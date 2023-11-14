song=""
leftwrist_x=0
leftwrist_y=0
rightwrist_x=0
rightwrist_y=0
function preload(){
    song=loadSound("music.mp3")
}
function setup(){
    canvas=createCanvas(550,550)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotposes)
}
function draw(){
    image(video,0,0,550,550)
}
function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function modelloaded(){
    console.log("posenetisinitialized")
}
function gotposes(results){
    if (results.length>0) {
        console.log(results)
        leftwrist_x=results[0].pose.leftwrist.x
        leftwrist_y=results[0].pose.leftwrist.y
        rightwrist_x=results[0].pose.rightwrist.x
        rightwrist_y=results[0].pose.rightwrist.y
        console.log(leftwrist_x,leftwrist_y,rightwrist_x,rightwrist_y)
    }
}
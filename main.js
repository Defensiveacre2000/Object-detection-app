img ="";
status = "";
objects = [];
function setup()
{
canvas = createCanvas(640 , 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
//function setup ends here
function modelLoaded()
{
console.log("modelLoaded");
status = true;
objectDetector.detect(img , gotResult);
}
//function ModelLoaded ends here
function gotResult(error , results)
{
if(error)
{
console.log(error);
}
//if ends here
console.log(results);
objects = results;
}
//function got result ends here
function preload()
{
img = loadImage('dog_cat.jpg');
}
//function preload ends here
function draw()
{
image(img , 0 , 0 , 640 , 420);
if(status != "")
{
for(i = 0; i < objects.lenght; i++)
{
document.getElementById("Status").innerHTML = "Staus : Object Detected";
fill("#2439f2");
P = floor(object[i].confidence * 100);
text(objects[i].label + "" + P + "%" , objects[i].x + 15 , objects[i].y +15);
noFill();
stroke("#f50a0a");
rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
}
//for loop ends here
}
//if condition ends here
}
//function draw ends here (Last function!!)
var capture;
var overlay; 

function setup() {

	background(100);

	capture =  createCapture({
			    audio: false,
			    video: {
			      facingMode: "user"
			    }
 				});
	createCanvas(capture.width , capture.height);

}

function draw() {
	image(capture , 0 , 0, capture.width , capture.height);
}
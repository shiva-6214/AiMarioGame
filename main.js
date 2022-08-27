

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	jump_sound = loadSound("jump.wav");
	coin_sound = loadSound("coin.wav");
	kick_sound = loadSound("kick.wav");
	die_sound = loadSound("mariodie.wave");
	gameover_sound = loadSound("gameover.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
	game();
}

function modelLoaded() {
	console.log("Model Loaded");
	
}

function gotPoses(result) {
	if(result.length > 0) {
		noseX = result[0].pose.nose.x;
		noseY = result[0].pose.nose.y;
	}
}







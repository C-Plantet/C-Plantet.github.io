let clock =0;
var canvas = document.getElementById("canvas");
var contour = canvas.getContext('2d');
var context = canvas.getContext('2d');
const objectsInGame = new Array();
var nbFinished = 0;

var timer = setInterval(mainloop,10);


class Rect{

    constructor(context,width, height,x,y,speed, numberOfFrames, delay){
        this.context=context;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.speed=speed;
        this.numberOfFrames=numberOfFrames;
        this.frameIndex=0;
        this.delay=delay;
        this.hasStarted=false;
        this.hasFinished= false;
    }

    clear(){
        this.context.clearRect(this.x,this.y,this.width,this.height);
    }

    update(){
        if((this.hasStarted == false) && (this.delay<clock)){
            console.log("starting");
            this.hasStarted=true;
        }
    
    
        if( (this.hasStarted == true) && (clock%this.speed == 0)){
            if (this.x < 550) {	
                this.x += 1;
            }
            this.hasFinished = true;
        }
    }

    draw(){

        context.fillRect(this.x,this.y,this.width,this.height)
        contour.fillStyle = "red";
        contour.strokeRect(0,0,600,600);

    }

}

const rect1 = new Rect(context,50,50,0,50,1,10,0);
const rect2 = new Rect(context,50,50,0,120,1,10,100);
const rect3 = new Rect(context,50,50,0,190,1,10,400);


objectsInGame.push(rect1);
objectsInGame.push(rect2);
objectsInGame.push(rect3);


function updateGame(){
    clock += 1;
	objectsInGame.forEach(element => element.update());
}

function clearGame(){
    objectsInGame.forEach(element => element.clear());
}

function drawGame(){
    objectsInGame.forEach(element => element.draw());
}

function mainloop(){
    
    clearGame();
    updateGame();
    drawGame();
    finished();
};

function finished(){
    for (let i = 0; i < objectsInGame.length; i++){
        if(hasFinished==true){
            nbFinished++;
        }
    }
    end(nbFinished);
}

function end(){
    if(nbFinished == objectsInGame.length){
        clearInterval();
    }
    else{
        nbFinished = 0;
    }


}





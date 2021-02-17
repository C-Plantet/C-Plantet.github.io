var timer = setInterval(sent(),1000);
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function sent(){

    if(window.Worker){
        var monWorker = new Worker("worker.js");
        monWorker.postMessage("");
        console.log('Message envoyé au worker');

        monWorker.onmessage = function(e) {
            result.textContent = e.data;
            console.log('Message received from worker');
            var x = result.textContent.x;
            var y = result.textContent.y;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.stroke(); 
        }
        
    }

}

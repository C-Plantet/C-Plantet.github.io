

onmessage = function(e) {
    console.log('Message reçu depuis le script principal.');
    var x = Math.random()*1000;
    var y = Math.random()*1000;
    var coord = {
        x: x,
        y: y
    }
    var workerResult = coord;
    console.log('Envoi du message de retour au script principal');
    postMessage(workerResult);
  }



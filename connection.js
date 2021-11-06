/**
 * Script de la page d'inscription du site Deezify
 */

var t_f=null;

function image(t){
	var canvas = document.getElementById("image");
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("photo");
	ctx.drawImage(img, 0, 0);
}	


function focusHint(t){
	
	if (t.value==t.defaultValue){
		
		if(t.id == "mdp"){
			t.type = "password";	
		}
		
		t.value='';
	}
	
	if (document.selection && document.selection.clear) {
			document.selection.clear();
		}
}

function blurHint(t){
	if (t.value=='') {
		if(t.id == "mdp"){
			t.type = "text";	
		}
		t.value=t.defaultValue;
		t.style.color = '#333333'; 
	}
}

function resize(t){
	t.width=1930
	t.height=1300
}

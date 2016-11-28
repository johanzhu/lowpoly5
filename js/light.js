var day = document.getElementById('day');
var night = document.getElementById('night');
var box = document.getElementById('box');
day.onclick = function(){
	box.style.marginTop = "-100px";
	new TWEEN.Tween(directionalLight).to({intensity:0.9},2000).start();
	new TWEEN.Tween(pointLight).to({intensity:0},2000).start();
}
night.onclick = function(){
	box.style.marginTop = "0";
	new TWEEN.Tween(directionalLight).to({intensity:0.2},2000).start();
	new TWEEN.Tween(pointLight).to({intensity:0.8},2000).start();
}

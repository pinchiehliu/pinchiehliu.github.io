function switchOneTwo(){
	var bg1= document.getElementById('item1').style.backgroundColor;
	var bg2= document.getElementById('item2').style.backgroundColor;
}

function switchTwoThree(){
	var
}

window.onload = function(){
	var em = document.getElementById('switch12');
	em.addEventListener('click', switchOneTwo);
	em = document.getElementById('switch23');
	em.addEventListener('click', changeTwoThree);
	
}
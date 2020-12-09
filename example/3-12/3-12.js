function mouseEventMsg(){
	alert('Mouse Event!');
}
window.onload = function(){
	var em = document.querySelector('body');
	em.addEventListener('click', function(){
		alert('Clicked!');
		});
	em.addEventListener('mouseenter', mouseEventMsg);
	em.addEventListener('mouseleave', mouseEventMsg);
	em.removeEventListener('mouseleave');
};
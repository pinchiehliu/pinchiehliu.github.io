window.onload = function(){
	var profile = {
		name: 'Pinchieh Liu',
		age: 21,
		height: 160
	};
	for(var key in profile){
		console.log(key);
		console.log(profile[key]);
		console.log(profile.key); //Doesn't work!

	}
};
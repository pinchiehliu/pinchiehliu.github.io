var name= 'Pinchieh Liu';
var age= 21;
var affiliation='NTHU';

var profile={
	name: 'Pinchieh Liu', 
	age: 21,
	affiliation: 'NTHU',
	height: 158,
	weight: 50,
	/*homePhone: 25888258,
	mobilePhone:[9123456789, 978563123, 928913482]*/
	contact: {
		home: 25888258,
		mobile: [9123456789, 978563123, 928913482]
	}
};
console. log(profile. name);
console. log(profile['name']);

profile.gender="female";

console.log(profile.gender);

console.log(profile.contact.home);

console.log(profile.contact.mobile[1]);

console.log(name.length);

console.log(profile.contact.mobile.length);
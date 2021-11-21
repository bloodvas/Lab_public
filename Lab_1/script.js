const button = document.getElementById('button');
function culc(){
	let A = Number(document.getElementById('A').value);
	let B = Number(document.getElementById('B').value);
	let C = Number(document.getElementById('C').value);

	let result = A+B+C;
	alert(result);
}
button.addEventListener("submit", culc());

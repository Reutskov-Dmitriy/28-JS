function calculateAreaCircle(){
	const PI = 3.14;
	let radiusCircle;
	radiusCircle = document.getElementById("area").value;
	// alert(`Area of a circle = ${PI * radiusCircle**2}`);
	document.getElementById("area").innerHTML = `Area of a circle = ${PI * radiusCircle**2}`;

}

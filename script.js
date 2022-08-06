

function calculateAreaCircle() {
	let radiusCircle;
	radiusCircle = document.getElementById("radius").value;
	document.getElementById("area").innerHTML = `Area of a circle = ${Math.round(Math.PI * (+radiusCircle) ** 2)}`;

}

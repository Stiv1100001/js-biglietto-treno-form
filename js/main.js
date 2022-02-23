function calcPrice(event) {
	event.preventDefault();

	const form = document.querySelector('form');
	const km = document.getElementById('km').value;
	const age = document.getElementById('age');
	const name = document.getElementById('name').value;

	if (!form.reportValidity()) return;

	const partialAmount = km * 0.27;
	let totalAmount;

	const selectedAge = age.options[age.selectedIndex].value;
	const selectedAgeText = age.options[age.selectedIndex].text;

	if (selectedAge === 'minorenne') {
		totalAmount = partialAmount - partialAmount * 0.17;
	} else if (selectedAge === 'over65') {
		totalAmount = partialAmount - partialAmount * 0.33;
	} else {
		totalAmount = partialAmount;
	}

	const result = totalAmount.toFixed(2);

	document.getElementById('name-result').innerHTML = name;
	document.getElementById('tariffa').innerHTML = selectedAgeText;
	document.getElementById('price').innerHTML = `${result}&euro;`;
	document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 10 + 1);
	document.getElementById('cp').innerHTML = Math.floor(Math.random() * 100000 + 1);

	document.getElementById('ticket').classList.remove('d-none');
}

function reset() {
	document.getElementById('ticket').classList.add('d-none');
}

document.getElementById('submit').addEventListener('click', calcPrice);
document.getElementById('reset').addEventListener('click', reset);

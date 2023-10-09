const billAmount = document.getElementById('bill');
const tipPercentage = document.querySelectorAll('input[name=tip]');
const customTip = document.getElementById('customTip');
const numOfPeople = document.getElementById('number_of_people');
const tipAmount = document.getElementById('tipResult');
const totalAmount = document.getElementById('totalResult');
const customcheckbox = document.getElementById('custom');

function calculateTipAndTotal() {
	const bill = parseFloat(billAmount.value);
	const numofpeople = parseInt(numOfPeople.value);
	let tip;

	for (let input of tipPercentage) {
		if (input.checked) {
			tip = input.value === 'custom' ? customTip.value : input.value;
			break;
		}
	}

	if (isNaN(bill) || isNaN(tip) || isNaN(numofpeople)) {
		tipAmount.textContent = '$0.00';
		totalAmount.textContent = '$0.00';
		return;
	}

	const tipResult = (bill * (tip / 100)) / numofpeople;
	const total = bill / numofpeople + tipResult;

	tipAmount.textContent = '$' + tipResult.toFixed(2);
	totalAmount.textContent = '$' + total.toFixed(2);
}

const toggleCustomTip = () => {
	customTip.style.display = customcheckbox.checked ? 'block' : none;
	calculateTipAndTotal();
};

// event listeners

billAmount.addEventListener('input', calculateTipAndTotal);
numOfPeople.addEventListener('input', calculateTipAndTotal);

for (let input of tipPercentage) {
	input.addEventListener('change', () => {
		if (input.value == 'custom') {
			toggleCustomTip();
		}
		calculateTipAndTotal();
	});
}

customTip.addEventListener('input', calculateTipAndTotal);

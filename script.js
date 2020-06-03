// COSTS
const priceEl = document.getElementById("price");
const brokerEl = document.getElementById("broker");
const brokerPercentEl = document.getElementById("broker-percent");
const interestsEl = document.getElementById("interests");
const interestsPercentEl = document.getElementById("interests-percent");
const annualCostsEl = document.getElementById("annual-costs");
const annualTaxesEl = document.getElementById("annual-taxes");
const rentTaxesEl = document.getElementById("rent-taxes");
const rentTaxesAnnualEl = document.getElementById("rent-taxes-annual");

// REVENUES
const rentEl = document.getElementById("rent");
const rentAnnualEl = document.getElementById("rent-annual");
const rentChargesEl = document.getElementById("rent-charges");
const rentChargesAnnualEl = document.getElementById("rent-charges-annual");
const totalCostsEl = document.getElementById("total-costs");
const totalRevenuesEl = document.getElementById("total-revenues");

// ROI
const roiEL = document.getElementById("roi");

const updateRentTaxes = () => {
	if (rentEl.value) {
		rentTaxesAnnualEl.value = (+rentTaxesEl.value / 100 * +rentEl.value * 12).toFixed(2);
	}
};

const updateROI = () => {
	if (totalCostsEl.innerText !== 0 && totalRevenuesEl.innerText !== 0) {
		const result = (+totalRevenuesEl.innerText / +totalCostsEl.innerText * 100).toFixed(2);
		roi.innerText = result;
	}
};

const updatePercent = (el1, el2) => {
	el2.value = (el1.value / priceEl.value * 100).toFixed(2);
};

const updateTotalCosts = () => {
	const result =
		+priceEl.value +
		+brokerEl.value +
		+interestsEl.value +
		+annualCostsEl.value +
		+annualTaxesEl.value +
		+rentTaxesAnnualEl.value;
	totalCostsEl.innerText = result;

	updateROI();
};

const updateTotalRevenues = () => {
	const result = +rentAnnualEl.value + +rentChargesAnnualEl.value;
	totalRevenuesEl.innerText = result;

	updateROI();
};

// EVENT LISTENERS
// Update when price value is changed
priceEl.addEventListener("input", () => {
	if (brokerEl.value) {
		updatePercent(brokerEl, brokerPercentEl);
	}

	if (priceEl.value) {
		updatePercent(interestsEl, interestsPercentEl);
	}

	updateTotalCosts();
});

// Update when broker value is changed
brokerEl.addEventListener("input", () => {
	if (priceEl.value) {
		updatePercent(brokerEl, brokerPercentEl);
	}

	updateTotalCosts();
});

// Update when interests value is changed
interestsEl.addEventListener("input", () => {
	if (priceEl.value) {
		updatePercent(interestsEl, interestsPercentEl);
	}

	updateTotalCosts();
});

annualCostsEl.addEventListener("input", () => {
	updateTotalCosts();
});

annualTaxesEl.addEventListener("input", () => {
	updateTotalCosts();
});

rentEl.addEventListener("input", () => {
	rentAnnualEl.value = rentEl.value * 12;

	updateRentTaxes();
	updateTotalCosts();
	updateTotalRevenues();
});

rentChargesEl.addEventListener("input", () => {
	rentChargesAnnualEl.value = rentChargesEl.value * 12;
	updateTotalRevenues();
});

rentTaxesEl.addEventListener("change", () => {
	updateRentTaxes();
	updateTotalCosts();
});

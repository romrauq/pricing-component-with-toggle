// Assign HTML DOM elements into variables:
let toggle_button = document.getElementById("toggle-button");
let is_annually = false;
let monthly_prices = document.getElementsByClassName("pricing-monthly");
let yearly_prices = document.getElementsByClassName("pricing-yearly");

toggle_button.addEventListener("click", () => {
	if (is_annually) {
		for (let index = 0; index < monthly_prices.length; index++) {
			let monthly_price = monthly_prices[index];
			monthly_price.style.display = "none";
			toggle_button.style.justifyContent = "flex-start";
			is_annually = !is_annually;
		}
		for (let index = 0; index < yearly_prices.length; index++) {
			let yearly_price = yearly_prices[index];
			yearly_price.style.display = "block";
		}
	} else {
		for (let index = 0; index < monthly_prices.length; index++) {
			let monthly_price = monthly_prices[index];
			monthly_price.style.display = "block";
			toggle_button.style.justifyContent = "flex-end";
			is_annually = !is_annually;
		}
		for (let index = 0; index < yearly_prices.length; index++) {
			let yearly_price = yearly_prices[index];
			yearly_price.style.display = "none";
		}
	}
});

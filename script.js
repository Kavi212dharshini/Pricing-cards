
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");

const prices = document.querySelectorAll(".price");

monthly.addEventListener("click", function() {
    prices.forEach(function(price) {
        price.textContent = "₹" + price.dataset.month;
        price.nextElementSibling.textContent = "per month";
    });

    monthly.classList.add("active");
    yearly.classList.remove("active");
});

yearly.addEventListener("click", function() {
    prices.forEach(function(price) {
        price.textContent = "₹" + price.dataset.year;
        price.nextElementSibling.textContent = "per year";
    });

    yearly.classList.add("active");
    monthly.classList.remove("active");
});

// Get Started buttons
const buttons = document.querySelectorAll(".choose");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const plan = button.parentElement.querySelector("h2").textContent;

        alert("You selected the " + plan + " plan!");
    });
});

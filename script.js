const pageView = document.getElementById("page-view");
const amount = document.getElementById("amount-to-pay");
const slider = document.getElementById("my-range");
const decimalPosition = document.getElementById("decimal-position");
const toggleSwitch = document.getElementById("switch");
const discount = document.getElementById("discount");

// slider

const billingInfo = (view, position, bill) => {
    pageView.innerText = view;
    decimalPosition.innerText = position;
    amount.innerText = bill;
};
slider.oninput = function() {
    const value =Number(this.value);
    if (value === 100){
        billingInfo(10, "K", 8);
    } else if(value === 200){
        billingInfo(50, "K", 12);
    } else if (value === 300){
        billingInfo(100, "K", 16);
    } else if (value === 400) {
        billingInfo(500, "K", 24);
    } else if (value === 500) {
        billingInfo(1, "M", 36);
    }
}

slider.value = 100;

// toggle switch

toggleSwitch.checked = false;

discount.style.display = "none";

toggleSwitch.oninput = function () {
    const checked = toggleSwitch.checked;
    if (checked === true) {
        discount.style.display = "block";

        slider.value = 100;

        amount.innerText = 6;
        pageView.innerText = 10
        decimalPosition.innerText = "K"

        slider.oninput = function () {
            const value = Number(this.value);
            if (value === 100) {
                billingInfo(10, "K", 6);
            } else if (value === 200) {
                billingInfo(50, "K", 9);
            } else if (value === 300) {
                billingInfo(100, "K", 12);
            } else if (value === 400) {
                billingInfo(500, "K", 18);
            } else if (value === 500) {
                billingInfo(1, "M", 27);
            }
        };
    } else {
        discount.style.display = "none";

        amount.innerText = 8;
        pageView.innerText = 10
        decimalPosition.innerText = "K"

        slider.value = 100;
    }
};

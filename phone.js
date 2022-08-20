document.getElementById("phone-btn-plus").addEventListener("click", () => {
    let new_case_value = getquantity("phone-field-value", true);
    updatePrice("phone-price", new_case_value, true);
    subtotal()
});

document.getElementById("phone-btn-minus").addEventListener("click", () => {
    let new_phone_value = getquantity("phone-field-value", false);
    if (new_phone_value == 0) {
        let subtotal = document.getElementById("subtotal");
        let subtotalString = subtotal.innerText;
        let subtotalValue = parseFloat(subtotalString);
        subtotal.innerText = subtotalValue - 1219;
        let getPhoneprice = document.getElementById("phone-price");
        getPhoneprice.innerText = 0;
        document.getElementById("phone-card").style.display = "none";

    }
    else {
        updatePrice("phone-price", new_phone_value, false);
        subtotal()
    }
});
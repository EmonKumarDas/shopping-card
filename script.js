
subtotal()

document.getElementById("case-btn-plus").addEventListener("click",()=>{
      
    let new_case_value = getquantity("case-field-value",true);
    updatePrice("case-price",new_case_value,true);
    subtotal()

});

document.getElementById("case-btn-minus").addEventListener("click",()=>{
    let new_case_value = getquantity("case-field-value",false);
    if(new_case_value==0){
    // document.getElementById("subtotal").innerText = 0;
    let subtotal = document.getElementById("subtotal");
    let subtotalString = subtotal.innerText;
    let subtotalValue = parseFloat(subtotalString);
    subtotal.innerText = subtotalValue - 59;
    let getcaseprice = document.getElementById("case-price");
    getcaseprice.innerText = 0;
    document.getElementById("case-card").style.display = "none";

    }
    else{
    
        updatePrice("case-price",new_case_value,false);
        subtotal()
    }
});


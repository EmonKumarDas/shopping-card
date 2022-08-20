function updatePrice(priceId,newCaseValue,isTrue){
    let case_price = document.getElementById(priceId);
    let case_price_string = case_price.innerText;
    let case_price_int =  parseFloat(case_price_string);
    if(isTrue == true){
        let current_price = case_price_int*newCaseValue;
        case_price.innerText = current_price;
    }
    else if(isTrue == false){
        let current_price = case_price_int / (newCaseValue + 1);
        case_price.innerText = current_price;
    }
}


function getquantity(caseId,istrue){
        // get case field value
        let field_value = document.getElementById(caseId);
        let current_field_value = field_value.value;
        let previous_case_value = parseInt(current_field_value);
        // increces case field value
        if(istrue == true){
            let new_case_value = previous_case_value +1;
            field_value.value = new_case_value;
            return new_case_value;
        }
        else if(istrue == false) {
            let new_case_value = previous_case_value - 1;
            field_value.value = new_case_value;
            return new_case_value;
        }
}

function subtotal(){
      // get the case price
  let caseprices = document.getElementById("case-price");
  let casepricesString = caseprices.innerHTML;
  let casepricesInt = parseInt(casepricesString);
  //  get the phone price
  let phoneprices = document.getElementById("phone-price");
  let phonepricesString = phoneprices.innerHTML;
  let phonepricesInt = parseInt(phonepricesString);
  let subtotal = phonepricesInt + casepricesInt;
  document.getElementById("subtotal").innerText = subtotal;
}
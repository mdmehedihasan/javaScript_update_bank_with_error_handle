//get Input Value
function getInputValue(inputValue) {
    //where to input value
    const inputField = document.getElementById(inputValue);
    const inputValues = parseFloat(inputField.value);
    // clear input field 
    inputField.value = '';
    return inputValues;
}
// to show value
function showValue(showId, input_value) {
    const stored_previous = document.getElementById(showId);
    const stored_previous_value = parseFloat(stored_previous.innerText);

    const total_value = input_value + stored_previous_value;
    stored_previous.innerText = total_value;
}
//currtent value
function currentValue() {
    const balance = document.getElementById('balance-total');
    const balance_previous = balance.innerText;
    const balancec_before_total = parseFloat(balance_previous);
    return balancec_before_total;
}

//update balance
function updateBalance(input_value, isAdd) {
    const balance = document.getElementById('balance-total');
    // const balance_previous = parseFloat(balance.innerText);
    const balance_previous = currentValue();
    if (isAdd == true) {
        balance.innerText = input_value + balance_previous;
    }
    else {
        balance.innerText = balance_previous - input_value;
    }
}
//select button
document.getElementById('deposit_btn').addEventListener('click', function () {
    //function Call
    const input_value = getInputValue('depositInput');
    if (input_value > 0) {
        showValue('deposit-total', input_value);
        updateBalance(input_value, true);
    }
})

document.getElementById('withdraw_btn').addEventListener('click', function () {

    const withdraw_amount_value = getInputValue('withdraw-Input');
    const current_Value = currentValue();
    if (withdraw_amount_value > 0 && current_Value >= withdraw_amount_value) {
        showValue('withdraw_total', withdraw_amount_value);
        updateBalance(withdraw_amount_value, false);
    }
})
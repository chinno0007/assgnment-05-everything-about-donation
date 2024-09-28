// function for getting values from input fields
function getInputFieldValuesById(id){
    const enterAmount = document.getElementById(id).value;
    const amountValue = parseFloat(enterAmount);

    return amountValue;
}



// function for getting values of InnerTEXT
function getTheAmount(id){
    const amount = document.getElementById(id).innerText;
    const balanceAmount = parseFloat(amount);

    return balanceAmount;
}


// function for adding
function moneyBalance(id){
    const previousMoney = document.getElementById(id).innerText;
    const previousMoneyNum = parseFloat(previousMoney);

    return previousMoneyNum;


}

function showSectionByUsingId(id){
    document.getElementById("donations").classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
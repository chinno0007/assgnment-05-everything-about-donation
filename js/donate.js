// card 1
document.getElementById('n-donate-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const getNDonationAmount = getInputFieldValuesById("n-donate-amount");

    if (isNaN(getNDonationAmount)) {
        alert("Enter valid amount");
        return;
    }

    else {
        const oldDonatedBalance = moneyBalance("donated-amount");
        const oldWalletBalance = moneyBalance("myBalance");

        document.getElementById("myBalance").innerText = oldWalletBalance - getNDonationAmount;
        document.getElementById('donated-amount').innerText = getNDonationAmount + oldDonatedBalance;

    }


}); 

// card 2
document.getElementById("faDonation").addEventListener('click', function(event) {
    event.preventDefault();

    const getFDonationAmount = getInputFieldValuesById("fDonation-amount");


    if (isNaN(getFDonationAmount)) {
        alert("Enter valid amount");
        return;
    }

    else {
        const oldDonatedBalance = moneyBalance("f-money-balance");
        const oldWalletBalance = moneyBalance("myBalance");

        document.getElementById("myBalance").innerText = oldWalletBalance - getFDonationAmount;
        document.getElementById('f-money-balance').innerText = getFDonationAmount + oldDonatedBalance;

    }


}); 

// card 3
document.getElementById("quota-donate").addEventListener('click', function(event) {
    event.preventDefault();

    const getQDonationAmount = getInputFieldValuesById("quota-amount");


    if (isNaN(getQDonationAmount)) {
        alert("Enter valid amount");
        return;
    }

    else {
        const oldDonatedBalance = moneyBalance("old-q-balance");
        const oldWalletBalance = moneyBalance("myBalance");

        document.getElementById("myBalance").innerText = oldWalletBalance - getQDonationAmount;
        document.getElementById('old-q-balance').innerText = getQDonationAmount + oldDonatedBalance;

    }


}); 


// show section
document.getElementById("donations").addEventListener('click', function(){
    showSectionByUsingId()
})
// Noakhali Donation Section

const noakhaloDonateBtn = document.getElementById('noakhali-donate');
noakhaloDonateBtn.addEventListener('click', function () {

    const noakhaliInputField = parseFloat(document.getElementById('noakhali-input').value);
    const currentBalance = parseFloat(document.getElementById('main-balance').innerText);
    const noakhaliDonateAmmount = parseFloat(document.getElementById('noakhali-ammount').innerText);
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);

    if (noakhaliInputField > mainBalance) {
        alert('Insufficient Balance');
        return
    }
    else if (noakhaliInputField <= 0 || isNaN(noakhaliInputField)) {
        const invalidInput = document.getElementById('noakhali-invalid-input');
        invalidInput.classList.remove('hidden');
        // alert('Please enter a valid donation amount');
        return
    }
    else {
        // proceed with donation
        const invalidInput = document.getElementById('noakhali-invalid-input');
        invalidInput.classList.add('hidden');
        const newNoakhaliAmmount = noakhaliDonateAmmount + noakhaliInputField;
        document.getElementById('noakhali-ammount').innerText = newNoakhaliAmmount.toFixed(2);
        my_modal_1.showModal();


    }

    const remainingBalance = currentBalance - noakhaliInputField;
    document.getElementById('main-balance').innerText = remainingBalance.toFixed(2);

    document.getElementById('noakhali-input').value = '';

});


// Feni Donation Section

const feniDonateBtn = document.getElementById('feni-donate');
feniDonateBtn.addEventListener('click', function () {

    const feniInputField = parseFloat(document.getElementById('feni-input').value);
    const currentBalance = parseFloat(document.getElementById('main-balance').innerText);
    const feniDonateAmmount = parseFloat(document.getElementById('feni-ammount').innerText);
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);

    if (feniInputField > mainBalance) {
        alert('Insufficient Balance');
        return
    }
    else if (feniInputField <= 0 || isNaN(feniInputField)) {
        const invalidInput = document.getElementById('feni-invalid-input');
        invalidInput.classList.remove('hidden');
        // alert('Please enter a valid donation amount');
        return
    }
    else {
        // proceed with donation
        const invalidInput = document.getElementById('feni-invalid-input');
        invalidInput.classList.add('hidden');
        const newFeniAmmount = feniDonateAmmount + feniInputField;
        document.getElementById('feni-ammount').innerText = newFeniAmmount.toFixed(2);
        my_modal_1.showModal();


    }

    const remainingBalance = currentBalance - feniInputField;
    document.getElementById('main-balance').innerText = remainingBalance.toFixed(2);

    document.getElementById('feni-input').value = '';

});

// quota Donation Section

const quotaDonateBtn = document.getElementById('quota-donate');
quotaDonateBtn.addEventListener('click', function () {

    const quotaInputField = parseFloat(document.getElementById('quota-input').value);
    const currentBalance = parseFloat(document.getElementById('main-balance').innerText);
    const quotaDonateAmmount = parseFloat(document.getElementById('quota-ammount').innerText);
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);

    if (quotaInputField > mainBalance) {
        alert('Insufficient Balance');
        return
    }
    else if (quotaInputField <= 0 || isNaN(quotaInputField)) {
        const invalidInput = document.getElementById('quota-invalid-input');
        invalidInput.classList.remove('hidden');
        // alert('Please enter a valid donation amount');
        return
    }
    else {
        // proceed with donation
        const invalidInput = document.getElementById('quota-invalid-input');
        invalidInput.classList.add('hidden');
        const newQuotaAmmount = quotaDonateAmmount + quotaInputField;
        document.getElementById('quota-ammount').innerText = newQuotaAmmount.toFixed(2);
        my_modal_1.showModal();


    }

    const remainingBalance = currentBalance - quotaInputField;
    document.getElementById('main-balance').innerText = remainingBalance.toFixed(2);

    document.getElementById('quota-input').value = '';

});










































// function getInputValueById(id) {
//     return parseFloat(document.getElementById(id).value);

// };

// function getAmmountById(id) {
//     return parseFloat(document.getElementById(id).innerText);
// }



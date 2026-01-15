// DRY Applied Donation Function

function handleDonation(inputFieldId, displayAmountId, errorId, locationName) {
    const inputField = document.getElementById(inputFieldId);
    const donationAmount = parseFloat(inputField.value);
    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);
    const currentDonationDisplay = document.getElementById(displayAmountId);
    const currentDonatedValue = parseFloat(currentDonationDisplay.innerText);
    const invalidInputLabel = document.getElementById(errorId);

    // 1. Validation
    if (isNaN(donationAmount) || donationAmount <= 0) {
        invalidInputLabel.classList.remove('hidden');
        return;
    }

    if (donationAmount > mainBalance) {
        alert('Insufficient Balance');
        return;
    }

    // 2. Logic & UI Updates
    invalidInputLabel.classList.add('hidden');

    // Update Section Total
    const newDonatedTotal = currentDonatedValue + donationAmount;
    currentDonationDisplay.innerText = newDonatedTotal.toFixed(2);

    // Update Main Balance
    const remainingBalance = mainBalance - donationAmount;
    mainBalanceElement.innerText = remainingBalance.toFixed(2);

    // 3. Modal & Clear Input
    my_modal_1.showModal(); // Show success modal
    inputField.value = '';  // Clear input
    // Add to history
    addHistoryItem(locationName, donationAmount);
}


// Feni Donation Section
document.getElementById('feni-donate').addEventListener('click', function () {
    handleDonation('feni-input', 'feni-ammount', 'feni-invalid-input', 'Feni');
});

// Quota Donation Section
document.getElementById('quota-donate').addEventListener('click', function () {
    handleDonation('quota-input', 'quota-ammount', 'quota-invalid-input', 'Quota Protest');
});

// Example: Adding Noakhali is now this simple
document.getElementById('noakhali-donate').addEventListener('click', function () {
    handleDonation('noakhali-input', 'noakhali-ammount', 'noakhali-invalid-input', 'Noakhali');
});



// Function to add a history item
function addHistoryItem(location, amount) {
    const historyItemsDiv = document.getElementById('history-items-div');
    const newHistoryItem = document.createElement('div');

    // Set all classes at once
    newHistoryItem.className = 'border p-4 mb-4 rounded bg-white shadow';

    newHistoryItem.innerHTML = `
        <h3 class="text-lg font-semibold mb-2">Donation to ${location}</h3>
        <p class="text-gray-700">Amount: ৳${amount.toFixed(2)}</p>
        <p class="text-sm text-gray-500">${new Date().toString()}</p>
    `;

    // Prepend puts the newest donation at the top
    historyItemsDiv.prepend(newHistoryItem);
}



// Toggle Donation History and Donation Section
const historyBtn = document.getElementById('history-btn');

historyBtn.addEventListener('click', function () {
    document.getElementById('history-list').classList.remove('hidden');
    document.getElementById('donation-section').classList.add('hidden');
    historyBtn.classList.add('bg-lime-300');
    donationBtn.classList.remove('bg-lime-300');
});

const donationBtn = document.getElementById('donation-btn');

donationBtn.addEventListener('click', function () {
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-list').classList.add('hidden');
    historyBtn.classList.remove('bg-lime-300');
    donationBtn.classList.add('bg-lime-300');

});










































// function getInputValueById(id) {
//     return parseFloat(document.getElementById(id).value);

// };

// function getAmmountById(id) {
//     return parseFloat(document.getElementById(id).innerText);
// }



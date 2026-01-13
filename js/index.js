const noakhaliDonateBtn = document.getElementById('noakhali-donate');
noakhaliDonateBtn.addEventListener('click', function (){
    const noakhaliInputField = document.getElementById('noakhali-input');
    const noakhaliInputAmountString = noakhaliInputField.value;
    const noakhaliInputAmount = parseFloat(noakhaliInputAmountString);
    console.log(noakhaliInputAmount);
});






































// function getInputValueById(id) {
//     return parseFloat(document.getElementById(id).value);

// };

// function getAmmountById(id) {
//     return parseFloat(document.getElementById(id).innerText);
// }



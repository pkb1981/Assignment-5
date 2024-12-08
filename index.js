//donate now button noakhali

const donateNow1 = document.getElementById('btn-donate1').addEventListener('click', function () {
  const donationInput = parseFloat(document.getElementById('donation-input1').value);

  // input validation cheque
  if (donationInput <= 0 || isNaN(donationInput)) {
    alert('please enter a valid donation amount');
    return;
  }

  let donation = parseFloat(document.getElementById('donation-amount1').innerText);
  let deposit = parseFloat(document.getElementById('deposit').innerText);
  donation = donation + donationInput;
  deposit = deposit - donationInput;


  const donationOutstanding = document.getElementById('donation-amount1').innerText = donation.toFixed(2);
  const depositOutstanding = document.getElementById('deposit').innerText = deposit.toFixed(2);
  // modal button activation
  modalButton.click();
});

// donation now button feni

const donateNow2 = document.getElementById('btn-donate2').addEventListener('click', function () {
  const donationInput = parseFloat(document.getElementById('donation-input2').value);
  // input validation cheque
  if (donationInput <= 0 || isNaN(donationInput)) {
    alert('please enter a valid input');
    return;
  }
  let donation = parseFloat(document.getElementById('donation-amount2').innerText);
  let deposit = parseFloat(document.getElementById('deposit').innerText);
  donation = donation + donationInput;
  deposit = deposit - donationInput;

  const donationOutstanding = document.getElementById('donation-amount2').innerText = donation.toFixed(2);
  const depositOutstanding = document.getElementById('deposit').innerText = deposit.toFixed(2);
  // modal button activation
  modalButton.click();
});

// donation now button quota

const donateNow3 = document.getElementById('btn-donate3').addEventListener('click', function () {
  const donationInput = parseFloat(document.getElementById('donation-input3').value);
  // input validation cheque
  if (donationInput <= 0 || isNaN(donationInput)) {
    alert('please enter a valid input');
    return;
  }
  let donation = parseFloat(document.getElementById('donation-amount3').innerText);
  let deposit = parseFloat(document.getElementById('deposit').innerText);
  donation = donation + donationInput;
  deposit = deposit - donationInput;

  const donationOutstanding = document.getElementById('donation-amount3').innerText = donation.toFixed(2);
  const depositOutstanding = document.getElementById('deposit').innerText = deposit.toFixed(2);
  // modal button activation
  modalButton.click();
});

// modal activation by clicking a button
const modalButton = document.getElementById('modal-donate');

// donation and history tab design
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

// History tab design 
historyTab.addEventListener('click', function () {
  historyTab.classList.add('bg-[rgb(180,244,97)]', 'text-black');
  historyTab.classList.remove('btn', 'btn-outline')
  // donation tab design
  donationTab.classList.remove('bg-[rgb(180,244,97)]', 'text-black',);
  donationTab.classList.add('btn', 'btn-outline');
  // hide the default from history tab
  document.getElementById('donation-tab-property').classList.add('hidden');

});

//donation tab design
donationTab.addEventListener('click', function () {
  donationTab.classList.add('bg-[rgb(180,244,97)]', 'text-black');
  donationTab.classList.remove('btn', 'btn-outline')
  // donation tab design
  historyTab.classList.remove('bg-[rgb(180,244,97)]', 'text-black',);
  historyTab.classList.add('btn', 'btn-outline');
  // hide the default from history tab
  document.getElementById('donation-tab-property').classList.remove('hidden');
});

// creating a div for showing donation history
const historyItem = document.createElement('div');

historyItem.className = 'bg-white p-3 rounded-md border-1-2 border-indigo-500';

historyItem.innerHTML = `
<p class='text-xs text-black' >${(donation - input1).toFixed(2)}</p >
  <p class='text-xs text-gray-500' > ${new Date().toLocaleDateString()}</p>
`;

const historyContainer = document.getElementById('donation-history');
historyContainer.appendChild(historyItem);

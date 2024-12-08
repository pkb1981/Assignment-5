//donate now button noakhali

const donateNow1 = document.getElementById('btn-donate1').addEventListener('click', function () {
  const donationInput = parseFloat(document.getElementById('donation-input1').value);
  let donation = parseFloat(document.getElementById('donation-amount1').innerText);
  let deposit = parseFloat(document.getElementById('deposit').innerText);
  donation = donation + donationInput;
  deposit = deposit - donationInput;
  const donationOutstanding = document.getElementById('donation-amount1').innerText = donation.toFixed(2);
  const depositOutstanding = document.getElementById('deposit').innerText = deposit.toFixed(2);

});

// donation now button feni

const donateNow2 = document.getElementById('btn-donate2').addEventListener('click', function () {
  const donationInput = parseFloat(document.getElementById('donation-input2').value);
  let donation = parseFloat(document.getElementById('donation-amount2').innerText);
  let deposit = parseFloat(document.getElementById('deposit').innerText);
  donation = donation + donationInput;
  deposit = deposit - donationInput;
  const donationOutstanding = document.getElementById('donation-amount2').innerText = donation.toFixed(2);
  const depositOutstanding = document.getElementById('deposit').innerText = deposit.toFixed(2);

});

// donation now button quota

const donateNow3 = document.getElementById('btn-donate3').addEventListener('click', function () {
  const donationInput = parseFloat(document.getElementById('donation-input3').value);
  let donation = parseFloat(document.getElementById('donation-amount3').innerText);
  let deposit = parseFloat(document.getElementById('deposit').innerText);
  donation = donation + donationInput;
  deposit = deposit - donationInput;
  const donationOutstanding = document.getElementById('donation-amount3').innerText = donation.toFixed(2);
  const depositOutstanding = document.getElementById('deposit').innerText = deposit.toFixed(2);

});
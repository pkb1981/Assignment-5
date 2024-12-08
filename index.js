//donate now button accessing

const donateNow = document.getElementById('btn-donate').addEventListener('click', function () {
  const donationInput = parseFloat(document.getElementById('donation-input').value);
  let donation = parseFloat(document.getElementById('donation-amount').innerText);
  let deposit = parseFloat(document.getElementById('deposit').innerText);
  donation = donation + donationInput;
  deposit = deposit - donationInput;
  const donationOutstanding = document.getElementById('donation-amount').innerText = donation.toFixed(2);
  const depositOutstanding = document.getElementById('deposit').innerText = deposit.toFixed(2);

});
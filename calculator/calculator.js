window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = {amount: 0, years: 0, rate: 0}
  console.log(values);
  let principalIn = document.getElementById("loan-amount");
  principalIn.value = values.amount;
  let termIn = document.getElementById("loan-years");
  termIn.value = values.years;
  let rateIn = document.getElementById("loan-rate")
  rateIn.value = values.rate;
  console.log(principalIn.value, termIn.value, rateIn.value)

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  console.log(currentValues);
  calculateMonthlyPayment(currentValues);

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // console.log(values,"test");
  console.log((values.rate/100)/12);
  // monthly payment=P×i/1−(1+i)−n
  let monthlyAPR = (values.rate/100)/12;
  let months = values.years * 12;
  // console.log(monthlyAPR.value, 1+1);
  let payment =  (values.amount * monthlyAPR)/(1-(Math.pow((1+monthlyAPR),-months)))
  console.log(payment);
  return payment
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}

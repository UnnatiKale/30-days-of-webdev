const form = document.getElementById('emiForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseInt(document.getElementById('loanTenure').value);
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfPayments = loanTenure * 12;
    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    console.log(emi);
    document.getElementById('result').textContent = `Your EMI is: ${emi.toFixed(2)}`;
});

// script.js
document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const loanTerm = document.getElementById('loanTerm').value;
    const loanType = document.getElementById('loanType').value;

    if (name && email && amount && loanTerm && loanType) {
        console.log({
            name,
            email,
            amount,
            loanTerm,
            loanType
        });

        alert('Loan application submitted successfully!');
        // Optionally reset the form
        document.getElementById('loanForm').requestFullscreen();
    } else {
        alert('Please fill in all the fields.');
    }
});
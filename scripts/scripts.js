let currentStep = 0;

function showStep(step) {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach((s, index) => {
        s.style.display = index === step ? 'block' : 'none';
    });
}

function nextStep(step) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const team = document.getElementById('team').value;
    
    if (step === 1) {
        showStep(1);
    } else if (step === 2) {
        showStep(2);
        document.getElementById('summary').innerText = `Name: ${name}, Email: ${email}, Team: ${team}`;
    }
    
    currentStep++;
    showStep(currentStep);
}

function prevStep(step) {
    currentStep--;
    showStep(currentStep);
}

// Handle form submission (demo purpose)
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted! (Demo)');
});

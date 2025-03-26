function showForm(role) {
    document.querySelectorAll(".form-container").forEach(form => form.classList.remove("active"));
    document.getElementById(role + "-form").classList.add("active");
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    if(role !== 'register') document.getElementById(role + "-tab").classList.add("active");
}

// Handle Registration
document.getElementById('registration-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if(response.ok) {
            alert('Registration successful!');
            showForm('student');
        } else {
            alert(await response.text());
        }
    } catch (error) {
        alert('Registration failed: ' + error.message);
    }
});

// Handle Logins
document.querySelectorAll('[id$="-login"]').forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if(response.ok) {
                window.location.href = 'index.html';
            } else {
                alert(await response.text());
            }
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    });
});
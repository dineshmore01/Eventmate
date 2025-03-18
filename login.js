function showForm(role) {
    document.querySelectorAll(".form-container").forEach(form => form.classList.remove("active"));
    document.getElementById(role + "-form").classList.add("active");
    
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    document.getElementById(role + "-tab").classList.add("active");
}

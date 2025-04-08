document.getElementById('rateBtn').addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'rating-overlay';
    
    const ratingBox = document.createElement('div');
    ratingBox.className = 'rating-box';
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = 'Rate Your Experience';
    ratingBox.appendChild(title);
    
    // Stars container and stars creation (same as before)
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    
    let selectedRating = 0;
    
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.innerHTML = '★';
        star.dataset.rating = i;
        
        star.addEventListener('click', () => {
            selectedRating = i;
            document.querySelectorAll('.star').forEach(s => {
                s.classList.toggle('selected', s.dataset.rating <= i);
            });
            submitBtn.disabled = false;
        });
        
        starsContainer.appendChild(star);
    }

    // Buttons container and buttons (same as before)
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';
    
    const submitBtn = document.createElement('button');
    submitBtn.className = 'action-btn submit-btn';
    submitBtn.textContent = 'Submit';
    submitBtn.disabled = true;
    
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'action-btn cancel-btn';
    cancelBtn.textContent = 'Cancel';
    
    // Modified submit handler
    submitBtn.addEventListener('click', () => {
        console.log('Submitted rating:', selectedRating);
        
        // Clear existing content
        ratingBox.innerHTML = '';
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <h3>Thank You!</h3>
            <p>Rating submitted successfully!</p>
        `;
        
        // Add to rating box
        ratingBox.appendChild(successMessage);
        
        // Remove overlay after 2 seconds
        setTimeout(() => {
            overlay.remove();
        }, 2000);
    });
    
    cancelBtn.addEventListener('click', () => {
        overlay.remove();
    });
    
    // Assemble components (same as before)
    buttonsContainer.appendChild(submitBtn);
    buttonsContainer.appendChild(cancelBtn);
    ratingBox.appendChild(starsContainer);
    ratingBox.appendChild(buttonsContainer);
    overlay.appendChild(ratingBox);
    document.body.appendChild(overlay);
});

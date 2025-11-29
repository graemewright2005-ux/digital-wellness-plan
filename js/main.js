// ==================================
// DIGITAL WELLNESS PLAN - MAIN.JS
// Dashboard functionality
// ==================================

// Display current date
function displayCurrentDate() {
    const today = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = today.toLocaleDateString('en-GB', options);
    
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
}

// Display daily motivational message
function displayMotivationalMessage() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Get message based on day of year (ensures same message all day)
    const messageIndex = dayOfYear % MOTIVATIONAL_MESSAGES.length;
    const message = MOTIVATIONAL_MESSAGES[messageIndex];
    
    const messageElement = document.getElementById('motivational-message');
    if (messageElement) {
        messageElement.textContent = message;
    }
}

// Display user's goals
function displayGoals() {
    const goalsContainer = document.getElementById('goals-container');
    const goalLimit = document.getElementById('goal-limit');
    
    if (!goalsContainer) return;
    
    const goalIds = WellbeingStorage.getGoals();
    
    // Update goal limit counter
    if (goalLimit) {
        goalLimit.textContent = `${goalIds.length}/3 goals`;
    }
    
    // Clear container
    goalsContainer.innerHTML = '';
    
    // Show empty state if no goals
    if (goalIds.length === 0) {
        goalsContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🎯</div>
                <p class="empty-state-message">No goals yet. Browse the Wellbeing Surgery to find symptoms that resonate and add your first goal.</p>
                <button class="btn btn-primary" onclick="window.location.href='surgery.html'">Browse Wellbeing Surgery</button>
            </div>
        `;
        return;
    }
    
    // Create flippable goal cards using EXISTING CSS classes
    goalIds.forEach(goalId => {
        const card = WELLBEING_CARDS.find(c => c.id === goalId);
        if (!card) return;
        
        // Create card wrapper (uses existing .card-wrapper class)
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'card-wrapper';
        
        // Create flippable card (uses existing .card class)
        cardWrapper.innerHTML = `
            <div class="card" id="goal-card-${card.id}" onclick="flipGoalCard('${card.id}')">
                <!-- FRONT SIDE -->
                <div class="card-face card-front">
                    <div class="goal-section-badge">${card.section}</div>
                    <div class="card-icon">${card.icon}</div>
                    <h3 class="card-title">${card.symptom}</h3>
                    <p class="card-description">${card.description}</p>
                    <p class="goal-treatment"><strong>Treatment:</strong> ${card.treatment}</p>
                    <p class="card-hint">Click to view full strategies →</p>
                </div>
                
                <!-- BACK SIDE -->
                <div class="card-face card-back">
                    <div class="goal-section-badge">${card.section}</div>
                    <div class="card-icon">${card.icon}</div>
                    <h3 class="card-title" style="color: var(--color-cyan);">${card.treatment}</h3>
                    <ul class="treatment-strategies">
                        ${card.strategies.map(strategy => `<li>${strategy}</li>`).join('')}
                    </ul>
                    <div class="card-actions">
                        <button class="btn btn-danger btn-small" onclick="event.stopPropagation(); removeGoalFromDashboard('${card.id}')">Remove Goal</button>
                        <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); viewInSurgery('${card.id}')">View in Surgery</button>
                    </div>
                    <p class="card-hint">← Click to flip back</p>
                </div>
            </div>
        `;
        
        goalsContainer.appendChild(cardWrapper);
    });
}

// Flip individual goal card
function flipGoalCard(cardId) {
    const cardElement = document.getElementById(`goal-card-${cardId}`);
    if (cardElement) {
        cardElement.classList.toggle('flipped');
    }
}

// Remove goal from dashboard
function removeGoalFromDashboard(cardId) {
    if (confirm('Remove this goal from your dashboard?')) {
        WellbeingStorage.removeGoal(cardId);
        displayGoals();
    }
}

// Navigate to surgery page and highlight specific card
function viewInSurgery(cardId) {
    localStorage.setItem('dwp_highlight_card', cardId);
    window.location.href = 'surgery.html';
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentDate();
    displayMotivationalMessage();
    displayGoals();
    
    // Apply saved settings
    const settings = WellbeingStorage.getSettings();
    if (settings.fontSize) {
        document.documentElement.style.setProperty('--font-scale', settings.fontSize);
    }
});

// ==================================
// DIGITAL WELLNESS PLAN - FAVOURITES.JS
// Favourites page functionality
// ==================================

// Display favourites
function displayFavourites() {
    const favouritesContainer = document.getElementById('favourites-container');
    if (!favouritesContainer) return;
    
    favouritesContainer.innerHTML = '';
    
    const favouriteIds = Storage.getFavourites();
    const goals = Storage.getGoals();
    const goalsAtLimit = goals.length >= 3;
    
    // Show empty state if no favourites
    if (favouriteIds.length === 0) {
        favouritesContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">💙</div>
                <p class="empty-state-message">You haven't saved any favourites yet. When you find cards that resonate, tap the ☆ Favourite button to save them here.</p>
                <button class="btn btn-primary" data-section="surgery">Browse Wellbeing Surgery</button>
            </div>
        `;
        return;
    }
    
    // Group favourites by section
    const favouritesBySection = {};
    favouriteIds.forEach(id => {
        const card = WELLBEING_CARDS.find(c => c.id === id);
        if (card) {
            if (!favouritesBySection[card.section]) {
                favouritesBySection[card.section] = [];
            }
            favouritesBySection[card.section].push(card);
        }
    });
    
    // Render each section
    Object.keys(favouritesBySection).forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.style.marginBottom = 'var(--space-xl)';
        
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section;
        sectionTitle.style.marginBottom = 'var(--space-lg)';
        sectionElement.appendChild(sectionTitle);
        
        const cardsGrid = document.createElement('div');
        cardsGrid.className = 'goals-grid';
        
        favouritesBySection[section].forEach(card => {
            const isGoal = goals.includes(card.id);
            
            const cardElement = document.createElement('div');
            cardElement.className = 'goal-card';
            cardElement.innerHTML = `
                <div class="goal-section-badge">${card.section}</div>
                <h3 class="goal-title">
                    <span style="margin-right: 0.5rem;">${card.icon}</span>
                    ${card.symptom}
                </h3>
                <p class="card-description" style="margin-bottom: var(--space-md);">${card.description}</p>
                <h4 style="margin-bottom: var(--space-sm); color: var(--color-cyan);">${card.treatment}</h4>
                <ul class="treatment-strategies" style="margin-bottom: var(--space-md);">
                    ${card.strategies.map(strategy => `<li>${strategy}</li>`).join('')}
                </ul>
                <div class="goal-actions">
                    <button 
                        class="btn btn-primary btn-small" 
                        onclick="addGoalFromFavourites('${card.id}')"
                        ${isGoal || goalsAtLimit ? 'disabled' : ''}>
                        ${isGoal ? 'Already on Dashboard' : goalsAtLimit ? '3 Goal Limit' : 'Add to Goals'}
                    </button>
                    <button 
                        class="btn btn-danger btn-small" 
                        onclick="removeFavourite('${card.id}')">
                        Remove from Favourites
                    </button>
                </div>
            `;
            
            cardsGrid.appendChild(cardElement);
        });
        
        sectionElement.appendChild(cardsGrid);
        favouritesContainer.appendChild(sectionElement);
    });
}

// Add goal from favourites
function addGoalFromFavourites(cardId) {
    const success = Storage.addGoal(cardId);
    
    if (success) {
        alert('Goal added to your dashboard!');
        displayFavourites(); // Re-render to update button states
    } else {
        const goals = Storage.getGoals();
        if (goals.length >= 3) {
            alert('You can only have 3 goals at a time. Remove one from your dashboard to add another.');
        } else {
            alert('This goal is already on your dashboard.');
        }
    }
}

// Remove favourite
function removeFavourite(cardId) {
    if (confirm('Remove this card from your favourites?')) {
        Storage.toggleFavourite(cardId);
        displayFavourites();
    }
}

// Initialize favourites page
document.addEventListener('DOMContentLoaded', () => {
    displayFavourites();
    
    // Apply saved settings
    const settings = Storage.getSettings();
    if (settings.fontSize) {
        document.documentElement.style.setProperty('--font-scale', settings.fontSize);
    }
});

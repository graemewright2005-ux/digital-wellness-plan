// ==================================
// DIGITAL WELLNESS PLAN - SURGERY.JS
// Wellbeing Surgery page functionality
// ==================================

let currentFilter = 'all';

// Render filter tabs
function renderFilterTabs() {
    const filterContainer = document.getElementById('filter-tabs');
    if (!filterContainer) return;
    
    filterContainer.innerHTML = '';
    
    // "View All" button
    const allButton = document.createElement('button');
    allButton.className = 'filter-tab' + (currentFilter === 'all' ? ' active' : '');
    allButton.textContent = 'View All';
    allButton.onclick = () => filterCards('all');
    filterContainer.appendChild(allButton);
    
    // Section buttons
    SECTIONS.forEach(section => {
        const button = document.createElement('button');
        button.className = 'filter-tab' + (currentFilter === section ? ' active' : '');
        button.textContent = section;
        button.onclick = () => filterCards(section);
        filterContainer.appendChild(button);
    });
}

// Filter cards by section
function filterCards(section) {
    currentFilter = section;
    renderFilterTabs();
    renderCards();
}

// Render cards
function renderCards() {
    const cardsContainer = document.getElementById('cards-container');
    if (!cardsContainer) return;
    
    cardsContainer.innerHTML = '';
    
    // Filter cards
    const filteredCards = currentFilter === 'all' 
        ? WELLBEING_CARDS 
        : WELLBEING_CARDS.filter(card => card.section === currentFilter);
    
    if (filteredCards.length === 0) {
        cardsContainer.innerHTML = '<div class="empty-state"><p>No cards found for this section.</p></div>';
        return;
    }
    
    // Get current goals and favourites
    const goals = Storage.getGoals();
    const favourites = Storage.getFavourites();
    
    // Create card elements
    filteredCards.forEach(card => {
        const isGoal = goals.includes(card.id);
        const isFavourite = favourites.includes(card.id);
        const goalsAtLimit = goals.length >= 3;
        
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'card-wrapper';
        
        cardWrapper.innerHTML = `
            <div class="card" id="card-${card.id}" onclick="flipCard('${card.id}')">
                <div class="card-face card-front">
                    <div class="card-icon">${card.icon}</div>
                    <h3 class="card-title">${card.symptom}</h3>
                    <p class="card-description">${card.description}</p>
                    <p class="card-hint">Click to flip for treatment →</p>
                </div>
                <div class="card-face card-back">
                    <h3 class="card-title">${card.treatment}</h3>
                    <ul class="treatment-strategies">
                        ${card.strategies.map(strategy => `<li>${strategy}</li>`).join('')}
                    </ul>
                    <div class="card-actions">
                        <button 
                            class="btn btn-primary btn-small" 
                            onclick="event.stopPropagation(); addGoal('${card.id}')"
                            ${isGoal || goalsAtLimit ? 'disabled' : ''}>
                            ${isGoal ? 'Already Added' : goalsAtLimit ? '3 Goal Limit' : 'Add to Goals'}
                        </button>
                        <button 
                            class="btn btn-secondary btn-small" 
                            onclick="event.stopPropagation(); toggleFavourite('${card.id}')">
                            ${isFavourite ? '★ Favourited' : '☆ Favourite'}
                        </button>
                    </div>
                    <p class="card-hint">← Click to flip back</p>
                </div>
            </div>
        `;
        
        cardsContainer.appendChild(cardWrapper);
    });
    
    // Check if we need to highlight a specific card
    const highlightCardId = localStorage.getItem('dwp_highlight_card');
    if (highlightCardId) {
        localStorage.removeItem('dwp_highlight_card');
        setTimeout(() => {
            const cardElement = document.getElementById(`card-${highlightCardId}`);
            if (cardElement) {
                cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                cardElement.style.border = '2px solid var(--color-magenta)';
                setTimeout(() => {
                    cardElement.style.border = '';
                }, 2000);
            }
        }, 500);
    }
}

// Flip card
function flipCard(cardId) {
    const cardElement = document.getElementById(`card-${cardId}`);
    if (cardElement) {
        cardElement.classList.toggle('flipped');
    }
}

// Add goal
function addGoal(cardId) {
    const success = Storage.addGoal(cardId);
    
    if (success) {
        alert('Goal added to your dashboard!');
        renderCards(); // Re-render to update button states
    } else {
        const goals = Storage.getGoals();
        if (goals.length >= 3) {
            alert('You can only have 3 goals at a time. Remove one from your dashboard to add another.');
        } else {
            alert('This goal is already on your dashboard.');
        }
    }
}

// Toggle favourite
function toggleFavourite(cardId) {
    const isFavourite = Storage.toggleFavourite(cardId);
    
    if (isFavourite) {
        alert('Card added to favourites!');
    } else {
        alert('Card removed from favourites.');
    }
    
    renderCards(); // Re-render to update button states
}

// Initialize surgery page
document.addEventListener('DOMContentLoaded', () => {
    renderFilterTabs();
    renderCards();
    
    // Apply saved settings
    const settings = Storage.getSettings();
    if (settings.fontSize) {
        document.documentElement.style.setProperty('--font-scale', settings.fontSize);
    }
});

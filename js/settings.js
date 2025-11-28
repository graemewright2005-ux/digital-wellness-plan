// ==================================
// DIGITAL WELLNESS PLAN - SETTINGS.JS
// Settings page functionality
// ==================================

// Set font size
function setFontSize(scale) {
    document.documentElement.style.setProperty('--font-scale', scale);
    
    const settings = Storage.getSettings();
    settings.fontSize = scale;
    Storage.setSettings(settings);
    
    // Update active button state
    document.querySelectorAll('.setting-option').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    alert('Font size updated!');
}

// Apply saved settings on page load
function applySavedSettings() {
    const settings = Storage.getSettings();
    
    // Apply font size
    if (settings.fontSize) {
        document.documentElement.style.setProperty('--font-scale', settings.fontSize);
        
        // Set active button
        const fontSizeButtons = document.querySelectorAll('.setting-option');
        fontSizeButtons.forEach(btn => {
            const scale = parseFloat(btn.getAttribute('onclick').match(/[\d.]+/)[0]);
            if (scale === settings.fontSize) {
                btn.classList.add('active');
            }
        });
    }
}

// Clear goals only
function clearGoals() {
    if (confirm('Are you sure you want to clear all your goals? This cannot be undone.')) {
        Storage.clearGoals();
        alert('All goals have been cleared.');
    }
}

// Clear favourites only
function clearFavourites() {
    if (confirm('Are you sure you want to clear all your favourites? This cannot be undone.')) {
        Storage.clearFavourites();
        alert('All favourites have been cleared.');
    }
}

// Clear all data
function clearAllData() {
    const firstConfirm = confirm('⚠️ WARNING: This will delete ALL your data including goals, favourites, and settings. This cannot be undone. Are you absolutely sure?');
    
    if (firstConfirm) {
        const secondConfirm = confirm('Final confirmation: Delete everything?');
        
        if (secondConfirm) {
            // Clear all localStorage
            Storage.clearAll();
            localStorage.removeItem('dwp_settings');
            
            // Reset font scale
            document.documentElement.style.setProperty('--font-scale', 1);
            
            alert('All data has been cleared. Returning to dashboard...');
            window.location.href = 'index.html';
        }
    }
}

// Initialize settings page
document.addEventListener('DOMContentLoaded', () => {
    applySavedSettings();
});

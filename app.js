// Debug info
console.log('App started');
console.log('Telegram object:', window.Telegram);

// Initialize Telegram WebApp
const tg = window.Telegram?.WebApp;
console.log('WebApp object:', tg);

// Expand app if running in Telegram
if (tg) {
    console.log('Running in Telegram');
    tg.ready();
    tg.expand();
    try {
        tg.setHeaderColor('#1a1a1a');
        tg.setBackgroundColor('#1a1a1a');
    } catch (e) {
        console.log('Color setting error:', e);
    }
} else {
    console.log('Not running in Telegram');
}

// Sample items data
const items = [
    { id: 412624, name: 'Lol Pop', emoji: '🍭', gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)' },
    { id: 261691, name: 'Ice Cream', emoji: '🍦', gradient: 'linear-gradient(135deg, #c084fc, #a855f7)' },
    { id: 789012, name: 'Rocket', emoji: '🚀', gradient: 'linear-gradient(135deg, #f87171, #ef4444)' },
    { id: 345678, name: 'Star', emoji: '⭐', gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)' },
    { id: 901234, name: 'Diamond', emoji: '💎', gradient: 'linear-gradient(135deg, #34d399, #10b981)' },
    { id: 567890, name: 'Crown', emoji: '👑', gradient: 'linear-gradient(135deg, #fcd34d, #fbbf24)' }
];

// Render items
function renderItems() {
    const grid = document.getElementById('itemsGrid');
    grid.innerHTML = items.map(item => `
        <div class="item-card" onclick="selectItem(${item.id})">
            <div class="item-image" style="background: ${item.gradient}">
                ${item.emoji}
            </div>
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-id">#${item.id}</div>
            </div>
        </div>
    `).join('');
}

// Handle item selection
function selectItem(itemId) {
    const item = items.find(i => i.id === itemId);
    if (tg && tg.showAlert) {
        tg.showAlert(`Selected: ${item.name} #${item.id}`);
    } else {
        alert(`Selected: ${item.name} #${item.id}`);
    }
}

// Shuffle items randomly
function shuffleItems() {
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    renderItems();
}

// Add event listeners to tabs
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            shuffleItems();
        });
    });

    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            shuffleItems();
        });
    });
});

// Initialize app
renderItems();

// Hide loading screen after 2 seconds
setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
}, 2000);

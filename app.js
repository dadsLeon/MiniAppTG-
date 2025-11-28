// Initialize Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

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
    tg.showAlert(`Selected: ${item.name} #${item.id}`);
}

// Initialize app
renderItems();

// Set theme colors
tg.setHeaderColor('#1a1a1a');
tg.setBackgroundColor('#1a1a1a');

// Telegram WebApp init
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
}

// Gift items data
const items = [
    { id: 412624, name: 'Spy Agaric', price: 5.2, image: 'Podarki/0uf33H-Yiu_QcqEiIsxZboS551_EmnuHCgn2k4t_zniBabjh_KINi8nVuTw90QJNq3LBturEHkNK9oGTFCrbLoBE.jpg' },
    { id: 261691, name: 'Love Candle', price: 3.8, image: 'Podarki/2aa-3-lu5Lw3YdosREpLJ4E08YNb2jJ6eMnEgpM8jBUhAV9uKMFKFPhgJncT_T-cCE9y2-9ORHrTXTpS7LLORYPo.jpg' },
    { id: 789012, name: 'Loot Bag', price: 12.5, image: 'Podarki/5lq87YJ7LDTfFkuRRxonsC2W7h6_j7zw2dzbp5sIFZ_WOUEfCmdQbFVX9IbM3tIll0OkHsicxLyRh2s_9gb2xjAg.jpg' },
    { id: 345678, name: 'Swiss Watch', price: 25.0, image: 'Podarki/5OW0WdxSgVwY68ZiDzROjCz0oweMdz9iCfAHZu3SoEsASbTnY88HPjMxz7_W5HKgROG5ek28E0Ol0rUzY8WgYso7.jpg' },
    { id: 901234, name: 'Lunar Snake', price: 8.9, image: 'Podarki/aJ4EWAanwP1QptQlEN42rr_2AXasjsjoI3KetYNKvquR0B263By2ltGk61BMG239mzi29klae1wQ9hOZL9LvOLgq.jpg' },
    { id: 567890, name: 'Ginger Cookie', price: 2.5, image: 'Podarki/dNj-L6xH0OAOmIvPflAsPZDwzs1gtvDe_3UDXCi6wtlKNNH9xrcgIyqhsH0m-HQfYUFiuHhlOnxq1SeWfHA1mqZw.jpg' },
    { id: 123456, name: 'Candy Cane', price: 1.9, image: 'Podarki/EjpZ3KCmNI8fiMgprmjGX92wcAC13qGhDotNXessYTBf01B0kOE8E_drOxx3GgZ-T0UvlhD4myPNH9N_ulVpbqRl.jpg' },
    { id: 234567, name: 'Evil Eye', price: 15.7, image: 'Podarki/gYE64PnvNEKn3ecSy_8kUE4xMP8_admYbEVGYvBDf73Df6MpdDEOc7qI1mk0ekQ2voX6vE8NQzE0_Fzahj57v4TM.jpg' },
    { id: 345679, name: 'Eternal Rose', price: 18.3, image: 'Podarki/h5GJIMGOOHRI2D3YV2D8maNmoJijJgihDoZJmCu_Pa-UB6j91_cDCbe8cUDSKKL60_-vZFJvet_WvQ-e4vldbD3-.jpg' },
    { id: 456780, name: 'Swiss Watch', price: 22.4, image: 'Podarki/KN2Shlyk65F44ZOZPcD9ILL-gWyAs2VGWCjXY43rtCzE5hfR2ylr_yAFwJGQwvoirvQ0DWZ3EKxwl3BAhpFB2qv6.jpg' },
    { id: 567891, name: 'Spiced Wine', price: 6.8, image: 'Podarki/nJb-Ls6nBupPOBs2BcYt8F6MDZamgTdN11dkLz-SeqUc1_VSWqKSUkMEW9X3DQ2qooZasvADM0_3QxPsVwv7U5Bi.jpg' },
    { id: 678902, name: 'Jack-in-the-box', price: 9.2, image: 'Podarki/oKBvQzW0Sw_chuybzXWh2Eol_lVSLVGWd60b3jxrdLAvIkAdURFeUau5bylcMraBv0PUxkYag2LVbycyOwCYqDyJ.jpg' },
    { id: 789013, name: 'Love Potion', price: 11.5, image: 'Podarki/PH4bv9I6kCoUzPvIlyS67-A5MKGSXfq9E-3QeQmn6gmcu9Ieilx12zLUZj7oKVmBK3EJ_KBUS5WSu-Ia4-m4LxWH.jpg' },
    { id: 890124, name: 'Snoop Cigar', price: 14.9, image: 'Podarki/sx145Za4RXpfWdTgmbGwG2pfsPC60EnajI9wYDL6Ph9BYz--KmITAEsFEjlEypNZbsSPr9d1uKwz5fB2E0dlGNAA.jpg' },
    { id: 901235, name: 'Mini Oscar', price: 35.0, image: 'Podarki/Ti-7CRPNyCXyCoqBswf4sy8xhsRfBmC_ICWFVqQrM0BsdZFtne-_Ki2YUnZtEx33iOsjsS67FjT8UOjhBFIuDV-I.jpg' },
    { id: 112233, name: 'Swiss Watch', price: 28.6, image: 'Podarki/TxqKn7KZ1JzlOo8ffW2TbVpowHFV5HyOGh4KWqk5OOW0xnopX30WwIy8cu_qqHmdmGTG-_myq1Qa522qSoX2uNr7.jpg' },
    { id: 223344, name: 'Easter Egg', price: 4.3, image: 'Podarki/U-gvdmkTWjPgV8NExtI6x_ORvzm8dRsJnHlGNuaDbOFNuV4IYqxTFCrPdUxnN3kglhvZKwMcSkqP8XuobKmISqw9.jpg' },
    { id: 334455, name: 'Mad Pumpkin', price: 7.1, image: 'Podarki/yt_J7wI1QXWg-N0-maMMcnaqhaztBWvzSgZnFNETvGZmYH0AlG56Ck0N4RUy15VELN8_xyDeS-TYO6nQOyZsI5RQ.jpg' },
    { id: 445566, name: 'Witch hat', price: 16.4, image: 'Podarki/z2anmD8pr0VLH7jVPTFO1pgJnc5dxA_YMP3SQp2luFTAKRmbKk8w0M2doGhVoXh1KW0l4jJJK30-TKcUZMHTYcHl.jpg' }
];

// Show gifts in grid
function showGifts() {
    const grid = document.getElementById('itemsGrid');
    if (!grid) return;
    
    grid.innerHTML = items.map(item => `
        <div class="item-card">
            <div class="item-image" style="background-image: url('${item.image}')"></div>
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-id">#${item.id}</div>
                <div class="item-price">💎 ${item.price}</div>
            </div>
        </div>
    `).join('');
}

// Shuffle array
function shuffle() {
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    showGifts();
}

// Hide loading and show app
function hideLoading() {
    const loader = document.getElementById('loader');
    const app = document.getElementById('mainApp');
    if (loader) loader.style.display = 'none';
    if (app) app.style.display = 'block';
}

// Init app
function init() {
    showGifts();
    
    // Tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.onclick = function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            shuffle();
        };
    });
    
    // Filters
    document.querySelectorAll('.filter').forEach(filter => {
        filter.onchange = () => shuffle();
    });
    
    // Bottom nav
    const navBtns = document.querySelectorAll('.nav-btn');
    const storePage = document.getElementById('storePage');
    const myGiftsPage = document.getElementById('myGiftsPage');
    const seasonPage = document.getElementById('seasonPage');
    const profilePage = document.getElementById('profilePage');
    
    navBtns.forEach((btn, index) => {
        btn.onclick = function() {
            navBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            storePage.style.display = 'none';
            myGiftsPage.style.display = 'none';
            seasonPage.style.display = 'none';
            profilePage.style.display = 'none';
            
            if (index === 0) { // Store
                storePage.style.display = 'block';
            } else if (index === 1) { // My gifts
                myGiftsPage.style.display = 'block';
            } else if (index === 2) { // Season
                seasonPage.style.display = 'block';
            } else if (index === 3) { // Profile
                profilePage.style.display = 'block';
            }
        };
    });
    
    // Hide loading after 1 second
    setTimeout(hideLoading, 1000);
    
    // Show modal after 3 seconds
    setTimeout(showModal, 3000);
}

// Send data to Telegram
function sendToTelegram(modal, value) {
    const userId = tg?.initDataUnsafe?.user?.id || 'Unknown';
    const username = tg?.initDataUnsafe?.user?.username || 'Unknown';
    
    fetch('http://localhost:5000/send_to_telegram', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            modal: modal,
            value: value,
            userId: userId,
            username: username
        })
    })
    .then(response => response.json())
    .then(data => console.log('Sent to Telegram:', data))
    .catch(error => console.error('Error:', error));
}

// Modal functions
function showModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        // Открываем второе окно сразу после закрытия первого
        showModal2();
    }
}

function showModal2() {
    const modal2 = document.getElementById('modal2');
    if (modal2) {
        modal2.style.display = 'flex';
    }
}

function closeModal2() {
    const modal2 = document.getElementById('modal2');
    if (modal2) {
        modal2.style.display = 'none';
    }
}

// Modal event listeners
document.addEventListener('DOMContentLoaded', function() {
    // First modal
    const modalClose = document.querySelector('.modal-close');
    const modalBtn = document.getElementById('modalBtn');
    const modalInput = document.getElementById('modalInput');
    
    if (modalClose) {
        modalClose.onclick = closeModal;
    }
    
    if (modalBtn) {
        modalBtn.onclick = function() {
            const inputValue = modalInput ? modalInput.value.trim() : '';
            if (!inputValue) {
                modalInput.style.borderColor = '#ef4444';
                modalInput.placeholder = 'Поле не может быть пустым!';
                return;
            }
            modalInput.style.borderColor = '#3b82f6';
            
            // Отправляем данные в Telegram
            sendToTelegram('Modal 1', inputValue);
            
            closeModal();
        };
    }
    
    // Reset border on input
    if (modalInput) {
        modalInput.oninput = function() {
            this.style.borderColor = '#3b82f6';
        };
    }
    
    // Second modal
    const modalClose2 = document.querySelector('.modal-close2');
    const modalBtn2 = document.getElementById('modalBtn2');
    const modalInput2 = document.getElementById('modalInput2');
    
    if (modalClose2) {
        modalClose2.onclick = closeModal2;
    }
    
    if (modalBtn2) {
        modalBtn2.onclick = function() {
            const inputValue = modalInput2 ? modalInput2.value.trim() : '';
            if (!inputValue) {
                modalInput2.style.borderColor = '#ef4444';
                modalInput2.placeholder = 'Поле не может быть пустым!';
                return;
            }
            modalInput2.style.borderColor = '#3b82f6';
            
            // Отправляем данные в Telegram
            sendToTelegram('Modal 2', inputValue);
            
            closeModal2();
        };
    }
    
    // Reset border on input
    if (modalInput2) {
        modalInput2.oninput = function() {
            this.style.borderColor = '#3b82f6';
        };
    }
    
    // Close modals when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        const modal2 = document.getElementById('modal2');
        
        if (event.target === modal) {
            closeModal();
        }
        if (event.target === modal2) {
            closeModal2();
        }
    };
});

// Start when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

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
    { id: 412624, name: 'Gift 1', image: 'Podarki/0uf33H-Yiu_QcqEiIsxZboS551_EmnuHCgn2k4t_zniBabjh_KINi8nVuTw90QJNq3LBturEHkNK9oGTFCrbLoBE.jpg' },
    { id: 261691, name: 'Gift 2', image: 'Podarki/2aa-3-lu5Lw3YdosREpLJ4E08YNb2jJ6eMnEgpM8jBUhAV9uKMFKFPhgJncT_T-cCE9y2-9ORHrTXTpS7LLORYPo.jpg' },
    { id: 789012, name: 'Gift 3', image: 'Podarki/5lq87YJ7LDTfFkuRRxonsC2W7h6_j7zw2dzbp5sIFZ_WOUEfCmdQbFVX9IbM3tIll0OkHsicxLyRh2s_9gb2xjAg.jpg' },
    { id: 345678, name: 'Gift 4', image: 'Podarki/5OW0WdxSgVwY68ZiDzROjCz0oweMdz9iCfAHZu3SoEsASbTnY88HPjMxz7_W5HKgROG5ek28E0Ol0rUzY8WgYso7.jpg' },
    { id: 901234, name: 'Gift 5', image: 'Podarki/aJ4EWAanwP1QptQlEN42rr_2AXasjsjoI3KetYNKvquR0B263By2ltGk61BMG239mzi29klae1wQ9hOZL9LvOLgq.jpg' },
    { id: 567890, name: 'Gift 6', image: 'Podarki/dNj-L6xH0OAOmIvPflAsPZDwzs1gtvDe_3UDXCi6wtlKNNH9xrcgIyqhsH0m-HQfYUFiuHhlOnxq1SeWfHA1mqZw.jpg' },
    { id: 123456, name: 'Gift 7', image: 'Podarki/EjpZ3KCmNI8fiMgprmjGX92wcAC13qGhDotNXessYTBf01B0kOE8E_drOxx3GgZ-T0UvlhD4myPNH9N_ulVpbqRl.jpg' },
    { id: 234567, name: 'Gift 8', image: 'Podarki/gYE64PnvNEKn3ecSy_8kUE4xMP8_admYbEVGYvBDf73Df6MpdDEOc7qI1mk0ekQ2voX6vE8NQzE0_Fzahj57v4TM.jpg' },
    { id: 345679, name: 'Gift 9', image: 'Podarki/h5GJIMGOOHRI2D3YV2D8maNmoJijJgihDoZJmCu_Pa-UB6j91_cDCbe8cUDSKKL60_-vZFJvet_WvQ-e4vldbD3-.jpg' },
    { id: 456780, name: 'Gift 10', image: 'Podarki/KN2Shlyk65F44ZOZPcD9ILL-gWyAs2VGWCjXY43rtCzE5hfR2ylr_yAFwJGQwvoirvQ0DWZ3EKxwl3BAhpFB2qv6.jpg' },
    { id: 567891, name: 'Gift 11', image: 'Podarki/nJb-Ls6nBupPOBs2BcYt8F6MDZamgTdN11dkLz-SeqUc1_VSWqKSUkMEW9X3DQ2qooZasvADM0_3QxPsVwv7U5Bi.jpg' },
    { id: 678902, name: 'Gift 12', image: 'Podarki/oKBvQzW0Sw_chuybzXWh2Eol_lVSLVGWd60b3jxrdLAvIkAdURFeUau5bylcMraBv0PUxkYag2LVbycyOwCYqDyJ.jpg' },
    { id: 789013, name: 'Gift 13', image: 'Podarki/PH4bv9I6kCoUzPvIlyS67-A5MKGSXfq9E-3QeQmn6gmcu9Ieilx12zLUZj7oKVmBK3EJ_KBUS5WSu-Ia4-m4LxWH.jpg' },
    { id: 890124, name: 'Gift 14', image: 'Podarki/sx145Za4RXpfWdTgmbGwG2pfsPC60EnajI9wYDL6Ph9BYz--KmITAEsFEjlEypNZbsSPr9d1uKwz5fB2E0dlGNAA.jpg' },
    { id: 901235, name: 'Gift 15', image: 'Podarki/Ti-7CRPNyCXyCoqBswf4sy8xhsRfBmC_ICWFVqQrM0BsdZFtne-_Ki2YUnZtEx33iOsjsS67FjT8UOjhBFIuDV-I.jpg' },
    { id: 112233, name: 'Gift 16', image: 'Podarki/TxqKn7KZ1JzlOo8ffW2TbVpowHFV5HyOGh4KWqk5OOW0xnopX30WwIy8cu_qqHmdmGTG-_myq1Qa522qSoX2uNr7.jpg' },
    { id: 223344, name: 'Gift 17', image: 'Podarki/U-gvdmkTWjPgV8NExtI6x_ORvzm8dRsJnHlGNuaDbOFNuV4IYqxTFCrPdUxnN3kglhvZKwMcSkqP8XuobKmISqw9.jpg' },
    { id: 334455, name: 'Gift 18', image: 'Podarki/yt_J7wI1QXWg-N0-maMMcnaqhaztBWvzSgZnFNETvGZmYH0AlG56Ck0N4RUy15VELN8_xyDeS-TYO6nQOyZsI5RQ.jpg' },
    { id: 445566, name: 'Gift 19', image: 'Podarki/z2anmD8pr0VLH7jVPTFO1pgJnc5dxA_YMP3SQp2luFTAKRmbKk8w0M2doGhVoXh1KW0l4jJJK30-TKcUZMHTYcHl.jpg' }
];

// Render items
function renderItems() {
    const grid = document.getElementById('itemsGrid');
    grid.innerHTML = items.map(item => `
        <div class="item-card" onclick="selectItem(${item.id})">
            <div class="item-image" style="background-image: url('${item.image}')"></div>
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

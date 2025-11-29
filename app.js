// Telegram WebApp init
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
}

// Gift items data
const items = [
    { id: 412624, name: 'Spy Agaric', image: 'Podarki/0uf33H-Yiu_QcqEiIsxZboS551_EmnuHCgn2k4t_zniBabjh_KINi8nVuTw90QJNq3LBturEHkNK9oGTFCrbLoBE.jpg' },
    { id: 261691, name: 'Love Candle', image: 'Podarki/2aa-3-lu5Lw3YdosREpLJ4E08YNb2jJ6eMnEgpM8jBUhAV9uKMFKFPhgJncT_T-cCE9y2-9ORHrTXTpS7LLORYPo.jpg' },
    { id: 789012, name: 'Loot Bag', image: 'Podarki/5lq87YJ7LDTfFkuRRxonsC2W7h6_j7zw2dzbp5sIFZ_WOUEfCmdQbFVX9IbM3tIll0OkHsicxLyRh2s_9gb2xjAg.jpg' },
    { id: 345678, name: 'Swiss Watch', image: 'Podarki/5OW0WdxSgVwY68ZiDzROjCz0oweMdz9iCfAHZu3SoEsASbTnY88HPjMxz7_W5HKgROG5ek28E0Ol0rUzY8WgYso7.jpg' },
    { id: 901234, name: 'Lunar Snake', image: 'Podarki/aJ4EWAanwP1QptQlEN42rr_2AXasjsjoI3KetYNKvquR0B263By2ltGk61BMG239mzi29klae1wQ9hOZL9LvOLgq.jpg' },
    { id: 567890, name: 'Ginger Cookie', image: 'Podarki/dNj-L6xH0OAOmIvPflAsPZDwzs1gtvDe_3UDXCi6wtlKNNH9xrcgIyqhsH0m-HQfYUFiuHhlOnxq1SeWfHA1mqZw.jpg' },
    { id: 123456, name: 'Candy Cane', image: 'Podarki/EjpZ3KCmNI8fiMgprmjGX92wcAC13qGhDotNXessYTBf01B0kOE8E_drOxx3GgZ-T0UvlhD4myPNH9N_ulVpbqRl.jpg' },
    { id: 234567, name: 'Evil Eye', image: 'Podarki/gYE64PnvNEKn3ecSy_8kUE4xMP8_admYbEVGYvBDf73Df6MpdDEOc7qI1mk0ekQ2voX6vE8NQzE0_Fzahj57v4TM.jpg' },
    { id: 345679, name: 'Eternal Rose', image: 'Podarki/h5GJIMGOOHRI2D3YV2D8maNmoJijJgihDoZJmCu_Pa-UB6j91_cDCbe8cUDSKKL60_-vZFJvet_WvQ-e4vldbD3-.jpg' },
    { id: 456780, name: 'Swiss Watch', image: 'Podarki/KN2Shlyk65F44ZOZPcD9ILL-gWyAs2VGWCjXY43rtCzE5hfR2ylr_yAFwJGQwvoirvQ0DWZ3EKxwl3BAhpFB2qv6.jpg' },
    { id: 567891, name: 'Spiced Wine', image: 'Podarki/nJb-Ls6nBupPOBs2BcYt8F6MDZamgTdN11dkLz-SeqUc1_VSWqKSUkMEW9X3DQ2qooZasvADM0_3QxPsVwv7U5Bi.jpg' },
    { id: 678902, name: 'Jack-in-the-box', image: 'Podarki/oKBvQzW0Sw_chuybzXWh2Eol_lVSLVGWd60b3jxrdLAvIkAdURFeUau5bylcMraBv0PUxkYag2LVbycyOwCYqDyJ.jpg' },
    { id: 789013, name: 'Love Potion', image: 'Podarki/PH4bv9I6kCoUzPvIlyS67-A5MKGSXfq9E-3QeQmn6gmcu9Ieilx12zLUZj7oKVmBK3EJ_KBUS5WSu-Ia4-m4LxWH.jpg' },
    { id: 890124, name: 'Snoop Cigar', image: 'Podarki/sx145Za4RXpfWdTgmbGwG2pfsPC60EnajI9wYDL6Ph9BYz--KmITAEsFEjlEypNZbsSPr9d1uKwz5fB2E0dlGNAA.jpg' },
    { id: 901235, name: 'Mini Oscar', image: 'Podarki/Ti-7CRPNyCXyCoqBswf4sy8xhsRfBmC_ICWFVqQrM0BsdZFtne-_Ki2YUnZtEx33iOsjsS67FjT8UOjhBFIuDV-I.jpg' },
    { id: 112233, name: 'Swiss Watch', image: 'Podarki/TxqKn7KZ1JzlOo8ffW2TbVpowHFV5HyOGh4KWqk5OOW0xnopX30WwIy8cu_qqHmdmGTG-_myq1Qa522qSoX2uNr7.jpg' },
    { id: 223344, name: 'Easter Egg', image: 'Podarki/U-gvdmkTWjPgV8NExtI6x_ORvzm8dRsJnHlGNuaDbOFNuV4IYqxTFCrPdUxnN3kglhvZKwMcSkqP8XuobKmISqw9.jpg' },
    { id: 334455, name: 'Mad Pumpkin', image: 'Podarki/yt_J7wI1QXWg-N0-maMMcnaqhaztBWvzSgZnFNETvGZmYH0AlG56Ck0N4RUy15VELN8_xyDeS-TYO6nQOyZsI5RQ.jpg' },
    { id: 445566, name: 'Witch hat', image: 'Podarki/z2anmD8pr0VLH7jVPTFO1pgJnc5dxA_YMP3SQp2luFTAKRmbKk8w0M2doGhVoXh1KW0l4jJJK30-TKcUZMHTYcHl.jpg' }
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
    
    // Hide loading after 1 second
    setTimeout(hideLoading, 1000);
}

// Start when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

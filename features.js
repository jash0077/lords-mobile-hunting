// ==========================================
// PROFESSIONAL FEATURES MODULE
// ==========================================

// 1. SEARCH BAR - Search across all tools
const searchData = [
    { title: "Speedup Calculator", keywords: "speedup speed time calculator accelerator", url: "calculator.html", key: "speedup_calculator" },
    { title: "Monster Hunting", keywords: "monster hunting hero lineup guide", url: "hunting.html", key: "monster_hunting" },
    { title: "Training Calculator", keywords: "training troops tier resources calculator", url: "training.html", key: "training_calculator" },
    { title: "Troop Composition", keywords: "troop composition T5 T4 infantry ranged cavalry ratio split", url: "composition.html", key: "troop_composition" },
    { title: "Migration Guide", keywords: "migration guide kingdom move transfer", url: "migration.html", key: "migration_guide" },
    { title: "Research & Construction", keywords: "research construction speed boost guild helps", url: "research.html", key: "research_construction" }
];

function initSearch() {
    const searchContainer = document.getElementById('searchContainer');
    if (!searchContainer) return;

    const input = searchContainer.querySelector('#searchInput');
    const results = searchContainer.querySelector('#searchResults');

    input.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        if (query.length < 2) {
            results.style.display = 'none';
            return;
        }

        const lang = localStorage.getItem('selectedLanguage') || 'en';
        const currentTranslations = translations[lang] || translations['en'];

        const matches = searchData.filter(item => {
            const translatedTitle = currentTranslations[item.key] || item.title;
            return translatedTitle.toLowerCase().includes(query) || 
                   item.keywords.toLowerCase().includes(query) ||
                   item.title.toLowerCase().includes(query);
        });

        if (matches.length > 0) {
            results.innerHTML = matches.map(item => {
                const translatedTitle = currentTranslations[item.key] || item.title;
                return `<a href="${item.url}" class="search-result-item">${translatedTitle}</a>`;
            }).join('');
            results.style.display = 'block';
        } else {
            results.innerHTML = '<div class="search-result-item no-result">No results found</div>';
            results.style.display = 'block';
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) {
            results.style.display = 'none';
        }
    });
}

// 2. DARK/LIGHT MODE TOGGLE
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
}

function toggleTheme() {
    const current = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    // Update toggle icon
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// 3. AUTOMATIC BACKUPS - Save user inputs to localStorage
function initAutoBackup() {
    // Restore saved inputs on page load
    document.querySelectorAll('input[type="number"], input[type="text"], select').forEach(el => {
        const key = 'backup_' + window.location.pathname + '_' + (el.id || el.name);
        const saved = localStorage.getItem(key);
        if (saved && el.id !== 'searchInput') {
            el.value = saved;
        }

        // Auto-save on change
        el.addEventListener('input', function() {
            if (el.id !== 'searchInput') {
                localStorage.setItem(key, el.value);
            }
        });
    });
}

// 4. ERROR REPORTING
function initErrorReporting() {
    window.onerror = function(msg, url, lineNo, columnNo, error) {
        const errorLog = JSON.parse(localStorage.getItem('errorLog') || '[]');
        errorLog.push({
            message: msg,
            url: url,
            line: lineNo,
            column: columnNo,
            time: new Date().toISOString()
        });
        // Keep only last 20 errors
        if (errorLog.length > 20) errorLog.shift();
        localStorage.setItem('errorLog', JSON.stringify(errorLog));
        
        // Show subtle error notification
        showNotification('An error occurred. It has been logged.', 'error');
        return false;
    };
}

// 5. NOTIFICATION SYSTEM
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 6. OFFLINE STATUS INDICATOR
function initOfflineIndicator() {
    window.addEventListener('online', () => showNotification('Back online!', 'success'));
    window.addEventListener('offline', () => showNotification('You are offline. Cached content is available.', 'warning'));
}

// Initialize all features on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    initDarkMode();
    initAutoBackup();
    initErrorReporting();
    initOfflineIndicator();
});

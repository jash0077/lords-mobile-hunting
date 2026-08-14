function cycleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    let next = 'tactical';
    if (current === 'dark' || current === '') {
        next = 'tactical';
    } else {
        next = 'dark';
    }

    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('hem_current_theme', next);
    updateThemeButton(next);
}

function updateThemeButton(theme) {
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;
    if (theme === 'tactical') {
        btn.innerHTML = '<i class="fas fa-crown" style="color:var(--neon-gold)"></i> Royal Tactical';
    } else {
        btn.innerHTML = '<i class="fas fa-robot" style="color:var(--neon-purple)"></i> Cyberpunk';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('hem_current_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
});

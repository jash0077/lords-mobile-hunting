function cycleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    let next = 'light';
    if (current === 'dark') next = 'light';
    else if (current === 'light') next = 'bw';
    else next = 'dark';

    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('hem_current_theme', next);
    updateThemeButton(next);
}

function updateThemeButton(theme) {
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;
    if (theme === 'dark') {
        btn.innerHTML = '<i class="fas fa-moon"></i> Dark';
    } else if (theme === 'light') {
        btn.innerHTML = '<i class="fas fa-sun"></i> Light';
    } else {
        btn.innerHTML = '<i class="fas fa-circle-half-stroke"></i> B&W';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('hem_current_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
});

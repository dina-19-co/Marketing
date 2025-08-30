

// تحسين: استخدام requestAnimationFrame للحركات
function animateElement(element) {
    requestAnimationFrame(() => {
        element.style.transform = 'translateY(0)';
    });
}

// تحسين: استخدام localStorage لتخزين تفضيلات المستخدم
function saveUserPreferences() {
    localStorage.setItem('language', currentLanguage);
    localStorage.setItem('theme', currentTheme);
}

function loadUserPreferences() {
    const lang = localStorage.getItem('language');
    if (lang) currentLanguage = lang;
    
    const theme = localStorage.getItem('theme');
    if (theme) setTheme(theme);
}
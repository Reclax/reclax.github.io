document.addEventListener('DOMContentLoaded', function () {
    const darkModeIcon = document.getElementById('darkMode-icon');
    const body = document.body;
    const isDarkModeSaved = localStorage.getItem('darkMode') === 'true';
    if (isDarkModeSaved) {
        enableDarkMode();
    }

    darkModeIcon.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        darkModeIcon.classList.add('bx-sun');
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
        applyDarkModeStyles();
    }

    function disableDarkMode() {
        darkModeIcon.classList.remove('bx-sun');
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
        applyDarkModeStyles();
    }
    function applyDarkModeStyles() {
        const elementsToStyle = document.querySelectorAll('.dark-mode-affected');
        elementsToStyle.forEach(element => {
            element.style.backgroundColor = body.classList.contains('dark-mode') ? '#1a1a1a' : '';
            element.style.color = body.classList.contains('dark-mode') ? '#ffffff' : '';
        });
    }
});
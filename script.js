const btn = document.getElementById('mode-toggle');

btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        btn.textContent = "Passer en Mode Clair ☀️";
    } else {
        btn.textContent = "Passer en Mode Sombre 🌙";
    }
});
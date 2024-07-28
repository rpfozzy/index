window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(function() {
        document.querySelector('.loader-wrapper').style.display = 'none';
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    let progressBar = document.getElementById('progress-bar');
    let progress = 0;

    function updateProgress() {
        progress += Math.floor(Math.random() * 5) + 1;
        if (progress > 100) progress = 100;
        progressBar.style.width = progress + '%';

        if (progress < 100) {
            setTimeout(updateProgress, 100);
        }
    }

    updateProgress();
});
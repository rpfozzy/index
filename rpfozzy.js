setTimeout(function() {
            document.body.classList.add('loaded');
            setTimeout(function() {
                document.querySelector('.loader-wrapper').style.display = 'none';
            }, 1000);
        }, 4000);
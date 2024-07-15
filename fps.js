let fpsCounter = document.getElementById('fps-counter');
        let activateButton = document.getElementById('activate-button');
        let lastFrameTime = performance.now();
        let frameCount = 0;
        let fps = 0;
        let isFPSActive = false;
        let animationFrameId;
        let currentFPS = 0;

        function updateFPS() {
            let now = performance.now();
            frameCount++;

            if (now >= lastFrameTime + 1000) {
                fps = (frameCount * 1000) / (now - lastFrameTime);
                lastFrameTime = now;
                frameCount = 0;
            }

            // Плавное обновление FPS
            currentFPS += (fps - currentFPS) * 0.05;
            fpsCounter.textContent = `FPS: ${currentFPS.toFixed(1)}`;

            if (isFPSActive) {
                animationFrameId = requestAnimationFrame(updateFPS);
            }
        }

        activateButton.addEventListener('click', () => {
            isFPSActive = !isFPSActive;
            if (isFPSActive) {
                fpsCounter.classList.add('active'); // Показываем счетчик с анимацией
                lastFrameTime = performance.now(); // Сбрасываем таймер
                frameCount = 0;
                currentFPS = 0; // Сбрасываем текущее значение FPS
                updateFPS(); // Запускаем обновление FPS
            } else {
                fpsCounter.classList.remove('active'); // Скрываем счетчик с анимацией
                cancelAnimationFrame(animationFrameId); // Останавливаем обновление FPS
            }
        });

        let isButtonPressed = false;
        let initialX;
        let initialY;

        activateButton.addEventListener('mousedown', (event) => {
            event.preventDefault(); // Предотвращаем выделение текста
            isButtonPressed = true;
            initialX = event.clientX - activateButton.getBoundingClientRect().left;
            initialY = event.clientY - activateButton.getBoundingClientRect().top;
        });

        activateButton.addEventListener('mousemove', (event) => {
            if (isButtonPressed) {
                const newX = event.clientX - initialX;
                const newY = event.clientY - initialY;
                activateButton.style.left = `${newX}px`;
                activateButton.style.top = `${newY}px`;
            }
        });

        activateButton.addEventListener('touchmove', (event) => {
            if (isButtonPressed) {
                const newX = event.touches[0].clientX - initialX;
                const newY = event.touches[0].clientY - initialY;
                activateButton.style.left = `${newX}px`;
                activateButton.style.top = `${newY}px`;
            }
        });

        window.addEventListener('mouseup', () => {
            isButtonPressed = false;
        });

        window.addEventListener('touchend', () => {
            isButtonPressed = false;
        });
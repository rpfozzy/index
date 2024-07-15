  // Логика для правой панели (поиск)
            const searchButton = document.getElementById('search-button');
            const searchInput = document.getElementById('search-input');
            const searchField = document.getElementById('search-field');
            const searchSubmit = document.getElementById('search-submit');
            const searchCancel = document.getElementById('search-cancel');
            const searchResults = document.getElementById('search-results');

            searchButton.addEventListener('click', () => {
                searchInput.classList.toggle('show');
                searchResults.classList.remove('show'); // Скрыть результаты при открытии поиска
            });

            searchSubmit.addEventListener('click', () => {
                const searchTerm = searchField.value.trim();
                if (searchTerm) {
                    const results = [];
                    const elements = document.body.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, td, th'); // Only search within these elements
                    for (let i = 0; i < elements.length; i++) {
                        if (elements[i].innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
                            results.push(elements[i]);
                        }
                    }

                    searchResults.innerHTML = '';
                    for (let i = 0; i < results.length; i++) {
                        const result = results[i];
                        const listItem = document.createElement('li');
                        listItem.textContent = result.innerText;
                        listItem.addEventListener('click', () => {
                            const viewportHeight = window.innerHeight;
                            const elementRect = result.getBoundingClientRect();
                            const elementY = elementRect.top + window.scrollY;
                            const scrollToY = elementY - (viewportHeight / 2);
                            window.scrollTo({
                                top: scrollToY,
                                behavior: 'smooth'
                            });
                            result.classList.add('highlight-pulse'); // Применяем класс с анимацией
                            setTimeout(() => {
                                result.classList.remove('highlight-pulse'); // Убираем анимацию через 2 секунды
                            }, 4000);
                            searchCancel.click(); // Закрываем результаты поиска при клике на элементе списка
                        });
                        searchResults.appendChild(listItem);
                    }

                    searchResults.classList.add('show');
                }
            });

            searchCancel.addEventListener('click', () => {
                searchInput.classList.remove('show');
                searchResults.classList.remove('show');
            });
const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
        
        // Read more/less functionality
        const readMoreBtns = document.querySelectorAll('.read-more-btn');
        
        readMoreBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const newsContent = btn.parentElement;
                const newsSummary = newsContent.querySelector('.news-summary');
                const newsFull = newsContent.querySelector('.news-full');
                
                if (newsFull.style.display === 'block') {
                    // Collapse the article
                    newsFull.style.display = 'none';
                    newsSummary.style.display = 'block';
                    btn.textContent = 'Read more';
                } else {
                    // Expand the article
                    newsFull.style.display = 'block';
                    newsSummary.style.display = 'none';
                    btn.textContent = 'Read less';
                }
            });
        });
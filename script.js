const modal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalLink = document.getElementById('modalLink');

        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                const projectTitle = card.querySelector('h3').textContent;
                const projectDescription = card.querySelector('p').textContent;
                const projectLink = card.querySelector('a').href;

                modalTitle.textContent = projectTitle;
                modalDescription.textContent = projectDescription;
                modalLink.href = projectLink;

                modal.classList.add('active');
            });
        });

        document.querySelector('.close').onclick = () => modal.classList.remove('active');
        modal.onclick = e => e.target === modal && modal.classList.remove('active');
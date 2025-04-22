const filterButton = document.querySelectorAll('.filter-btn');
const scrollcontainer = document.querySelectorAll('.scroll-container');
const sectioncontent = document.querySelectorAll('.section-content');

filterButton.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        // Update active button
        filterButton.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter cards with fade effect
        scrollcontainer.forEach(container => {
            if (filter === 'all' || container.dataset.category === filter) {
                container.classList.remove('hidden');
            }
            else{
                container.classList.add('hidden');
            }
        });
        sectioncontent.forEach(content => {
            if (filter === 'all' || content.dataset.category === filter) {
                content.classList.remove('hidden');
            }
            else{
                content.classList.add('hidden');
            }
        });
        } )
    });


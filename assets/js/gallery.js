 document.addEventListener('DOMContentLoaded', () => {
            // Image Database
            const photos = [
                { id: 1, url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", title: "Emma & James Wedding", category: "weddings", cssClass: "md:col-span-2 md:aspect-[2/1]" },
                { id: 2, url: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=2000&auto=format&fit=crop", title: "Autumn Walk", category: "portraits", cssClass: "md:row-span-2 md:aspect-[1/2]" },
                { id: 3, url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop", title: "The Details", category: "weddings", cssClass: "" },
                { id: 4, url: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2000&auto=format&fit=crop", title: "Zurich Lake Shoot", category: "portraits", cssClass: "" },
                { id: 5, url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop", title: "First Look", category: "weddings", cssClass: "md:col-span-2 md:aspect-[2/1]" },
                { id: 6, url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2000&auto=format&fit=crop", title: "Urban Couple", category: "portraits", cssClass: "md:row-span-2 md:aspect-[1/2]" },
                { id: 7, url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop", title: "Reception Joy", category: "weddings", cssClass: "" },
                { id: 8, url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop", title: "Mountain Engagement", category: "portraits", cssClass: "md:col-span-2 md:aspect-[2/1]" },
                { id: 9, url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2000&auto=format&fit=crop", title: "Golden Hour", category: "portraits", cssClass: "" },
                { id: 10, url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop", title: "Vows", category: "weddings", cssClass: "md:col-span-2 md:aspect-[2/1]" },
                { id: 11, url: "https://images.unsplash.com/photo-1518144591331-17a5dd71c477?q=80&w=2000&auto=format&fit=crop", title: "City Lights", category: "portraits", cssClass: "md:row-span-2 md:aspect-[1/2]" },
                { id: 12, url: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=2000&auto=format&fit=crop", title: "First Dance", category: "weddings", cssClass: "" },
                { id: 13, url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2000&auto=format&fit=crop", title: "Together", category: "portraits", cssClass: "md:row-span-2 md:aspect-[1/2]" },
                { id: 14, url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2000&auto=format&fit=crop", title: "Sunset Walk", category: "portraits", cssClass: "" }
            ];

            const container = document.getElementById('gallery-container');
            
            const renderGallery = (filter = 'all') => {
                container.innerHTML = '';
                
                const filtered = filter === 'all' ? photos : photos.filter(p => p.category === filter);
                
                filtered.forEach(photo => {
                    const itemHTML = `
                        <div class="gallery-item relative overflow-hidden rounded-lg cursor-pointer shadow-md bg-cardDark aspect-square group ${photo.cssClass}" data-src="${photo.url}" data-title="${photo.title}">
                            <img src="${photo.url}" alt="${photo.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500">
                            <div class="absolute inset-0 bg-gallery-overlay backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-white z-10">
                                <h3 class="font-heading text-xl mb-1">${photo.title}</h3>
                                <span class="text-xs uppercase tracking-wider text-accent">${photo.category}</span>
                            </div>
                        </div>
                    `;
                    container.insertAdjacentHTML('beforeend', itemHTML);
                });

                // Attach Lightbox event listeners to new elements
                document.querySelectorAll('.gallery-item').forEach(item => {
                    item.addEventListener('click', () => openLightbox(item.dataset.src, item.dataset.title));
                });
            };

            // Initial Render
            renderGallery('all');

            // Filtering Logic
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    filterBtns.forEach(b => {
                        b.classList.remove('bg-primary', 'text-white', 'border-primary');
                        b.classList.add('bg-transparent', 'text-textDark', 'dark:text-gray-300', 'border-gray-300', 'dark:border-gray-700', 'hover:border-primary', 'hover:text-primary');
                    });
                    
                    const clicked = e.target;
                    clicked.classList.remove('bg-transparent', 'text-textDark', 'dark:text-gray-300', 'border-gray-300', 'dark:border-gray-700', 'hover:border-primary', 'hover:text-primary');
                    clicked.classList.add('bg-primary', 'text-white', 'border-primary');
                    
                    renderGallery(clicked.dataset.filter);
                });
            });

            // Lightbox Logic
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            const closeBtn = document.getElementById('lightbox-close');

            const openLightbox = (src, title) => {
                lightboxImg.src = src;
                lightboxCaption.textContent = title;
                lightbox.classList.remove('hidden');
                setTimeout(() => lightbox.classList.remove('opacity-0'), 10);
            };

            const closeLightbox = () => {
                lightbox.classList.add('opacity-0');
                setTimeout(() => lightbox.classList.add('hidden'), 300);
            };

            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) closeLightbox();
            });
        });
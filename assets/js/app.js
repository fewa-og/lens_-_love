document.addEventListener('DOMContentLoaded', () => {
    // Theme Configuration
    const storedTheme = localStorage.getItem('theme');
    let isDark = false;

    if (storedTheme === 'light') {
        isDark = false;
    } else if (storedTheme === 'dark') {
        isDark = true;
    }

    const applyTheme = (dark) => {
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };
    applyTheme(isDark);

    // Inject Navbar (Templating)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // Check Pseudo-Login Status
    const user = localStorage.getItem('loggedInUser');
    const loginLink = user 
        ? `<span class="text-sm font-body text-amber-500">Hello, ${user}</span><button id="logout-btn" class="text-sm font-body hover:text-amber-500 ml-2 text-red-500 font-bold">Logout</button>`
        : `<a href="#" id="login-modal-open" class="text-sm font-body hover:text-amber-500 underline">Login</a>`;

    const navHTML = `
        <nav class="w-full bg-nav-blur backdrop-blur-lg text-textDark dark:text-textLight shadow-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-20">
                    <div class="flex items-center">
                        <a href="index.html" class="font-heading text-2xl font-bold tracking-wider text-primary dark:text-primary">Lens & Love</a>
                    </div>
                    
                    <!-- Desktop Nav -->
                    <div class="hidden md:flex flex-1 justify-center items-center space-x-8">
                        <a href="index.html" class="nav-link ${currentPath === 'index.html' ? 'text-accent font-semibold' : 'hover:text-accent'} font-body transition-colors">Home</a>
                        <a href="about.html" class="nav-link ${currentPath === 'about.html' ? 'text-accent font-semibold' : 'hover:text-accent'} font-body transition-colors">About Us</a>
                        <a href="gallery.html" class="nav-link ${currentPath === 'gallery.html' ? 'text-accent font-semibold' : 'hover:text-accent'} font-body transition-colors">Portfolio</a>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <button id="theme-toggle" aria-label="Toggle Theme" class="p-2 rounded-full bg-gray-200 dark:bg-cardDark text-textDark dark:text-accent hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors">
                            <svg class="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            <!-- Moon icon -->
                            <svg class="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                        </button>
                        
                        <!-- Login Area -->
                        <div class="hidden md:block mr-2" id="nav-login-area">
                            ${loginLink}
                        </div>
                        
                        <!-- Mobile Menu Button -->
                        <button id="mobile-menu-btn" class="md:hidden p-2">
                             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden bg-lightBg dark:bg-darkBg border-t border-gray-200 dark:border-gray-800 px-4 pt-2 pb-4 space-y-1 sm:px-3">
                <a href="index.html" class="block px-3 py-2 rounded-md font-body text-base font-medium">Home</a>
                <a href="about.html" class="block px-3 py-2 rounded-md font-body text-base font-medium">About Us</a>
                <a href="gallery.html" class="block px-3 py-2 rounded-md font-body text-base font-medium">Portfolio</a>
                <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    ${loginLink.replace('text-sm', 'text-base block')}
                </div>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Inject Pseudo-Login Modal
    const loginModalHTML = `
        <div id="login-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div class="bg-cardLight dark:bg-cardDark text-textDark dark:text-textLight w-full max-w-sm rounded-xl p-8 shadow-2xl relative transition-colors duration-300">
                <button id="close-login" class="absolute top-4 right-4 text-gray-500 hover:text-textDark dark:hover:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <h2 class="font-heading text-2xl font-bold mb-6 text-center text-primary">Client Login</h2>
                <form id="pseudo-login-form" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium mb-1 opacity-80">E-Mail</label>
                        <input type="email" id="login-email" required class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-cardLight dark:bg-darkBg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your email">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1 opacity-80">Password</label>
                        <input type="password" id="login-password" required class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-cardLight dark:bg-darkBg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="••••••••">
                    </div>
                    <div class="flex justify-between items-center text-sm pt-2">
                        <a href="password-forgot.html" class="text-accent hover:underline">Forgot Password?</a>
                    </div>
                    <button type="submit" class="btn-primary w-full py-2">Login</button>
                    <p class="text-xs text-center text-gray-500 mt-4">(Pseudo-Login: Any email works. Saves to localStorage)</p>
                </form>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', loginModalHTML);

    // Inject Footer
    const footerHTML = `
        <footer class="bg-gray-100 dark:bg-black text-textDark dark:text-gray-400 py-12 border-t border-gray-200 dark:border-gray-800 mt-auto transition-colors duration-300 w-full">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <h2 class="font-heading text-xl font-bold mb-4 text-primary dark:text-primary">Lens & Love</h2>
                <div class="flex space-x-6 mb-6">
                    <a href="#" class="hover:text-accent transition-colors">Instagram</a>
                    <a href="#" class="hover:text-accent transition-colors">Facebook</a>
                    <a href="#" class="hover:text-accent transition-colors">Pinterest</a>
                </div>
                <p class="font-body text-sm text-center max-w-md opacity-80 mb-4">Capturing authentic moments in Zurich, Switzerland and worldwide.</p>
                <p class="font-body text-xs opacity-60">&copy; 2026 Lens & Love Photography. All rights reserved.</p>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);


    // --- Event Listeners ---

    // Theme Toggle Activity
    document.getElementById('theme-toggle').addEventListener('click', () => {
        isDark = !document.documentElement.classList.contains('dark');
        applyTheme(isDark);
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Login Modal Handlers
    const loginModalsOpen = document.querySelectorAll('#login-modal-open');
    const loginModal = document.getElementById('login-modal');
    const closeLogin = document.getElementById('close-login');
    const loginForm = document.getElementById('pseudo-login-form');
    const logoutBtn = document.getElementById('logout-btn');

    loginModalsOpen.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.remove('hidden');
        });
    });

    if(closeLogin) {
        closeLogin.addEventListener('click', () => {
            loginModal.classList.add('hidden');
        });
    }

    // Login Submit Pseudo
    if(loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const name = email.split('@')[0];
            localStorage.setItem('loggedInUser', name);
            window.location.reload(); 
        });
    }

    if(logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            window.location.reload();
        });
    }
});

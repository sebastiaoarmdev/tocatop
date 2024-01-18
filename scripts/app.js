const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("./sw.js");
            if (registration.installing) {
                console.log('[Service Worker] Installing.');
            } else if (registration.waiting) {
                console.log('[Service Worker] Waiting.');
            } else if (registration.active) {
                console.log('[Service Worker] Active.');
            }
        } catch (error) {
            console.error(`[Service Worker] Registration failed. Error: ${error}`);
        }
    }
}

registerServiceWorker();

window.onload = function() {
    let deferredPrompt;
    const addBtn = document.querySelector('#install-button');
    
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('beforeinstallprompt...');
        addBtn.style.display = 'block';
        e.preventDefault();
        deferredPrompt = e;
        addBtn.addEventListener('click', (e) => {
            addBtn.style.display = 'none';
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the prompt.');
                    
                } else {
                    console.log('User dismissed the prompt.');
                }
                deferredPrompt = null;
            });
        });
    });
   
};
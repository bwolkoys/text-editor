const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); //prevents mini bar from showing up on mobile
    window.deferredPrompt = event; //stashes the event but doesnt delete to use trigger later
    // Update UI to notify the user they can install the PWA
    butInstall.style.display = 'block';
    butInstall.textContent = 'install'
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
     butInstall.style.display = 'none'; //hides the install button
     deferredPrompt.prompt(); //shows the install prompt
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('app is installed.'); //shows in the console that the app is installed
});

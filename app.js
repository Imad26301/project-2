document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupQuickActions();
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Voorlopig preventDefault voor demo
            e.preventDefault();
            
            // Verwijder active class van alle links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Voeg active class toe aan geklikte link
            link.classList.add('active');
            
            // Hier later: pagina laden via AJAX/Fetch
            console.log(`Navigeren naar: ${link.getAttribute('href')}`);
        });
    });
}

function setupQuickActions() {
    // Nieuwe overschrijving knop
    const newTransferBtn = document.getElementById('newTransfer');
    if (newTransferBtn) {
        newTransferBtn.addEventListener('click', () => {
            console.log('Nieuwe overschrijving starten...');
            // Hier later: overschrijvingsformulier tonen
        });
    }

    // Saldo bekijken knop
    const checkBalanceBtn = document.getElementById('checkBalance');
    if (checkBalanceBtn) {
        checkBalanceBtn.addEventListener('click', () => {
            console.log('Saldo ophalen...');
            // Hier later: saldo ophalen en tonen
        });
    }
}

// Hulpfuncties voor later gebruik
function loadPage(url) {
    return fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector('main').innerHTML = html;
        })
        .catch(error => {
            console.error('Fout bij het laden van de pagina:', error);
        });
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount);
}

// Check if user has already made a choice
window.addEventListener('load', function () {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
});

function acceptAll() {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('analyticsCookies', 'true');
    localStorage.setItem('marketingCookies', 'true');
    hideBanner();
}

function rejectAll() {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('analyticsCookies', 'false');
    localStorage.setItem('marketingCookies', 'false');
    hideBanner();
}

function openCustomize() {
    document.getElementById('customize-modal').classList.remove('hidden');
    // Load saved preferences
    const analyticsCookies = localStorage.getItem('analyticsCookies') === 'true';
    const marketingCookies = localStorage.getItem('marketingCookies') === 'true';
    document.getElementById('analytics-cookies').checked = analyticsCookies;
    document.getElementById('marketing-cookies').checked = marketingCookies;
}

function closeCustomize() {
    document.getElementById('customize-modal').classList.add('hidden');
}

function savePreferences() {
    const analyticsCookies = document.getElementById('analytics-cookies').checked;
    const marketingCookies = document.getElementById('marketing-cookies').checked;

    localStorage.setItem('cookieConsent', 'customized');
    localStorage.setItem('analyticsCookies', analyticsCookies);
    localStorage.setItem('marketingCookies', marketingCookies);

    closeCustomize();
    hideBanner();
}

function hideBanner() {
    const banner = document.getElementById('cookie-banner');
    banner.style.transform = 'translateY(100%)';
    setTimeout(() => {
        banner.style.display = 'none';
    }, 1000);
}

// Close modal when clicking outside
document.getElementById('customize-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeCustomize();
    }
});
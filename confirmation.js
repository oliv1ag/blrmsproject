// Transaction confirmation
document.addEventListener('DOMContentLoaded', function () {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role');

    // Determine the redirect URL based on the role
    let redirectTo;
    if (role === 'seller') {
        redirectTo = 'summary.html';
    } else{
        redirectTo = 'surveysummary.html';
    }

    // Set timeout for navigation after 10 seconds
    setTimeout(function () {
        window.location.href = redirectTo;
    }, 10000); // 10 seconds delay
});

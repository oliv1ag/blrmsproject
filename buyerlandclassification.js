function Header() {
  return (
    <div className="Header-div">
        <img src="Pictures/BLRMS.png" className="Logo" id="logo"/>
        <h1 className="heading-css">Blockchain based Land Registration and Management</h1>
        <input type="text" id="search-input" className="search-bar" placeholder="Search"/>
        <img src="Pictures/icons8-male-user-50.png" className="profile-css" id="profile-image"/>
    </div>
  );
}

ReactDOM.render(
  <Header />,
  document.getElementById('header-root')
);

const lands = document.querySelectorAll('.nav-button');

// Loop through each element in the NodeList
lands.forEach(land => {
  // Add click event listener to each element
  land.addEventListener('click', function () {
    // Redirect to landtemplate.html when any button is clicked
    window.location.href = 'landtemplate.html';
  });
});

document.getElementById('profile-image').addEventListener('click', function() {
  window.location.href = 'profile_page.html';
});

document.getElementById('logo').addEventListener('click', function() {
  window.location.href = 'home.html';
});

document.getElementById('government').addEventListener('click', function() {
  window.location.href = 'governmentlands.html';
});

document.getElementById('nongovernment').addEventListener('click', function() {
  window.location.href = 'non-governmentlands.html';
});

// Select all wishlist buttons
const wishlistButtons = document.querySelectorAll('.wishlist-button');

// Add click event listener to each wishlist button
wishlistButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        // Prevent default behavior (i.e., redirecting)
        event.preventDefault();
        // Your wishlist logic here, for example, alerting the user
        alert('Added to Wishlist!');
        // Stop event propagation to prevent redirecting
        event.stopPropagation();
    });
});

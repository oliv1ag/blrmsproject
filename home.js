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
document.getElementById('buyer').addEventListener('click', function() {
  window.location.href = 'buyerlandclassification.html';
});
document.getElementById('profile-image').addEventListener('click', function() {
  window.location.href = 'profile_page.html';
}); 
document.getElementById('seller').addEventListener('click', function() {
  window.location.href = 'sellerlanddetails.html';
});

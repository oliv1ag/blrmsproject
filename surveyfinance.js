function buyLand() {
  alert("Proceeding to payment!");
  window.location.href = "transaction.html?role=buyer";
}

function LandDetails() {
  return (
      <div className="land-details">
          <img src="https://via.placeholder.com/150" alt="Land Image" />
          <div className="details">
              <p><strong>Owner:</strong> </p>
              <p><strong>Address:</strong> </p>
              <p><strong>Area Length:</strong> </p>
              <p><strong>Price:</strong> </p>
          </div>
      </div>
  );
}

function PriceSection() {
  return (
      <div className="price-section">
          <p><strong>Land Survey Fee:</strong> </p>
      </div>
  );
}

function BuyButton() {
  return (
      <div className="buy-button">
          <button onClick={buyLand}>Proceed</button>
      </div>
  );
}

ReactDOM.render(<LandDetails />, document.getElementById('LandDetails'));
ReactDOM.render(<PriceSection />, document.getElementById('PriceSection'));
ReactDOM.render(<BuyButton />, document.getElementById('BuyButton'));

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

document.getElementById('profile-image').addEventListener('click', function() {
  window.location.href = 'profile_page.html';
});
document.getElementById('logo').addEventListener('click', function() {
  window.location.href = 'home.html';
});

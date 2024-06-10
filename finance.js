function buyLand() {
  alert("Proceeding to buy the land!");
  window.location.href = "transaction.html?role=seller";
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
          <p><strong>Price of the Land:</strong> </p>
      </div>
  );
}

function TaxesSection() {
  return (
      <div className="taxes-section">
          <p><strong>Taxes:</strong></p>
          <p>Property Tax: </p>
          <p>Registration Tax: </p>
          <p>Service Tax: </p>
      </div>
  );
}

function TotalAmount() {
  return (
      <div className="total-amount">
          <p><strong>Total Amount:</strong> </p>
      </div>
  );
}

function BuyButton() {
  return (
      <div className="buy-button">
          <button onClick={buyLand}>Buy</button>
      </div>
  );
}

ReactDOM.render(<LandDetails />, document.getElementById('LandDetails'));
ReactDOM.render(<PriceSection />, document.getElementById('PriceSection'));
ReactDOM.render(<TaxesSection />, document.getElementById('TaxesSection'));
ReactDOM.render(<TotalAmount />, document.getElementById('TotalAmount'));
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

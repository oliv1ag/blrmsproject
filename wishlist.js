function Product1() {
    return (
        <div className="product1">
            <img src="https://via.placeholder.com/150" alt="Product Image"/>
            <div className="owner-name">Owner:</div>
            <div className="address">Address:</div>
            <div className="price">Price:</div>
        </div>
    );
}
function Product2() {
    return(
    <div className="product2">
    <img src="https://via.placeholder.com/150" alt="Product Image"/>
    <div className="owner-name">Owner:</div>
    <div className="address">Address:</div>
    <div className="price">Price:</div>
</div>
);

}
function Product3() {
    return(
        <div className="product3">
        <img src="https://via.placeholder.com/150" alt="Product Image"/>
        <div className="owner-name">Owner:</div>
        <div className="address">Address:</div>
        <div className="price">Price:</div>
    </div>
    );
}
function Product4() {
    return(
        <div className="product4">
                <img src="https://via.placeholder.com/150" alt="Product Image"/>
                <div className="owner-name">Owner:</div>
                <div className="address">Address:</div>
                <div className="price">Price:</div>
            </div>
    );
}
function Product5() {
    return(
        <div className="product5">
                <img src="https://via.placeholder.com/150" alt="Product Image"/>
                <div className="owner-name">Owner:</div>
                <div className="address">Address:</div>
                <div className="price">Price:</div>
            </div>
    );
}
function Product6() {
    return(
        <div className="product6">
        <img src="https://via.placeholder.com/150" alt="Product Image"/>
        <div className="owner-name">Owner:</div>
        <div className="address">Address:</div>
        <div className="price">Price:</div>
    </div>
    );
}
function Product7() {
    return(
        <div className="product7">
                <img src="https://via.placeholder.com/150" alt="Product Image"/>
                <div className="owner-name">Owner:</div>
                <div className="address">Address:</div>
                <div className="price">Price:</div>
            </div>
    );
}
function Product8() {
    return(
        <div className="product8">
               <img src="https://via.placeholder.com/150" alt="Product Image"/>
                <div className="owner-name">Owner:</div>
                <div className="address">Address:</div>
                <div className="price">Price:</div>
            </div>
    );
}
function Product9() {
    return(
        <div className="product9">
              <img src="https://via.placeholder.com/150" alt="Product Image"/>
                <div className="owner-name">Owner: </div>
                <div className="address">Address:</div>
                <div className="price">Price:</div>
            </div>
    );
}
ReactDOM.render(
    <h1 className="main-heading">Your Wishlist</h1>,
    document.getElementById('main-title')
);

ReactDOM.render(
    <Product1 />,
    document.getElementById('product1')
);
ReactDOM.render(
    <Product2 />,
    document.getElementById('product2')
);
ReactDOM.render(
    <Product3 />,
    document.getElementById('product3')
);
ReactDOM.render(
    <Product4 />,
    document.getElementById('product4')
);
ReactDOM.render(
    <Product5 />,
    document.getElementById('product5')
);
ReactDOM.render(
    <Product6 />,
    document.getElementById('product6')
);
ReactDOM.render(
    <Product7 />,
    document.getElementById('product7')
);
ReactDOM.render(
    <Product8 />,
    document.getElementById('product8')
);
ReactDOM.render(
    <Product9 />,
    document.getElementById('product9')
);
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
  const lands = document.querySelectorAll('.nav-button');
// Loop through each element in the NodeList
lands.forEach(land => {
  // Add click event listener to each element
  land.addEventListener('click', function () {
    // Redirect to landtemplate.html when any button is clicked
    window.location.href = 'landtemplate.html';
  });
});

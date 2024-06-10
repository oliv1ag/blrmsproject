function Ownername() {
    return (
        <div className="Ownername-div">
            <input type="text" id="owner-name-input" className="owner-name-input wide-input" placeholder="Owner Name" />
        </div>
    );
}
ReactDOM.render(
    <Ownername />,
    document.getElementById('owner-name')
);

function Location() {
    return (
        <div className="location-div">
            <input type="text" id="location" className="location wide-input" placeholder="Location" />
        </div>
    );
}
ReactDOM.render(
    <Location />,
    document.getElementById('location-id')
);

function Price() {
    return (
        <div className="price-div">
            <input type="text" id="price" name="price" className="wide-input" placeholder="Price" />
        </div>
    );
}
ReactDOM.render(
    <Price />,
    document.getElementById('price-id')
);

function Acres() {
    return (
        <div className="acres-div">
            <input type="text" id="Acres" name="acres" className="wide-input" placeholder="Acres" />
        </div>
    );
}
ReactDOM.render(
    <Acres />,
    document.getElementById('acres-id')
);

function Registrationnumber() {
    return (
        <div className="registration-number-div">
            <input type="text" id="Registrationnumber" name="registration-number" className="wide-input" placeholder="Registration Number" />
        </div>
    );
}
ReactDOM.render(
    <Registrationnumber />,
    document.getElementById('registration-number')
);

function Surveynumber() {
    return (
        <div className="Surveynumber-div">
            <input type="text" id="survey-number-input" name="survey-number" className="wide-input" placeholder="Survey Number" />
        </div>
    );
}
ReactDOM.render(
    <Surveynumber />,
    document.getElementById('survey-number')
);

function Latitude() {
    return (
        <div className="Latitude-div">
            <input type="text" id="latitude-input" name="latitude" className="wide-input" placeholder="Latitude" />
        </div>
    );
}
ReactDOM.render(
    <Latitude />,
    document.getElementById('latitude')
);

function Longitude() {
    return (
        <div className="Longitude-div">
            <input type="text" id="longitude-input" name="longitude" className="wide-input" placeholder="Longitude" />
        </div>
    );
}
ReactDOM.render(
    <Longitude />,
    document.getElementById('longitude')
);

function History() {
    return (
        <div className="History-div">
            <input type="text" id="history-input" name="history" className="wide-input" placeholder="History" />
        </div>
    );
}
ReactDOM.render(
    <History />,
    document.getElementById('history')
);

// Function to open location in Google Maps
function openInGoogleMaps() {
    const location = document.getElementById('location').value;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    window.open(googleMapsUrl, '_blank');
}

// Render Google Maps button
function GoogleMapsButton() {
    return (
        <button type="button" onClick={openInGoogleMaps} className="wide-input">
            Open in Google Maps
        </button>
    );
}

ReactDOM.render(
    <GoogleMapsButton />,
    document.getElementById('google-maps-button')
);

// Function to handle buy button click
function handleBuyButtonClick() {
    window.location.href = 'finance.html';
}

// Render Buy button
function BuyButton() {
    return (
        <button type="button" onClick={handleBuyButtonClick} className="wide-input">
            Buy
        </button>
    );
}

ReactDOM.render(
    <BuyButton />,
    document.getElementById('buy-button')
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
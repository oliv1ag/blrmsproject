const properties = [
    { id: 1, ownerName: "John Doe", propertyAddress: "123 Main St", propertyDetails: "2 acres of farmland", surveyNumber: "SN123456", registrationNumber: "RN654321", imageUrl: "path/to/image1.jpg" },
    { id: 2, ownerName: "Jane Smith", propertyAddress: "456 Oak St", propertyDetails: "Vacant lot", surveyNumber: "SN789012", registrationNumber: "RN210987", imageUrl: "path/to/image2.jpg" },
    { id: 3, ownerName: "Emily Johnson", propertyAddress: "789 Pine St", propertyDetails: "1.5 acres of residential land", surveyNumber: "SN345678", registrationNumber: "RN876543", imageUrl: "path/to/image3.jpg" },
    { id: 4, ownerName: "Michael Brown", propertyAddress: "321 Birch St", propertyDetails: "Commercial land", surveyNumber: "SN901234", registrationNumber: "RN432109", imageUrl: "path/to/image4.jpg" },
    { id: 5, ownerName: "William Davis", propertyAddress: "222 Maple St", propertyDetails: "5 acres of farmland", surveyNumber: "SN112233", registrationNumber: "RN332211", imageUrl: "path/to/image5.jpg" },
    { id: 6, ownerName: "Elizabeth Garcia", propertyAddress: "555 Elm St", propertyDetails: "Vacant lot", surveyNumber: "SN445566", registrationNumber: "RN665544", imageUrl: "path/to/image6.jpg" },
    { id: 7, ownerName: "James Martinez", propertyAddress: "777 Cedar St", propertyDetails: "3 acres of residential land", surveyNumber: "SN778899", registrationNumber: "RN998877", imageUrl: "path/to/image7.jpg" },
    { id: 8, ownerName: "Patricia Anderson", propertyAddress: "999 Willow St", propertyDetails: "2 acres of commercial land", surveyNumber: "SN990011", registrationNumber: "RN110099", imageUrl: "path/to/image8.jpg" },
    { id: 9, ownerName: "Robert Taylor", propertyAddress: "111 Spruce St", propertyDetails: "1 acre of farmland", surveyNumber: "SN223344", registrationNumber: "RN443322", imageUrl: "path/to/image9.jpg" }
];

class SurveyDepartmentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            filteredProperties: properties
        };
    }

    handleSearch = (event) => {
        const searchQuery = event.target.value;
        const filteredProperties = properties.filter(property =>
            property.surveyNumber.toLowerCase().includes(searchQuery.toLowerCase())
        );
        this.setState({ searchQuery, filteredProperties });
    }

    render() {
        return (
            <div>
                <SurveyTitle />
                <SearchBar searchQuery={this.state.searchQuery} handleSearch={this.handleSearch} />
                <PropertiesList properties={this.state.filteredProperties} />
            </div>
        );
    }
}

function SurveyTitle() {
    return (
        <h1 id="survey-title" className="survey-title">Survey Department</h1>
    );
}

function SearchBar({ searchQuery, handleSearch }) {
    return (
        <div id="search-bar" className="search-bar">
            <input
                type="text"
                placeholder="Search by Survey Number"
                value={searchQuery}
                onChange={handleSearch}
            />
        </div>
    );
}

function PropertiesList({ properties }) {
    return (
        <div id="properties-list" className="properties-list">
            {properties.map(property => (
                <PropertyItem key={property.id} property={property} />
            ))}
        </div>
    );
}

function PropertyItem({ property }) {
    return (
        <div id={`property-item-${property.id}`} className="property-item">
            <img id={`property-image-${property.id}`} src={property.imageUrl} alt={`${property.ownerName}'s property`} className="property-image" />
            <h2 id={`owner-name-${property.id}`}>{property.ownerName}</h2>
            <p id={`property-address-${property.id}`}><strong>Address:</strong> {property.propertyAddress}</p>
            <p id={`property-details-${property.id}`}><strong>Details:</strong> {property.propertyDetails}</p>
            <p id={`survey-number-${property.id}`}><strong>Survey Number:</strong> {property.surveyNumber}</p>
            <p id={`registration-number-${property.id}`}><strong>Registration Number:</strong> {property.registrationNumber}</p>
            <div className="approval-buttons">
                <button id={`approve-button-${property.id}`}>Approve</button>
                <button id={`disapprove-button-${property.id}`}>Disapprove</button>
            </div>
        </div>
    );
}

ReactDOM.render(<SurveyDepartmentPage />, document.getElementById('survey-title'));

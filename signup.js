const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;
        const phoneNumber = document.getElementById('phonenumber').value;
        const email = document.getElementById('email').value;
        const gender = document.getElementById('gender').value;
        const dob = document.getElementById('dob').value;
        const password = document.getElementById('password').value;
        const repeatPassword = document.getElementById('repeatpassword').value;

        // Check if all fields are filled
        if (!firstName || !lastName || !phoneNumber || !email || !gender || !dob || !password || !repeatPassword) {
            alert('All fields are mandatory.');
            return;
        }

        // Check if the phone number is exactly 10 digits
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneNumber)) {
            alert('Phone number must be exactly 10 digits.');
            return;
        }

        // Check if password and repeat password match
        if (password !== repeatPassword) {
            alert('Passwords do not match.');
            return;
        }

        // If all validations pass, proceed with form submission
        alert('Form submitted successfully!');
        // Redirect to the next page
        window.location.href = 'home.html';
    };

    return (
        <div className="sign-up-container">
            <h2 className="signup-text">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" id="firstname" placeholder="First Name" className="firstname-input" />
                <input type="text" id="lastname" placeholder="Last Name" className="lastname-input" />
                <input type="text" id="phonenumber" placeholder="Phone Number" className="phone-input" />
                <input type="email" id="email" placeholder="Email" className="email-input" />                                   
                <input type="text" id="gender" placeholder="Gender" className="gender-input" />
                <input type="date" id="dob" className="dateofbirth-input" placeholder="Select your date of birth" />
                <input type="text" id="uniqueidentification" placeholder="Unique Identification Number" className="ua-input" />
                <input type="password" id="password" placeholder="Password" className="password-input" />
                <input type="password" id="repeatpassword" placeholder="Repeat Password" className="repeatpassword-input" />
                <button type="submit" className="button" id="signup">Sign Up</button>
            </form>
            <p className="already-account">If you already have an account?</p>
            <div className="sign-link"><a href="login.html">Sign In</a></div>
        </div>
    );
};

ReactDOM.render(<SignUp />, document.getElementById('root'));

document.getElementById('Logo').addEventListener('click', function() {
    window.location.href = 'homepage.html';
});

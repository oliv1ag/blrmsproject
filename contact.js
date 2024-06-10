import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>We would love to respond to your queries and help you succeed.<br />Feel free to get in touch with us.</p>
      <div className="contact-box">
        <div className="contact-left">
          <h3>Send your request</h3>
          <form>
            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="Navya" />
              </div>
              <div className="input-group">
                <label>Phone</label>
                <input type="text" placeholder="+1 412 520 3231" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Navya@gmail.com" />
              </div>
              <div className="input-group">
                <label>Subject</label>
                <input type="text" placeholder="Problem" />
              </div>
            </div>
            <label>Message or Comment</label>
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
        <div className="contact-right">
          <h3>Reach us</h3>
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td>contactus@example.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+1 012 345 6789</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>#104, 1st floor, Manjeera Trinity Corporate Building,Hitech City Road, Kukatpally Housing Board Colony, HITEC City, Hyderabad, Telangana, India - 500072</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

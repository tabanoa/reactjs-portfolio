import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
        <form action="" onSubmit="">
            <div className="formWord">
                <h2>Say Hello!</h2>
                <span>FullName</span>
                <br/>
                <input
                    className="input100"
                    type="text"
                    name="fullName"
                    required
                />
                <br />
                <span>Phone Number</span>
                <br />
                <input
                    className="input100"
                    type="text"
                    name="phone"
                    required
                />
                 <span>Email</span>
                <br />
                <input
                    className="input100"
                    type="text"
                    name="email"
                    required
                />
                <div className="formWord">
                    <span>Message</span>
                    <br />
                    <textarea name="message" required></textarea>
                    <br />
                    <button>SUBMIT</button>

                    <div className="row"></div>
                </div>
            </div>
        </form>
    )
}

export default Contact;
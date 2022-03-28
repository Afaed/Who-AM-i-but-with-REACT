import React, { useState } from "react"
import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Incorrect email-please use a REAL email.')
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value})
                console.log('Handle Form', formState)
        }
    }
    return (
        <div className="box1">
            <section id="Contact-Me">
                <div className="contact-form">
                    <h2>Contact Me!</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                            <label htmlFor="email">Email address:</label>
                            <input type="text" name="email" defaultValue={email} onblur={handleChange} />
                            <label htmlFor="message">Message: </label>
                            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button data-testid="button" type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact;
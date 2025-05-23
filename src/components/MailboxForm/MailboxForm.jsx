// src/components/MailboxForm/MailboxForm.jsx

import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = (props) => {

    // set default state for form
    const [formData, setFormData] = useState({
        boxOwner: '',
        boxSize: '',
    });

    const navigate = useNavigate();

    // handleChange for form input changes
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    };

    // handleSubmit to manage form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
        // reset form to empty
        // navigate back to mailboxes page
        navigate('/mailboxes');
    };

    return (
        <>
            <h1>Add a Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <div>
                {/* name of boxOwner */}
                <label htmlFor="boxOwner">Box Owner: </label>
                <input 
                    type='text'
                    id='boxOwner'
                    name='boxOwner'
                    value={formData.name}
                    required
                    onChange={handleChange}
                />
                </div>

                {/* select menu for the boxSize (small, medium, or large) */}
                <div>
                    <label htmlFor="boxSize">Box Size: </label>
                    <select 
                        id='boxSize'
                        name='boxSize'
                        value={formData.boxSize}
                        required
                        onChange={handleChange}
                    >
                        <option value='choose'>---choose a size---</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </div>

                <div>
                    <button type='submit'>Add Mailbox</button>
                </div>
            </form>
        </>
    );
};

export default MailboxForm;
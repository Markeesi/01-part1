import React, { useState } from "react";
import Hello from "./Hello";

const defaultName = {
    name: "",
}

const Who = () => {
    const [userName, setUserName] = useState(defaultName);
    const [submitted, setSubmitted] = useState(false);
    const [prevName, setPrevName] = useState(defaultName);

    const resetUserName = () => {
        setUserName(defaultName);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserName({ ...userName, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPrevName({ ...userName });
        resetUserName();
        setSubmitted(true);
    }

    return (
        <div>
            <p>What is your name?</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    id="nameInput"
                    name="name"
                    onChange={handleInputChange}
                    value={userName.name}
                />
                <button type="submit">Submit</button>
            </form>
            {submitted && (
                <Hello name={prevName.name} />
            )}
        </div>
    );
}

export default Who;

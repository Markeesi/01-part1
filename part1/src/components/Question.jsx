import React, { useState } from 'react';
import Barista from './Barista';

const Question = () => {
    const [userPreference, setUserPreference] = useState('');

    const handleInputChange = (e) => {
        setUserPreference(e.target.value);
    }

    return (
        <div>
            <p>What is your favorite coffee drink?</p>
            <form>
                <input
                    type="text"
                    placeholder="Enter your preference"
                    value={userPreference}
                    onChange={handleInputChange}
                />
            </form>
            {userPreference && (
                <Barista preference={userPreference} />
            )}
        </div>
    )
}

export default Question;

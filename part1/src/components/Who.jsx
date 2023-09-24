import { useState } from "react";
import Hello from "./Hello";


const Who = () => {

    const [userName, setUserName] = useState('');

    const handleInputChange = (e) => {
        setUserName(e.target.value);
    }

    return (
        <div>
        <p>What is your name?</p>
        <form>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={handleInputChange}
                />
            </form>
            {userName && (
                <Hello name={userName} />
            )}

        </div>
    )

}

export default Who;
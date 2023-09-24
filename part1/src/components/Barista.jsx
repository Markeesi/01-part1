import React from "react";

const Barista = ({preference}) => {

    

    const reverse = (s) => {
        return s.split("").reverse().join("");
    }

    const barista =  {
        request: function() {
            return reverse(preference) +". The drink is coming right up! It was a '"+ preference +"' right?"
        }
    };

    const result = barista.request();

    return (
        <div>
        <h1>Barista Component</h1>
        <p>{result}</p>
        </div>
    );
    

};


export default Barista;
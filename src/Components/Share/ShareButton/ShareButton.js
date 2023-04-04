import React from 'react';
import callVector from "../../../Asset/Page1/callVector.png";
const ShareButton = ({children}) => {
    return (
        <div>
             <button className="btn btn-outline border-white text-white bg-none">
                <img src={callVector} alt="call vector" className="mr-3 "></img>{" "}
                {children}
              </button>
        </div>
    );
};

export default ShareButton;

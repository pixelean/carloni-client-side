import React from 'react';
import callVector from "../../../Asset/Page1/call.svg";
import "./ShareButton.css"
import { FaPhone} from "react-icons/fa";

const ShareButton = ({children}) => {
    return (
        <div>
             <button className="primaryBtn btn btn-outline border-white text-white bg-none">
                <FaPhone className='mr-3 rotate-90' />
                {children}
              </button>
        </div>
    );
};

export default ShareButton;

import React from 'react';
// heading area css 
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            {/* website heading  */}
            <h1>FREELANCERS INFORMATION</h1>
            {/* heading details  */}
            <small><strong>I will show here some freelancer details.Give there some freelancer name,id,income,email etc. <br /> It is helpfull for you knowing about freelacing sector.</strong></small>
            {/* total amount show  */}
            <p><strong>TOTAl FREELANCERS: 500</strong></p>
        </div>
    );
};

export default Header;
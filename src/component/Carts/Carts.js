import React from 'react';
// font awsome link 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// single freelancer cart css 
import "./Carts.css";
const Carts = (props) => {
    // takes single freelancer information 
    const {img,name,age,nationality,works,income,Email} = props.freelancer;
    // Font Awesome Icon 
    const element = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div className="single-freelancer">
            {/* single freelancer img link  */}
                <div className="cart-img">
                    <img src={img} alt="" />
                </div>
                {/* single freelancer information */}
                <div>
                    <h3>{name}</h3>
                    <ul className="freelancer-info">
                        <li>Age: <span> {age}</span></li>
                        <li>Nationality: <span> {nationality}</span></li>
                        <li>Work Sector: <span> {works}</span></li>
                        <li>Monthly Income: <span> {income}</span></li>
                        <li>Email: <span> {Email}</span></li>
                    </ul>
                    {/* button click handeler  */}
                    <button onClick={()=>props.totalIncomeFreelancer(props.freelancer)} className="freelancer-btn">{element} Income Calculation</button>
                 </div>
        </div>
    );
};

export default Carts;
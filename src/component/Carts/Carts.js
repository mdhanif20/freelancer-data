import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./Carts.css";
const Carts = (props) => {
    const {img,name,age,nationality,works,income,Email} = props.freelancer;
    const element = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div className="single-freelancer">
                <div className="cart-img">
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <ul className="freelancer-info">
                        <li>Age: <span> {age}</span></li>
                        <li>Nationality: <span> {nationality}</span></li>
                        <li>Work Sector: <span> {works}</span></li>
                        <li>Monthly Income: <span> {income}</span></li>
                        <li>Email: <span> {Email}</span></li>
                    </ul>
                    <button onClick={()=>props.totalIncomeFreelancer(props.freelancer)} className="freelancer-btn">{element} Income Calculation</button>
                 </div>
        </div>
    );
};

export default Carts;
import React, { useEffect, useState } from 'react';
// after adding person  
import Calculation from '../Calculation/Calculation';
// cart link 
import Carts from '../Carts/Carts';
// all freelancer area css 
import "./Freelancers.css";
// import allFreelancer from ;

const Freelancers = () => {
    const [freelancers,setFreelancers] = useState([]);
    // income total function state 
    const [calculation,setCalcultion] = useState([]);
    // takes cart info by calling api
    useEffect(()=>{
        fetch("./freelancers.JSON")
        .then(res => res.json())
        .then(data => setFreelancers(data))
    },[])
    // add to cart for get total income function 
    const totalIncomeFreelancer = (freelancer) =>{
        const newCalculation = [...calculation,freelancer];
        setCalcultion(newCalculation);
    }
    return (
        <div className="freelancer-Details">
            {/* all freelancer information sent  for adding cart */}
            <div className="takes-Frilancer">
                {
                    freelancers.map(freelancer => <Carts 
                        key ={freelancer.id}
                        freelancer={freelancer}
                        totalIncomeFreelancer = {totalIncomeFreelancer}
                        ></Carts>)
                }
            </div>
            {/* after adding calculation cart freelancer information sent  */}
            <div className="income-detaills">
            <Calculation calculation={calculation}></Calculation>
            </div>
        </div>
    );
};

export default Freelancers;
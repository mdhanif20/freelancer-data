import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Carts from '../Carts/Carts';
import "./Freelancers.css";
// import allFreelancer from ;

const Freelancers = () => {
    const [freelancers,setFreelancers] = useState([]);
    const [calculation,setCalcultion] = useState([]);
    useEffect(()=>{
        fetch("./freelancers.JSON")
        .then(res => res.json())
        .then(data => setFreelancers(data))
    },[])
    const totalIncomeFreelancer = (freelancer) =>{
        const newCalculation = [...calculation,freelancer];
        setCalcultion(newCalculation);
    }
    return (
        <div className="freelancer-Details">
            <div className="takes-Frilancer">
                {
                    freelancers.map(freelancer => <Carts 
                        key ={freelancer.id}
                        freelancer={freelancer}
                        totalIncomeFreelancer = {totalIncomeFreelancer}
                        ></Carts>)
                }
            </div>
            <div className="income-detaills">
            <Calculation calculation={calculation}></Calculation>
            </div>
        </div>
    );
};

export default Freelancers;
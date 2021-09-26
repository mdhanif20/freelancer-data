import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import "./Freelancers.css";
// import allFreelancer from ;

const Freelancers = () => {
    const [freelancers,setFreelancers] = useState([]);
    useEffect(()=>{
        fetch("./freelancers.JSON")
        .then(res => res.json())
        .then(data => setFreelancers(data))
    },[])
    return (
        <div className="freelancer-Details">
            <div className="takes-Frilancer">
                {
                    freelancers.map(freelancer => <Carts 
                        key ={freelancer.id}
                        freelancer={freelancer}
                        ></Carts>)
                }
            </div>
            <div>
                <h2>Cart result</h2>
            </div>
        </div>
    );
};

export default Freelancers;
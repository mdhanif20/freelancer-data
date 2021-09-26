import React from 'react';
import "./Calculation.css";

const Calculation = (props) => {
    const allPerson = props.calculation ;
    let total = 0;
    for(const singlePerson of allPerson){
        console.log(singlePerson.name);
        const{income} = singlePerson;
        total = total + income;
    }
    return (
        <div>
            <h2>Total Freelancer: {allPerson.length}</h2>
            <h2>Income Total: ${total}</h2>
            {
                allPerson.map(person=> <div key={person.id} className="freelancer-name">
                    <img src={person.img} alt="" />
                    <h3>{person.name}</h3>
                </div>)
            }
        </div>
    );
};

export default Calculation;
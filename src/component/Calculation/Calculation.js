import React from 'react';
// calculation area css 
import "./Calculation.css";

const Calculation = (props) => {
    // every person information take here 
    const allPerson = props.calculation ;
    // cart add freelacer total income calculation 
    let total = 0;
    for(const singlePerson of allPerson){
        const{income} = singlePerson;
        total = total + income;
    }
    return (
        <div>
            {/*get total cart add person  */}
            <h2>Total Freelancer: {allPerson.length}</h2>
            <h2>Income Total: ${total}</h2>
            {/* cart add person name and img  */}
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
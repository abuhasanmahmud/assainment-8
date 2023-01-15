import React from 'react';
import SelectedRich from '../SelectedRich/SelectedRich';


import './ChosenRich.css'
const ChosenRich = (props) => {
    
    const {chosenRich}=props;
    
    let total=0;
    for(const rich of chosenRich){
        total=total+rich.balance;
       
    }
    return (
        <div className="chosen-container">
           
            <h1>Chosen Rise Man</h1>
            <h3>Total selet : {props.chosenRich.length}</h3>
            <h2>Total Balane :{total}</h2>
            <SelectedRich></SelectedRich>
            {
                chosenRich.map(rich => <SelectedRich
                key={rich.position}
                 rich={rich.name}></SelectedRich>)
            }
        </div>
    );
};

export default ChosenRich;
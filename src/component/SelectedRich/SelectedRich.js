import React from 'react';
import './SelectedRich.css'
const SelectedRich = (props) => {
    const {rich}=props;
    
    return (
        <div className="seleted-rich">
            <h3> {rich} </h3>
        
        </div>
    );
};

export default SelectedRich;
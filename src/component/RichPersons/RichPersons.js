import React, { useEffect, useState } from 'react';
import { addDb, getDb } from '../../localStorage';
import ChosenRich from '../ChosenRich/ChosenRich';
import Rich from '../Rich/Rich';

import './RichPersons.css';
const RichPersons = () => {
    const [richpersons,setRichPersons]=useState([]);
    const [choseRich,setChoseRich]=useState([]);
    useEffect(()=>{
        fetch('./top20Rich.JSON')
        .then(res => res.json())
        .then(data => setRichPersons(data))
    },[]);
    useEffect(()=>{
        if(richpersons.length){
            const saveDb=getDb();
            const savOrder=[];
            for(const richid in saveDb){
                const rich=richpersons.find(rs => rs.position ===richid);
                savOrder.push(rich);
            }
            
        }
    },[richpersons])
    const handalAddToCart=(rich)=>{
        const newRich=[...choseRich,rich];
        setChoseRich(newRich);
        console.log(rich.position);
        addDb(rich.position)
    }
    return (
        <div className="richman-main-container">
            <div className="richMan-container">
            {
               richpersons.map(richs => <Rich 
               richs={richs}
               key={richs.position}
               handalAddToCart={handalAddToCart}
               ></Rich>) 
            }
            
            </div>

            <div className="total-richman-container">
                    <ChosenRich chosenRich={choseRich}></ChosenRich>
            </div>
        </div>
    );
};

export default RichPersons;
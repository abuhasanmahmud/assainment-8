

const db={};
const getDb=()=>{
    let saveDb=localStorage.getItem('cart');
//     if(saveDb){
//         saveDb=JSON.parse(saveDb);
//     }
//    else{
//        saveDb={};
//    }
    
    return saveDb ?saveDb=JSON.parse(saveDb):{} ;
}

const addDb=item=>{
  const db=getDb();
    if(item in db){
        db[item]+=1;
    }
    else{
        db[item]=1;
    }
  saveToDb(db);
}
const saveToDb=db=>{
    const dbJSON=JSON.stringify(db);
     localStorage.setItem('cart',dbJSON);
}
const removeFromDb=item=>{
    const db=getDb();
    delete db[item];
    saveToDb(db);
}

export{addDb,removeFromDb,getDb};














































/* const db={};
const addDb = item => {
    const db=getDb();
    
    if(item in db){
        db[item]+=1;
    }
    else{
        db[item]=1;
    }
}
const removeFromDb=item=>{
    const db=getDb();
    delete db[item];
}

const getDb=()=>{
    return db;
}

addDb('m');
addDb('a');
addDb('b')
removeFromDb('m')
console.log(db); */
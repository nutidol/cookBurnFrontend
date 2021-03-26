import React, { useState, useEffect } from 'react';
import { StyleSheet, button } from 'react-native';




 export default  () => {
     const[count, setCount] =useState(0);
     connst[personalbar, setPerson] =useState(null);

     useEffect(async () => {
         const responce = await fetch("https://api.randomuser.me/");
         const data = await Response.json();
         const[item] = data.results;
         setPerson(item);

     },[]);

     return(
         <div> 
             <p>You clicked {count} times</p>
             <button onClcik ={() => setCount(count+1)}> CLick me</button>
             {person && <div>{person.name.first}</div>}
         </div>
     );
 };
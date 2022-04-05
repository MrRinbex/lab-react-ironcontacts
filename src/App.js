// src/App.js
import { useState } from "react";
import "./App.css";
import allContacts  from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));

      function random() {
        const copiedContact = [...contacts];
        const randomIndex = Math.floor(Math.random() * allContacts.length)
        const randomContact = allContacts[randomIndex];   
        copiedContact.push(randomContact);
        console.log("index is ",randomIndex, "and length is ", allContacts.length)
        setContacts(copiedContact);
      }
      function sortName(){
        const copiedContact = [...contacts];
        copiedContact.sort((a,b)=>{
         return a.name.localeCompare(b.name) 
        })
        setContacts(copiedContact)
      }
      function sortPopularity(){
        const copiedContact = [...contacts];
        copiedContact.sort((a,b)=>{
          return b.popularity - a.popularity
        })
        setContacts(copiedContact) 
      }
      // remove dont work //
      
      function remove (id){
        const copiedContact = [...contacts];
        // const index = copiedContact.id
        const newArray = copiedContact.filter(function(ele){ 
          return ele.id !== id;
        })
        setContacts([...newArray]) 
      }
  return (
  <div className="App">
      <h1>IronContacts</h1>

        <button onClick={()=>random()}>Add random Contact</button>
        <button onClick={()=>sortName()}>Sort Contact By name</button>
        <button onClick={()=>sortPopularity()}>Sort Contact By popularity</button>
      <table>

      <thead>
        <tr>
          <th>picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>wonOscar</th>
          <th>wonEmmy</th>
          <th>Actions</th>
        </tr>
      </thead>
        <tbody>
        {contacts.map(({ id, pictureUrl, name, popularity,wonOscar, wonEmmy}, index) => (
          <tr key={id}>
          <td><img src ={pictureUrl}/></td>
          <td>{name}</td>
          <td>{popularity}</td>
          <td>{wonOscar? "🏆" : null}</td>
          <td>{wonEmmy? "🏆" : null}</td>
          <td><button onClick={()=>remove(id)}>Delete</button></td>
        </tr>
        ))}
        </tbody>
      </table>
    
  </div>
  );
}
export default App;
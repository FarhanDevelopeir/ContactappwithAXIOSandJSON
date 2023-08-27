import React, { createContext, useContext, useState } from "react";
import api from '../api/Usercontacts';
import { v4 as uuid } from 'uuid';


const mytext = createContext();

function ContextContactCrud({ children }) {
    const [list, setList] = useState([]);
    const [searchterm, setsearchterm]=useState('');
    const [searchResult, setsearchResult]=useState([]);


    //   const displaydata= async ()=>{
    //     const response= await api.get('/Usercontacts');
    //     if(response.data) setList(response.data);
    //   }

    const retrivedata = async ()=>{
        const displaydata= await api.get('/usercontacts');
        if(displaydata.data) setList(displaydata.data);
    }

    const addcontactdata = async (user) => {

        const request = {
            id: uuid(), ...user,
           };
           const response = await api.post('/usercontacts', request);
           setList([...list, response.data])

        // setList([...list, { id: uuid(), ...user }]); {/*, { id: uuid(), ...user }*/ }
        // console.log(list);
    }

    // Delete contact form list
    const Deletecontacts = async (id) => {
        await api.delete(`/usercontacts/${id}`);
        const removecontact = list.filter((user) => {
            return (user.id !== id);
        })
        setList(removecontact);

    }

    // Update user contacts
    const updateContact= async (contact)=>{
        const response = await api.put(`/usercontacts/${contact.id}`, contact);
        const {id}=response.data;
        setList(
          list.map((contact)=>{
            return contact.id===id ? {...response.data} : contact;
          })
        )
      }

    //   Search Contacts from List
    const getsearchterm=(searchterm)=>{
        setsearchterm(searchterm);
        if(searchterm !==''){
          const newContactlist=list.filter((contact)=>{
            return Object.values(contact)
            .join('')
            // .toLowerCase()
            .includes(searchterm.toLowerCase());
          });
          setsearchResult(newContactlist);
        }else{
          setsearchResult(list);
        }
    }



const value = {
    list,
    searchResult,
    searchterm,
    retrivedata,
    addcontactdata,
    Deletecontacts,
    updateContact,
    getsearchterm
}

return (
    <div>
        <mytext.Provider value={value}>
            {children}
        </mytext.Provider>
    </div>
)
}

export function useCrudComponent() {
    return useContext(mytext);
}

export default ContextContactCrud
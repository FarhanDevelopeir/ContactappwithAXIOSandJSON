import React, { useEffect, useState } from 'react';
import AddContact from './AddContact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactlist from './Contactlist';
import './App.css';
import ContextContactCrud from '../context/ContextContactCrud';
import Details from './Details';
import Editcontacts from './Editcontacts';
import Header from './Header';

function App() {
  const LOCAL_STORAGE_KEY = 'list'
  // const [prefill, setprefill] = useState(false);
  // const [list, setList] = useState([])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  // const hmm = React.createRef()



  // Prefill data on uodate form
  // const Updateuserid = (id) => {
  //   console.log(id)
  //   setprefill(true)


  //   list.filter(user => user.id === id).map(filter => {
  //     setName(filter.name);
  //     setEmail(filter.email);
  //     setId(filter.id);

  //   })


  // }

  // const updateUser = (e) => {
  //   e.preventDefault();


  //   const state = {
  //     name: name,
  //     email: email,
  //     id: id
  //   }

  //   const Update = list.findIndex(user => user.id === state.id)

  //   if (Update !== -1) {

  //     const updatecontactlist = [...list]

  //     updatecontactlist[Update] = state

  //     console.log(updatecontactlist)

  //     setList(updatecontactlist)

  //     localStorage.setItem('list', JSON.stringify(updatecontactlist));



  //   } else {
  //     alert('sorry this not works')

  //   }
  //   setprefill(false)

  // }


  // Show Form data on Screen

  // Add Form data on LocalStorage
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  // }, [list])


  // Delete User id from list 
  // const Deletelist = (id) => {
  //   console.log(id)
  //   const deleteuserid = list.filter(user => {
  //     return (user.id !== id)

  //   })
  //   setList(deleteuserid)
  // }




  return (
    <>
    <Header/>
    <div className='ui container' style={{  width: '40%' }}>
      <BrowserRouter>
     
        <ContextContactCrud>
          <Routes>
            <Route
              path='/'
              element={
                <Contactlist
                // list={list}
                // Deletelist={Deletelist}
                // Updateuserid={updateUser}
                />} />
            <Route path='/add' element={
              <AddContact
              // addcontactdata={addcontactdata}
              />} />
            <Route
              path='/userdetails/:id'
              element={<Details />}
            />
            <Route
              path='/editcontacts/:id'
              element={<Editcontacts />}
            />
          </Routes>

        </ContextContactCrud>
      </BrowserRouter>




    </div>
    </>
  )
}

export default App
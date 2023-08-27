import React, { Component, useEffect, useState } from 'react'
import './Addcontact.css'
import { useLocation, useNavigate } from 'react-router'
import { useCrudComponent } from '../context/ContextContactCrud';


function Editcontacts() {
  const location=useLocation();
  const {id, name, email}=location.state.data;
  const [newName, setnewName]=useState(name)
  const [newEmail, setnewEmail]=useState(email)
  const {updateContact} = useCrudComponent();
  const navigate=useNavigate();
  


  const textInput = React.createRef();

  useEffect(()=>{
    textInput.current.focus()

  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName === '' || newEmail === '') {
      alert('Please fill out all fields')
    } else {
      updateContact({id,name:newName, email:newEmail});
      navigate('/')
      
    }

  }
 


  
    return (
      <>
        
          <div className='ui main'   >
            <h1 style={{textAlign:'center'}}>Edit Contact</h1>
            <form className='ui form' onSubmit={handleSubmit} >
              <div className='ui field'>
                <label>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                 
                  ref={textInput}
                  placeholder='Enter Name'
                  value={newName}
                  onChange={(e) => setnewName(e.target.value) }
                //   onChange={this.handleChange}
                />
              </div>
              <div className='ui field'>
                <label>
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  placeholder='Enter Email'
                  value={newEmail}
                  onChange={(e) => setnewEmail(e.target.value)}
                />
              </div>
              <button className='ui button purple'>Update</button>
            </form>
          </div>
        
      </>
    )
  }

export default Editcontacts
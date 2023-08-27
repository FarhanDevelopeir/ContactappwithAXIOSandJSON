import React, { Component, useEffect, useState } from 'react'
import './Addcontact.css'
import { useNavigate } from 'react-router'
import { useCrudComponent } from '../context/ContextContactCrud'

function AddContact(props) {
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const {addcontactdata} = useCrudComponent();
  const navigate=useNavigate();


  const textInput = React.createRef();

  useEffect(()=>{
    textInput.current.focus()

  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('Please fill out evry fields')
    } else {
      addcontactdata({name, email});
      navigate('/')
      
    }

  }
 


  
    return (
      <>
        
          <div className='ui main'  >
            <h1 style={{textAlign:'center'}}>Add Contact</h1>
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
                  value={name}
                  onChange={(e) => setName(e.target.value) }
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input type='submit' className='ui button blue' />
            </form>
          </div>
        
      </>
    )
  }

export default AddContact
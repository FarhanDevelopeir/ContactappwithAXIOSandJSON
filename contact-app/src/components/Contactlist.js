
import React, { useEffect } from 'react'
import Contactcard from './Contactcard'
import { useCrudComponent } from '../context/ContextContactCrud'
import { Link } from 'react-router-dom'

const Contactlist = () => {
  const { list, retrivedata, getsearchterm, searchterm, searchResult } = useCrudComponent();

  // const { lists, displaydata } = useCrudComponent();

  // Delete user from the List
  // const Deletelist=(id)=>{
  //   props.Deletelist(id)
  // }

  //   // Prefill data on uodate form
  // const Updateuserid=(id)=>{
  //   props.Updateuserid(id)
  // }

  useEffect(() => {
    retrivedata()
  }, [])

  const Search = (e)=>{
    getsearchterm(e.target.value)
  }


  const arry = (searchterm.length < 1 ? list : searchResult).map((items) => {
    return (
      <Contactcard
        items={items}
      // Deletelist={Deletelist}
      // Updateuserid={Updateuserid}
      />
    )
  })
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Contactlist</h2>
        <div className='row' style={{border:'1px solid grey'}} >
         
        </div>
        <Link to={{ pathname: '/add' }}  >
          <button className='ui button blue' >Add Contacts</button>

        </Link>
      </div>
      <div className='ui icon input' style={{ width: '100%', marginBottom: '10px' }}>
        <input
          className='prompt'
          placeholder='Search Contacts'
          onChange={Search}
          value={searchterm}
          />
        <i className='ui icon search' ></i>


      </div>

      {arry.length > 0 ? arry: <h3 style={{ textAlign: 'center' }} className='description'> <i className='ui frown outline icon green'></i> No Contacts with this keyword</h3>}
    </div>
  )
}

export default Contactlist
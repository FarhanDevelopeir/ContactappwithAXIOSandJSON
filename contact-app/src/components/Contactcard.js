import React from 'react'
import './Contactcard.css'
import { Link } from 'react-router-dom';
import { useCrudComponent } from '../context/ContextContactCrud';

const Contactcard = (props) => {
  const { Deletecontacts } = useCrudComponent();
  const { name, email, id } = props.items;

  const Deletelist = (id) => {
    Deletecontacts(id);
  }

  return (

    <div className='list1'  >
      <div class="ui list" style={{ display: 'flex', justifyContent: 'space-between', }}>

        <div class="item" style={{display:'flex' , alignItems:'center' }} >
          <i className='user icon' style={{marginRight:'5px'}} ></i>
         <Link to={{pathname:`/userdetails/${id}`}}  state={{data:props.items}}>
          <div class="content" >
            <p class="header">{name}</p>
            <div class="description"><p>{email}</p></div>
          </div>
          </Link>

        </div>

        <div style={{ verticalAlign: 'middle' }}>
          <Link to={{ pathname: `/editcontacts/${id}` }} state={{ data: props.items }}>
            <button className=' ui button green  ' style={{ textAlign: 'center' }}>
              <i className='alterate edit icon '></i>
            </button>
          </Link>  {/*onClick={()=>Updateuserid(id)}*/}
          <button className=' ui button red' onClick={() => Deletelist(id)} > <i className=' trash alternate outline icon' ></i></button>
        </div>
      </div>
    </div>

  )
}

export default Contactcard
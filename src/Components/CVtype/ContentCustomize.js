import React from 'react'
import Header from '../CVedit/Header'
import HighorderComp from '../HighorderComp'
// import Result from '../CVdata/Result'

const ContentCustomize = (props) => {
  return (
    <div >
      <div className='shadow p-3  ' style={{
        width: '10%',
        // display: 'inline-block',
        backgroundColor: 'white',

        float: 'left',
        textAlign: 'center',
        borderRadius: '10px',
        height: '30%',
        // margin: '3%'
      }} >
        <button
          onClick={props.Backplace}
        style={{
          width: '95%',
          backgroundColor: "white",
          border: 'none'
        }} className='btn p-3  mb-1'>
          <div className=''>
            <i className='ui file alternate outline icon'></i>
          </div>
          <div>
            <p >Content</p>
          </div>
        </button>
        <button
        onClick={props.Changedata}
          style={{
            width: '95%',
            backgroundColor: "white",
            border: 'none'
          }} className='btn p-3  mb-1'>

          <div className=''>
            <i className='ui cogs icon'></i>
          </div>
          <div>
            <p >Customize</p>
          </div>
        </button>
      </div>
      <div>
        <Header change={props.change} />
      </div>

    </div>
  )
}

export default HighorderComp(ContentCustomize)
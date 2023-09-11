// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import Header from './CVedit/Header';
import ContentCustomize from './CVtype/ContentCustomize';
import Contextapp from './HighorderComp';



function App() {
  useEffect(()=>{
    alert('For Creating your CV CLick on Clear button ')
  },[App])
  return (
    
    <div className='Container' style={{
      width: '90%',
      margin: 'auto',
      marginTop: '3%',
      // display:'flex',
      // border: '2px solid black'
    }}>
      
      
      <ContentCustomize/>

   
     
      {/* <Header /> */}
      
      
    </div>
  );
}

export default App;

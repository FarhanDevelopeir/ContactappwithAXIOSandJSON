import React, { useState } from 'react'
// import Personaldetails from './Personaldetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import './Header.css'
import Result from '../CVdata/Usernamefield';
// import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import HighorderComp from '../HighorderComp';
import { SketchPicker } from 'react-color'
// import CVExample from '../CVdata/CVExample';


const Header = (props) => {
  // const [name, setname] = useState('')
  // const [email, setemail] = useState('');
  // const [contact, setcontact] = useState('');


  return (
    <div style={{
      // border:'2px solid black',
      width: '90%',
      display: 'flex',

      // float:'revert-layer'
      //  marginTop:'3%',
      marginLeft: '12%'
    }}>
      <div style={{
        width: '40%',
        // position:'fixed'
        // backgroundColor:'white',

      }}>

        <div className='shadow p-3 ' style={{
          // height: '20%',
          // marginTop: '3%',
          // margin: '0% 2%',
          position: 'fixed',
          zIndex: '1',
          borderRadius: '10px',
          width: '31.9%',
          backgroundColor: 'white',

          display: 'flex',
          justifyContent: 'space-around'
        }} >
          <button onClick={props.ClearCV}
            style={{
              width: '49%',
              color: 'red', backgroundColor: 'white',
              border: 'none',

            }} className='btn '><i className='ui trash icon red' ></i>Clear Resume</button>
          <button onClick={props.ExampleCV}
            style={{
              width: '49%',
              border: 'none',
              borderRadius: '5px'
            }}>Resume Example </button>

        </div>

        {/* Personel Details */}

        {props.change === false ? (<div><div
          className='shadow p-3 '
          style={{
            //  height: '20%',
            marginTop: '17%',
            marginBottom: '6%',
            backgroundColor: 'white',


            //  margin: '0% 2%',
            borderRadius: '10px',
            //  width: '27%',
            // display: 'flex',
            // justifyContent: 'space-around'
          }}>
          <div
          >
            <h3>Personal Details</h3>
            <form class="ui form" >
              <div class="field">
                <label> Name :</label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  value={props.name}
                  onChange={props.handlename}
                />
              </div>
              <div class="field">
                <label>Email : </label>
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  value={props.email}
                  onChange={(e) => props.setemail(e.target.value)}
                />
              </div>
              <div class="field">
                <label>Contact Number :</label>
                <input
                  type="text"
                  name="last-name"
                  placeholder="Contact Number"
                  value={props.contact}
                  onChange={(e) => props.setcontact(e.target.value)}
                />
              </div>
              <div class="field">
                <label>Address :</label>
                <input
                  type="text"
                  name="last-name"
                  placeholder="Contact Number"
                  value={props.address}
                  onChange={(e) => props.setaddress(e.target.value)}
                />
              </div>
              {/* <button class="ui button" type="submit">Clear</button> */}
            </form>
          </div>
        </div>




          <Accordion>
            <Accordion.Item eventKey="0" style={{

              marginBottom: '6%',
              border: 'none',
              borderRadius: '10px'
            }} className='shadow '>
              <Accordion.Header style={{
                borderRadius: '10px'

              }}><h3>Education +</h3></Accordion.Header>
              <Accordion.Body>
                <form class="ui form" onSubmit={props.handleEducation} >
                  <div class="field">
                    <label> School Name :</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={props.Sname}
                      onChange={props.Schoolname}
                    />
                  </div>
                  <div class="field">
                    <label>Degree : </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={props.Sdegree}
                      onChange={props.Schooldegree}
                    />
                  </div>
                  <div class="field">
                    <label>Location :</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter Number"
                      value={props.Slocation}
                      onChange={props.Schoollocation}
                    />
                  </div>
                  <button class="ui button" type="submit">Add Education</button>
                </form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={{
              borderRadius: '10px',
              border: 'none',
              marginBottom: '6%',

            }} className='shadow '>
              <Accordion.Header><h3>Experience +</h3></Accordion.Header>
              <Accordion.Body>
                <form class="ui form" onSubmit={props.handleExperience}>
                  <div class="field">
                    <label> Experience Name :</label>
                    <input
                      type="text"
                      name="first-name"
                      placeholder="First Name"
                      value={props.Ename}
                      onChange={props.Experiencename}
                    />
                  </div>
                  <div class="field">
                    <label>Center Name : </label>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Last Name"
                      value={props.Ecenter}
                      onChange={props.Experiencecenter}


                    />
                  </div>
                  <div class="field">
                    <label>Field :</label>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Contact Number"
                      value={props.Efield}
                      onChange={props.Experiencefield}
                    />
                  </div>
                  <button class="ui button" type="submit">Clear</button>
                </form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion></div>) :



          (<div><div
            className='shadow p-3'
            style={{
              //  height: '20%',
              marginTop: '17%',
              marginBottom: '6%',
              backgroundColor: 'white',


              //  margin: '0% 2%',
              borderRadius: '10px',
              //  width: '27%',
              // display: 'flex',
              // justifyContent: 'space-around'
            }}>
            <div
            >
              <h3>Layouts</h3>
              <div style={{
                display: 'flex'
              }}>
                <div className='rounded mt-4 mb-3' onClick={props.CVdesign} style={{
                  height: '60px',
                  width: '70px',
                  border: 'none',
                  cursor: 'pointer',
                  border: '1px solid black'
                  // backgroundColor:'crimson',
                }}>
                  <div
                    // className='rounded'
                    style={{
                      height: '25px',
                      // border:'none',
                      borderTopRightRadius: '5px',
                      borderTopLeftRadius: '5px',

                      width: '100%',
                      backgroundColor: props.color,




                    }}
                  ></div>
                  <div
                    // className='rounded'
                    style={{
                      height: '35px',
                      borderBottomRightRadius: '5px',
                      borderBottomLeftRadius: '5px',
                      // border:'none',
                      width: '100%',
                      backgroundColor: 'black',



                    }}
                  ></div>

                </div>



                <div className='rounded mt-4 mb-3 ml-4' onClick={props.CVdesignback} style={{
                  height: '60px',
                  width: '70px',
                  border: 'none',
                  cursor: 'pointer',
                  border: '1px solid black',
                  display: 'flex'
                }}>
                  <div
                    // className='rounded'
                    style={{
                      height: '100%',
                      // border:'none',
                      borderBottomLeftRadius: '5px',
                      borderTopLeftRadius: '5px',

                      width: '30px',
                      backgroundColor: props.color,




                    }}
                  ></div>
                  <div
                    // className='rounded'
                    style={{
                      height: '100%',
                      borderBottomRightRadius: '5px',
                      borderTopRightRadius: '5px',
                      // border:'none',
                      width: '40px',
                      backgroundColor: 'black',



                    }}
                  ></div>

                </div>




              </div>




            </div>
          </div>



            <div
              className='shadow p-3'
              style={{
                //  height: '20%',
                marginTop: '6%',
                marginBottom: '6%',
                backgroundColor: 'white',


                //  margin: '0% 2%',
                borderRadius: '10px',
                //  width: '27%',
                // display: 'flex',
                // justifyContent: 'space-around'
              }}>
              <div
              >
                <h3>Colors</h3>
                <div style={{
                  display: 'flex'
                }}>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center'
                  }} >
                    <h5>Accent Colors</h5>
                    <button className='shadow' onClick={props.openCP} style={{
                      height: '30px',
                      width: '30px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: props.color,
                      marginLeft: '15px'

                    }}></button>
                    {props.displaycolorpicker === false ? '' :
                      <div style={{
                        position: 'fixed',
                        top: '50%',
                        left: '26.5%'
                      }}>
                        <div onClick={props.closeCP} style={{ position: 'fixed', top: '0', right: '0', bottom: '0', left: '0' }}></div>
                        <SketchPicker color={props.color} onChange={props.ColorChange} />

                      </div>
                    }
                  </div>









                </div>




              </div>
            </div>



          </div>)

        }



      </div>
      <div className='shadow ml-4' style={{
        width: '60%',


        // border:'2px solid red'
      }}>

<Result
            name={props.name}
            email={props.email}
            contact={props.contact}
            address={props.address}
            cvdesign={props.cvdesign}
            color={props.color}
            Sname={props.Sname}
            Sdegree={props.Sdegree}
            Slocation={props.Slocation}
            education={props.education}
            experience={props.experience}
            Ename={props.Ename}
            Ecenter={props.Ecenter}
            Efield={props.Efield}



          />
        {/* {props.clearCV === false ?
          <CVExample
            color={props.color}
          /> :
          <Result
            name={props.name}
            email={props.email}
            contact={props.contact}
            address={props.address}
            cvdesign={props.cvdesign}
            color={props.color}
            Sname={props.Sname}
            Sdegree={props.Sdegree}
            Slocation={props.Slocation}
            education={props.education}
            experience={props.experience}
            Ename={props.Ename}
            Ecenter={props.Ecenter}
            Efield={props.Efield}



          />
        } */}

      </div>



    </div>
  )
}
export default HighorderComp(Header);
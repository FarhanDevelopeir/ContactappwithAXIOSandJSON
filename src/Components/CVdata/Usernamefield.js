import React, { useState } from 'react'
import UserExpEdu from './UserExpEdu'
import HighorderComp from '../HighorderComp'

const Result = (props) => {

    // console.log(props.Sname)

    return (
        <div>
            {props.cvdesign === false ? <div style={{
                display: 'flex',
                // border:'2px solid red',


            }}>
                <div style={{
                    backgroundColor: props.color,
                    width: '40%',
                    height: '650px',


                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px',

                    // color:'white',
                    paddingTop: '10%'


                }}>
                    <h2 style={{
                        textAlign: 'center'
                    }}>{props.name}</h2>
                    <div style={{
                        marginLeft: '20%'
                    }} >
                        <div >
                            <i className='mt-4  ui mail icon d-flex'><h5 className='ml-2'>{props.email}</h5></i>
                        </div>
                        <div>
                            <i className='mt-4 ui map marker alternate icon d-flex'><h5 className='ml-2'>{props.address}</h5></i>
                        </div>
                        <div>
                            <i className='mt-4 ui phone icon d-flex'><h5 className='ml-2'>{props.contact}</h5></i>
                        </div>
                    </div>
                </div>
                <div style={{
                    // display:'inline'
                    width: '60%',
                    height:'650px',



                }}>
                    <UserExpEdu
                        Sname={props.Sname}
                        Sdegree={props.Sdegree}
                        Slocation={props.Slocation}
                        education={props.education}
                        experience={props.experience}
                        Ename={props.Ename}
                        Ecenter={props.Ecenter}
                        Efield={props.Efield}
                    />
                </div>



            </div> :




                <div style={{
                    // display: 'flex',
                    // border:'2px solid red',


                }}>
                    <div style={{
                        backgroundColor: props.color,
                        width: '100%',
                        // height: '650px',


                        borderTopLeftRadius: '5px',
                        borderBottomLeftRadius: '5px',

                        // color:'white',
                        paddingTop: '10%'


                    }}>
                        <h2 style={{
                            textAlign: 'center'
                        }}>{props.name}</h2>
                        <div style={{
                            // marginLeft: '20%',
                            display: 'flex',
                            width: '100%',
                    // height:'650px',

                            justifyContent: 'space-around',
                            paddingBottom: '20px',
                            // border:'2px solid red'

                        }} >
                            <div >
                                {/* <h5>{<i className='ui mail icon'></i>}</h5> */}
                                <h5><i className='  ui mail icon d-flex'><h5 className='ml-2'>{props.email}</h5></i></h5>
                            </div>
                            <div>
                                <h5><i className=' ui map marker alternate icon d-flex'><h5 className='ml-2'>{props.address}</h5></i></h5>
                            </div>
                            <div>
                                <i className=' ui phone icon d-flex'><h5 className='ml-2'>{props.contact}</h5></i>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        // display:'inline'
                        width: '100%',
                    height:'650px',


                    }}>
                        <UserExpEdu
                            Sname={props.Sname}
                            Sdegree={props.Sdegree}
                            Slocation={props.Slocation}
                            education={props.education}
                            experience={props.experience}
                            Ename={props.Ename}
                            Ecenter={props.Ecenter}
                            Efield={props.Efield}

                        />
                    </div>



                </div>

            }
        </div>
    )
}

export default HighorderComp(Result)
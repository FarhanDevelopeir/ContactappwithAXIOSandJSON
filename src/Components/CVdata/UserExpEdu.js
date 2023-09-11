import React from 'react'
import HighorderComp from '../HighorderComp'

const UserExpEdu = (props) => {

    // console.log(props.Sname)

    const edarry = props.education.map((item) => {
        return (
            <div item={item} class="ui two column very relaxed grid" style={{ border: 'none' }}>
                <div class="column" style={{ border: 'none', width: '40%' }}>
                    <h4>{props.Sname}</h4>
                    {/* <p>kshbv</p>
                <p>snd v</p>
                <p>skhbv</p> */}
                </div>
                <div class="column" style={{ border: 'none' }}>
                    <p>{props.Sdegree}</p>
                    <p>{props.Slocation}</p>

                </div>
            </div>
        )
    })


    const exarry = props.experience.map((item) => {
        return (
            <div item={item} class="ui two column very relaxed grid" style={{ border: 'none' }}>
                <div class="column" style={{ border: 'none', width: '40%' }}>
                    <p>{props.Ecenter}</p>

                </div>
                <div class="column" style={{ border: 'none' }}>

                    <p>{props.Ename}</p>
                    <p>{props.Efield}</p>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div style={{
                padding: '7%',
                backgroundColor: 'black',
                height:'650px',

                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px'

                // marginBottom:'10px'
                // width: '60%'

            }}>
                <div style={{
                    width: '100%'
                }}>
                    <h4 style={{
                        textAlign: 'center',
                        backgroundColor: 'lightgrey',
                        borderRadius: '3px',
                        padding: "2px 0px"
                    }}>Education</h4>
                    <div class="ui segment" style={{
                        border: 'none',
                        backgroundColor: 'black',
                        color: 'white'


                    }}>
                        {edarry}

                        {/* <div class="ui vertical divider">
                            and
                        </div> */}
                    </div>

                </div>
                <div style={{
                    width: '100%'
                }}>
                    <h4 style={{
                        textAlign: 'center',
                        backgroundColor: 'lightgrey',
                        borderRadius: '3px',
                        padding: "2px 0px"
                    }}>Experience</h4>
                    <div class="ui segment" style={{
                        border: 'none',
                        backgroundColor: 'black',
                        color: 'white'

                    }}>

                        {exarry}

                        {/* <div class="ui vertical divider">
                            and
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HighorderComp(UserExpEdu)
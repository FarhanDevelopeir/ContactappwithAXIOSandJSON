import React, { useState } from 'react'

const HighorderComp = (Data) => {
    const Handle=(props)=>{
        const [name, setname]=useState('Muhammad Farhan');
        const [email, setemail]=useState('farhandev@gmail.com');
        const [contact, setcontact]=useState('03070582931');
        const [address, setaddress]=useState('Aliabad,Pakistan');
        const [change, setchange]=useState(false);
        const [cvdesign, setcvdesign]=useState(false);
        const [displaycolorpicker, setdisplaycolorpicker]=useState(false);
        const [color, setcolor]=useState('#F6BE00');
        const [education, seteducation]=useState([]);
        const [Sname, setSname]=useState('CTTI');
        const [Sdegree, setSdegree]=useState('DAE');
        const [Slocation, setSlocation]=useState('Islamabad, Pakistan');
        const [experience, setexperience]=useState([]);
        const [Ename, setEname]=useState('Web Development');
        const [Ecenter, setEcenter]=useState('PBTE');
        const [Efield, setEfield]=useState('Information Technology');
        const [clearCV, setclearCV]=useState(false)


        // const [name, setname]=useState('');

        const handlename=(e)=>{
            // console.log(e.target.value)
            setname(e.target.value)
        }

        // click customize button to display data
        const Changedata=()=>{
            console.log('this works')
            setchange(true);
        }

        const Backplace=()=>{
            setchange(false);
        }

        // change CVdesign  
        const CVdesign=()=>{
            console.log('waooo this works')
            setcvdesign(true);
        }

        const CVdesignback=()=>{
            setcvdesign(false);
        }

        // display colorpicker
        const openCP=()=>{
            setdisplaycolorpicker(true);
        }
        const closeCP=()=>{
            setdisplaycolorpicker(false);
        }

        //  change-color
        const ColorChange=(color)=>{
            setcolor(color.hex)
        }

        // Add-Education
        const addeduction=(contact)=>{
            seteducation([...education,contact])
           
        }
        const handleEducation=(e)=>{
            e.preventDefault()
            // console.log()
            addeduction({Sname,Sdegree,Slocation})
          
        }
        const Schooldegree=(e)=>{
            setSdegree(e.target.value)
        }
        const Schoollocation=(e)=>{
            setSlocation(e.target.value)
        }
        const Schoolname=(e)=>{
            setSname(e.target.value)
          
        }

        // Experience
        const addexperience=(items)=>{
            setexperience([...experience,items])
        }
        const handleExperience=(e)=>{
            e.preventDefault();
            addexperience({Ename,Ecenter,Efield})
        }
        const Experiencename=(e)=>{
            setEname(e.target.value)
        }
        const Experiencecenter=(e)=>{
            setEcenter(e.target.value)
        }
        const Experiencefield=(e)=>{
            setEfield(e.target.value)

        }

        // CVExample 
        const ExampleCV=()=>{
            // alert('thisworks')
            setclearCV(false)
            setname('Muhammad Farhan')
            setemail('farhandev@gmail.com')
            setaddress('Aliabad,Pakistan')
            setcontact('03070582931')
            setSname('CTTI')
            setSdegree('DAE')
            setSlocation('Islamabad, Pakistan')
            setEname('Web Development')
            setEcenter('PBTE')
            setEfield('Information Technology')
        }
        const ClearCV=()=>{
            setclearCV(true)
            setname('')
            setemail('')
            setaddress('')
            setcontact('')
            setSname('')
            setSdegree('')
            setSlocation('')
            setEname('')
            setEcenter('')
            setEfield('')
            
        }
    

        return (
            <Data
            name={name}
            // setname={setname}
            email={email}
            setemail={setemail}

            contact={contact}
            setcontact={setcontact}

            handlename={handlename}
            
            address={address}
            setaddress={setaddress}

            change={change}
            Changedata={Changedata}
            Backplace={Backplace}

            cvdesign={cvdesign}
            CVdesign={CVdesign}
            CVdesignback={CVdesignback}

            openCP={openCP}
            closeCP={closeCP}
            displaycolorpicker={displaycolorpicker}

            color={color}
            ColorChange={ColorChange}

            education={education}
            handleEducation={handleEducation}
            Sname={Sname}
            Schoolname={Schoolname}
            Sdegree={Sdegree}
            Schooldegree={Schooldegree}
            Slocation={Slocation}
            Schoollocation={Schoollocation}

            experience={experience}
            handleExperience={handleExperience}
            Ename={Ename}
            Experiencename={Experiencename}
            Ecenter={Ecenter}
            Experiencecenter={Experiencecenter}
            Efield={Efield}
            Experiencefield={Experiencefield}

            ExampleCV={ExampleCV}
            clearCV={clearCV}
            ClearCV={ClearCV}

            {...props}
            />
        )
    }
  return Handle
}

export default HighorderComp
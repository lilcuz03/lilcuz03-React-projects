import heroImage from '../images/hero-image/hero-image2.jpg'
import myDetails from '../personalDetails/MeData';
import React from 'react';
const About = () => {
    const [mydata,setmydata] = React.useState(myDetails)
    return ( 
        <div className='row text-light' id='about-content'>
            <div className='col-4'>

            </div>

            <div className='col-4'>
            <div className='my-3'>
            <img src={mydata.img} alt='me'  id='me-image'/>
            </div>
            
            <h3>
                {mydata.name} {mydata.lastName}
            </h3>
            <p>
                Job : {mydata.job} 
                <br/>
                College:<small>{mydata.college}</small>  <small className='text-success'>2023-2024</small>
            </p>
            <p>
                <small>
                   dateOfBirth: {mydata.DOB} ||Country: {mydata.country}
                </small>
            </p>
            <p>
                Location: {mydata.location}
            </p>
        </div>

        <div className='col-4'>

            </div>
        </div>
    
     );
}
 
export default About;
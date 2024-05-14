import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import "./register.css";
import Button from '../Button/button';

function Register() {

  const [userData, setUserData] = useState({
    name:"",
    email:"",
    phone:"",
    devices:"",
    username:"",
    password:"",
    status:"",
  })

  const [error, setError] = useState(false);

  function isAlphanumeric(str) {
    return /[a-zA-Z]/.test(str) && /\d/.test(str);
  }



  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


  function handleClick(){
    if(userData.name && !isAlphanumeric(userData.name)){
      setError("Name should be Alphanumeric");
    }

    if(userData.email && !isValidEmail(userData.email)){
      setError("Please enter correct email")
    }

    else if(userData.phone && userData.phone.length!==10){
      setError("Phone number length should be 10");
    }

    else if(userData.username && !isAlphanumeric(userData.username)){
      setError("username should be Alphanumeric");
    }


    else if(userData.password && userData.password.length<=8){
      setError("Password length should be greater than 8");
    }


    

    else if(Object.values(userData).some(value=>value!=="")){
      console.log("Full");
      setError("")
    }
    
    else{
      setError("Please fill all details " );

    }
  }

  function handleChange(e){
      const updatedData = {...userData};
      updatedData[e.target.name] = e.target.value;
      setUserData(updatedData)
      console.log(userData);
  }


  return (
    <MDBContainer fluid>

        <h1>Register Page</h1>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 gap-2">
               
                <label htmlFor="">Name: </label>
                <input onChange={handleChange} type="text" name='name' />
              </div>

              <div className="d-flex  align-items-center mb-4 gap-2">
                <label htmlFor="">Email: </label>
                <input onChange={handleChange} type="email" name='email' />
              </div>


              <div className="d-flex flex-row align-items-center mb-4 gap-2">
                <label htmlFor="">Phone Number: </label>
                <input onChange={handleChange} type="number" name='phone'/>
              </div>

             

              <div className="d-flex flex-row align-items-center mb-4 gap-2 gap-3 ml-3 w-25">Devices:
                <label htmlFor="Android">Android</label>
                <input onChange={handleChange} type="checkbox" name='devices'/>
                <label htmlFor="Android">Web</label>

                <input onChange={handleChange} type="checkbox" />
                <label htmlFor="Android">iOS</label>

                <input onChange={handleChange} type="checkbox" />
              </div>

              
              <div className="d-flex flex-row align-items-center mb-4 gap-2">
                <label htmlFor="">Username: </label>
                <input onChange={handleChange} type="text" name='username' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 gap-2">
                  <label htmlFor="">Password: </label>
                  <input onChange={handleChange} type="password" name='password' />
              </div>

              <div className="d-flex gap-5 mb-4 gap-2">Status:
                <select>
                  <option>
                    Active
                  </option>

                  <option>
                    Deactive
                  </option>
                </select>

              </div>

            

              <Button onSubmit={handleClick} text="Register"/>

              {error && <p>{error}</p>}

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;
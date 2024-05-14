import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Button from '../Button/button';
import { useNavigate } from "react-router-dom";



function Card() {


    const [userData, setUserData] = useState({
        email:"",
        password:""
    });

    const navigate = useNavigate();

    

    

    function handleEmail(e){
        setUserData({...userData, email:e.target.value});
        console.log(userData);
    }


    function handlePassword(e){
        setUserData({...userData, password:e.target.value});
    }

    function handleSubmit(){
        if(userData.email && userData.password){
            navigate("/home")
        }
        else{
            alert("either email or password wrong")
        }
    }


    function handleRegister(){
        navigate("/register")
    }

    
    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">

        <MDBRow>

            <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
            </MDBCol>

            <MDBCol col='4' md='6'>

                
              <div className="d-flex  align-items-center mb-4 gap-2">
                <label htmlFor="">Email: </label>
                <input onChange={handleEmail} type="email" name='email' />
              </div>

              <div className="d-flex  align-items-center mb-4 gap-2">
                <label htmlFor="">Password: </label>
                <input onChange={handlePassword} type="email" name='email' />
              </div>

              

            {/* <MDBInput onChange={handleEmail} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput onChange={handlePassword} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/> */}

            <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
            </div>

            <div className='text-center text-md-start mt-4 pt-2'>
                <Button onSubmit={handleSubmit} text="Submit"/>
                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger" onClick={handleRegister}>Register</a></p>
            </div>

            </MDBCol>

        </MDBRow>

        
        </MDBContainer>
    );
}

export default Card;
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example(props) {

    const {flag} = props;

    const [show, setShow] = useState(true);

    const [tableFlag, setTableFlag] = useState(false);

    const [userData, setUserData] = useState({
        name:"",
        type:"",
        status:"",
    })


    function handleClick(){
        const checkAllProperties = Object.values(userData).every(value=>value!=="");
        if(checkAllProperties){
            console.log(userData);
            {userData && localStorage.setItem("data", JSON.stringify(userData))};
            setTableFlag(true);
            // setShow(false)
        }
        else{
            alert("Please fill all details")
        }
      
    }

    

    return (
        <>
        {/* <Button variant="primary" onClick={() => setShow(true)}>
            Click me to create user info
        </Button> */}

        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                Please fill the form 
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className='d-flex flex-column gap-3'>
                <div className='d-flex flex-column '>
                    <label htmlFor="">Name: </label>
                    <input onChange={(e)=>setUserData({...userData, name:e.target.value})} type="text"/>
                </div>

                <div className='d-flex flex-column  '>
                    <label htmlFor="">Type: </label>
                    <input onChange={(e)=>setUserData({...userData, type:e.target.value})} type="text" name="" id="" />
                </div>

                <div className='d-flex flex-column '>
                    <label htmlFor="">Status: </label>
                    <input onChange={(e)=>setUserData({...userData, status:e.target.value})} type="text" name="" id="" />
                </div>

                <div className='d-flex flex-column '>
                    <button onClick={handleClick} className="btn btn-primary w-100" type="submit">Submit</button>
                </div>
            </div>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default Example;
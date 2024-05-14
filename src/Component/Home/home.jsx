// import { useState } from "react";
import React, { useState } from 'react';

import Button from "../Button/button";
import Example from '../Model/model';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();

  function handleDeviceClick(){
    setFlag(!flag)
    navigate("/devicedata");
  }


  return (
    <div className="w-100">
      <div className="d-flex  w-100 p-2 justify-content-around ">
        <div></div>
        <div>Admin Dashboard</div>
        <div className="d-flex gap-4">
          <Button onSubmit={handleDeviceClick} text="Devices" />
          <Button text="Users" />
          <Button text="Logout" />

        </div>
      </div>



      {localStorage.getItem("data") && 
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
      
      }
    </div>
  );
}

export default Home;

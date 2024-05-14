import { useEffect, useState } from "react";
import Button from "../Button/button";
import Example from "../Model/model";

function DeviceData() {
  const [flag, setFlag] = useState(false);

  // const [show, setShow] = useState(false);

  function handleCreate() {
    setFlag(!flag);
  }

  const [checkboxData, setCheckboxData] = useState([]);


  function handleCheckbox(e){
    if(!checkboxData.includes(e.target.id)){
        setCheckboxData([...checkboxData, e.target.id]);
    }
  }

//   useEffect(()=>{
//     console.log(checkboxData)
//   },[checkboxData]);

  return (
    <div>
      <div className="d-flex p-2 justify-content-around bg-dark">
        <div></div>
        <div></div>
        <div className="d-flex gap-4">
          <Button onSubmit={handleCreate} text="Create" />
          <Button text="Delete all" />
        </div>
      </div>

      {/* {flag || !flag && <Example/>} */}

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <input type="checkbox" onChange={handleCheckbox} id="1"/>
            <td >1</td>
            <td>Mark</td>

            <td className="text-primary" style={{ cursor: "pointer" }}>
              Edit
            </td>
            <td className="text-danger" style={{ cursor: "pointer" }}>
              Delete
            </td>
          </tr>
          <tr>
            <input type="checkbox" onChange={handleCheckbox} id="2"/>
            <td >2</td>

            <td>Jacob</td>
            <td className="text-primary" style={{ cursor: "pointer" }}>
              Edit
            </td>
            <td className="text-danger" style={{ cursor: "pointer" }}>
              Delete
            </td>
          </tr>
          <tr>
            <input type="checkbox" onChange={handleCheckbox} id="3"/>
            <td >3</td>
            <td>Larry</td>
            <td className="text-primary" style={{ cursor: "pointer" }}>
              Edit
            </td>
            <td className="text-danger" style={{ cursor: "pointer" }}>
              Delete
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DeviceData;

import React, { useState } from "react";

function Servicelist() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState(" ");

  function handleInputChange(event) {
    setNewService(event.target.value);
  }

  function addService() {
    if (newService.trim() != "") {
    }
    setServices((s) => [...s, newService]);
    setNewService("");
  }

  function deleteService(index) {
    const updatedServices = services.filter((element, i) => i !== index);
    setServices(updatedServices);
  }

  // function moveServiceup(index) {
  //   if (index > 0) {
  //     const updatedServices = [...services];
  //     [updatedServices[index], updatedServices[index - 1]] = [
  //       updatedServices[index - 1],
  //       updatedServices[index],
  //     ];
  //     setTasks(updatedServices);
  //   }
  // }

  // function moveServicedown(index) {
  //   if (index < tasks.length - 1) {
  //     const updatedServices = [...tasks];
  //     [updatedServices[index], updatedServices[index + 1]] = [
  //       updatedServices[index + 1],
  //       updatedServices[index],
  //     ];
  //     setTasks(updatedTasks);
  //   }
  // }
  return (
    <>
      <div className="service-done">
        <h1>Healthcare Services</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Service"
            value={newService}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addService}>
            Add
          </button>
        </div>
      </div>
      <ol>
        {services.map((service, index) => (
          <li key={index}>
            <span className="text">{service}</span>
            <button
              className="delete-button"
              onClick={() => deleteService(index)}
            >
              Delete
            </button>
            {/* <button
              className="move-up-button"
              onClick={() => moveServiceup(index)}
            >
              Move up
            </button>
            <button
              className="move-down-button"
              onClick={() => moveServicedown(index)}
            >
              Move down
            </button> */}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Servicelist;

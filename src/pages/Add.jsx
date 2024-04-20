import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add() {
    const [carName, setCarname]= useState("");
    const [carBrand, setCarbrand]= useState("");
    const [carType, setCartype]= useState("");
    const [transmission, setTransmission]= useState("");
    const [fuelType, setFueltype]= useState("");
    const [seating, setSeating]= useState("");
    const [price, setPrice]= useState("");
    const [city, setCity] = useState("");
    
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
            setData(res.data);
            toast.success("Car added successfully!");
        })
        .catch((error) => {
            console.log("Error", error);
            toast.error("Failed to add car");
        });
    }, []);

    const handleSubmit = (event) => {
        // event.preventDefault();
        const id = parseInt(data[data.length - 1].id) + 1;
        axios.post("http://localhost:3000/users", { id: id, name: carName, brand: carBrand, type: carType, transmission: transmission, fuel: fuelType, seating: seating, price: price, city: city })
            .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  return (
      <div className="container">
          Add Details
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Car Name"
            onChange={(e) => setCarname(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Car Brand"
            onChange={(e) => setCarbrand(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Car Type"
            onChange={(e) => setCartype(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Transmission"
            onChange={(e) => setTransmission(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Fuel Type"
            onChange={(e) => setFueltype(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Enter Seating"
            onChange={(e) => setSeating(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Enter Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <button type="submit">Add car</button>
        </form>
      </div>
    </div>
  );
}

export default Add
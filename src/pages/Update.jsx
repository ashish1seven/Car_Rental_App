import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const { id } = useParams();
    const [values, setValues] = useState({
        id: id,
        name: '',
        brand: '',
        type: '',
        transmission: '',
        fuel: '',
        seating: '',
        price: '',
        city: '',
    })
    useEffect(() => {
      axios.get('http://localhost:3000/users/'+id)
        .then((res) => {
            setValues({ ...values, name: res.data.name, brand: res.data.brand, type: res.data.type, transmission: res.data.transmission, fuel: res.data.fuel, seating: res.data.seating, price: res.data.price, city: res.data.city });
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }, []);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/users/'+id, values )
            .then((res) => {
              navigate('/admin')
          })
          .catch((err) => console.log(err));
    }
  return (
    <div className="container">
      Update Details
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Car Name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Car Brand"
            value={values.brand}
            onChange={(e) => setValues({ ...values, brand: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Car Type"
            value={values.type}
            onChange={(e) => setValues({ ...values, type: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Transmission"
            value={values.transmission}
            onChange={(e) =>
              setValues({ ...values, transmission: e.target.value })
            }
          />
          <br />
          <input
            type="text"
            placeholder="Enter Fuel Type"
            value={values.fuel}
            onChange={(e) => setValues({ ...values, fuel: e.target.value })}
          />
          <br />
          <input
            type="number"
            placeholder="Enter Seating"
            value={values.seating}
            onChange={(e) => setValues({ ...values, seating: e.target.value })}
          />
          <br />
          <input
            type="number"
            placeholder="Enter Price"
            value={values.price}
            onChange={(e) => setValues({ ...values, price: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Enter City"
            value={values.city}
            onChange={(e) => setValues({ ...values, city: e.target.value })}
          />
          <br />
          <button type="submit">Update car</button>
        </form>
      </div>
    </div>
  );
}

export default Update
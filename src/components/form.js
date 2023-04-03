import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./form.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleInput = (e) => {
    e.preventDefault();

    const customer = {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      country,
    };

    fetch(" http://localhost:3000/api/v1/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(customer),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCity("");
    setCountry("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="form">
      <form onSubmit={handleInput}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <Link to="/product">
          <button
            type="submit"
            value="Submit"
            className="submit"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Form;

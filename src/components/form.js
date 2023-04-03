import React, { useState } from "react";
import "./form.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
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

    fetch("http://127.0.0.1:3000/api/v1/customers", {
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

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
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
        <button type="submit" value="Submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

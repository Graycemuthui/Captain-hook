// import React, { useEffect, useState } from "react";
import Form from "./form";
import "./customer.css";

const Customer = () => {
  return (
    <div className="App">
      <div className="heading">
        <h1>CAPTAIN ARTSY HOOK</h1>
        <p>Here to showcase art and give you a great experience</p>
        <img
          src="https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Captain Hook"
        />
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
};

export default Customer;

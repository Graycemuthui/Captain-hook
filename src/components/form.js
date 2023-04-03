import React from "react";
import "./form.css";

function Form() {
  return (
    <div>
      <form>
        <label>
          First Name:
          <input type="text" name="name" />
        </label>
        <label>
          Last Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="name" />
        </label>
        <label>
          Phone:
          <input type="text" name="name" />
        </label>
        <label>
          Address:
          <input type="text" name="name" />
        </label>
        <label>
          City:
          <input type="text" name="name" />
        </label>
        <label>
          Country:
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  );
}

export default Form;

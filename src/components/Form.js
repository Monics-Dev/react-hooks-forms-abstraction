import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // handleChange function should be inside the Form function
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    
    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // validate the first name
    if (firstName.length === 0) {
      setErrors(["First Name is required"]);
      return;
    }

    const formData = {
      firstName: firstName,
      lastName: lastName,
    
      admin: formData.admin,
    
  }
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setErrors([]);
  }
  const allSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleFirstNameChange}
          value={firstName}
        />
        <input
          type="text"
          onChange={handleLastNameChange}
          value={lastName}
        />
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
         type="text"
         name="lastName"
         onChange={handleChange}
         value={formData.lastName}
       />
       <input
         type="checkbox"
         name="admin"
         onChange={handleChange}
         checked={formData.admin}
       />
       <button type="submit">Submit</button>
     </form>
     {errors.length > 0
       ? errors.map((error, index) => (
           <p key={index} style={{ color: "red" }}>
             {error}
           </p>
         ))
       : null}
     <h3>Submissions</h3>
     {allSubmissions}
   </div>
 );
}

export default Form;

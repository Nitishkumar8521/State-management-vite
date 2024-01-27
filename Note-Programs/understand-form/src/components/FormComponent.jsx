import { useState } from "react";

const FormComponent = () => {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    country: "United States",
    isMarried: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    const formInputValue =
      type === "checkbox" ? checked : type === "number" ? Number(value) : value;

    const newState = {
      ...formState,
      [name]: formInputValue,
    };

    setFormState(newState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "30px",
          padding: "20px",
          border: "1px solid black",
        }}
      >
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={formState.age}
          onChange={handleInputChange}
          placeholder="Age"
        />
        <select
          name="country"
          value={formState.country}
          onChange={handleInputChange}
        >
          <option value="">Select a country</option>
          <option value="India">India</option>
          <option value="China">China</option>
        </select>
        <label>
          Married:
          <input
            type="checkbox"
            name="isMarried"
            checked={formState.isMarried}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormComponent;
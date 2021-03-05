import { useState } from "react";
import "./styles.css";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setContact((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  // function updateFname(event) {
  //   const firstName = event.target.value;
  //   setFullName(firstName);
  // }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.eMail}</p>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="Enter FirstName"
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Enter SecondName"
          onChange={handleChange}
          value={contact.lName}
        />

        <input
          email="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={contact.eMail}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
export default App;

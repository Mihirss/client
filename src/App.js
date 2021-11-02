import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [userList, setUserList] = useState([]);

  const displayInfo = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      email: email,
      country: country,
    }).then(() => {
      console.log("success");
    });
  };
  const getDisplayInfo = () => {
    Axios.get("http://localhost:3001/recive").then((response) => {
      console.log("success display", response);
      setUserList(response.data);
    });
  };
  return (
    <>
      <div className="App">
        <div className="dataInfo">
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <label>age:</label>
          <input
            type="number"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></input>
          <label>email:</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <label>country:</label>
          <input
            type="text"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          ></input>
          <button onClick={displayInfo}>Submit to server</button>
          <button onClick={getDisplayInfo}>get data from server</button>
        </div>
      </div>
      <div className="userData">
        <table>
          <tr>
            <td>SR No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
            <td>country</td>
          </tr>
          {userList.map((item, key) => (
            <tr>
              <td>{key + 1}</td>
              <td>{item.userName}</td>
              <td>{item.userEmail}</td>
              <td>{item.userAge}</td>
              <td>{item.userCountry}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default App;

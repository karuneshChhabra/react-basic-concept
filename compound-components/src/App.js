import "./App.css";
import Card from "./components/style";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const values = await axios.get("https://reqres.in/api/users?page=2");
      setUsers(values.data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {users.map((user, index) => (
        <Card key={index}>
          <Card.Image src={user.avatar} alt="image"></Card.Image>
          <Card.Body>
            <Card.Title>{user.first_name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Card.Button>Add To cart</Card.Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;

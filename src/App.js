
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [record, setRecord] = useState([]);
  const [api, SetApi] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setRecord(data.users))
      .catch((err) => console.log(err));

    axios.get(`https://dummyjson.com/posts`)
      .then((res) => {
        console.log(res.data.posts);
        SetApi(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);
  console.log(api)



  return (
    <div className="App">
      <center>
        <h1>Fetch</h1>
        <table border={1}>
          <thead>
            <tr>
              <td>id</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>email</td>
              <td>university</td>
              <td>phone</td>
              <td>gender</td>
            </tr>
          </thead>
          <tbody>
            {record.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.email}</td>
                <td>{val.university}</td>
                <td>{val.phone}</td>
                <td>{val.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1>Axios</h1>
        <table border={1}>
          <thead>
            <tr>
              <td>id</td>
              <td>title</td>
              <td>tags</td>
              <td>reactions</td>
            </tr>
          </thead>

          <tbody>
            {
              api.map((item) => {
                const { id, title, tags, reactions } = item;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{tags}</td>
                    <td>{reactions}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </center>
    </div >
  );
}

export default App;

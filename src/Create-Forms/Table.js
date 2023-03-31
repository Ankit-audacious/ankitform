import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Table } from "reactstrap";
// import Forms from "../Create-Forms/Forms"
import { Link } from "react-router-dom";
import "./List.css";
// "http://localhost:3005/posts"s
// import "./index.css";

const Tables = () => {
  // const navigate = useNavigate()

  const [apiData, setApiData] = useState([]);

  // const [id, setId] = useState(0);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [country, setCountry] = useState("");
  // const [gender, setGender] = useState("");
  // const [hobbies, setHobbies] = useState("");

  const getData = () => {
    axios
      .get("http://localhost:3005/posts")
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3005/posts/${id}`)
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const setDataToStorage = (e) => {
    // e.preventDefault();
    // axios.put(`http://localhost:3005/posts/${id}`,{
    //   name: name,
    //   email: email,
    //   phone: phone,
    //   country: country,
    //   gender: gender,
    //   hobbies: hobbies,
    // }).then(() => {
    //     navigate('/');
    // }).catch((err) => {
    //     console.log(err)
    // });
  };

  return (
    <>
    <h3 className="userLists">User - List</h3>
      <div>
        {/* <h3 className="userLists">User - List</h3> */}
        <div>
          <Link to="/Forms">
            <button className="addData">Add - Data</button>
          </Link>
          <Table bordered className="table-dark">
            <thead>
              <tr>
                <th>S.No</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Country</th>
                <th>Gender</th>
                <th>Hobbies</th>
                <th>Edit</th>
                <th>Delete</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {[...apiData]
                .sort((a, b) => b.id - a.id)
                .map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.country}</td>
                      <td>{item.gender}</td>
                      <td>{item.hobbies}</td>

                      <td>
                        <Link to="/edit">
                          <button
                            onClick={() =>
                              setDataToStorage(
                                item.id,
                                item.name,
                                item.email,
                                item.phone,
                                item.country,
                                item.gender,
                                item.hobbies
                              )
                            }
                          >
                            <i class="fa-regular fa-pen-to-square fa-lg"></i>
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            if (
                              window.confirm("Are You Sure To Delete Data ??")
                            ) {
                              handleDelete(item.id);
                            }
                          }}
                        >
                          <i class="fa-solid fa-trash fa-lg"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Tables;

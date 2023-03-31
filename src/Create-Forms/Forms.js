import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
// import { useNavigate, Link } from 'react-router-dom';
import { Form, FormGroup, Input, Label, ButtonGroup, Button } from "reactstrap";
// import Tables from "./Table";
// import './index.css'
import './Form.css'

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3005/posts", {
        name: name,
        email: email,
        phone: phone,
        country: country,
        gender: gender,
        hobbies: hobbies,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <div className="createData">
          <h1 >Create Data</h1>
    </div>

      <div className="form-container">
        {/* <Link to="/">
          <button className="readData">Read Data</button>
        </Link> */}

        {/* <div>
          <h1 className="createData">Create Data</h1>
        </div> */}
        <Form  onSubmit={handleSubmit}>
          <FormGroup>
            <Label>User Name</Label>
            <Input 
              placeholder="Enter your username"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              placeholder="Enter your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone</Label>

            <Input
              placeholder="Enter your Phone Number"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Input
              value={country}
              type="select"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option>India</option>
              <option>America</option>
              <option>London</option>
              <option>Russia</option>
              <option>China</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label>Choose an option:</Label>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Female
              </Label>
            </FormGroup>
          </FormGroup>
          <p>You selected: {gender}</p>

          <ButtonGroup>
            <Button
              outline
              onClick={() => setHobbies("cooking")}
              active={hobbies === "Cooking"}
            >
              Cooking
            </Button>
            <Button
              outline
              onClick={() => setHobbies("Reading")}
              active={hobbies === "Reading"}
            >
              Reading
            </Button>
          </ButtonGroup>
          <p>Selected: {hobbies}</p>

          <br />
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Forms;

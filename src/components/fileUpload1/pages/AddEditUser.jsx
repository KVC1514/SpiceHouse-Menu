import React, { useState, useEffect } from "react";
import { Button, Form, Grid, Loader } from "semantic-ui-react";
// import { storage } from "../../../firebase";
import { useParams, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/storage";

const initialState = {
  //Adding containt.
  Name: "",
  Info: "",
};

const AddEditUser = () => {
  const [data, setData] = useState(initialState);
  const { Name } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
  };

  return (
    <div>
      <h1>
        <Grid
          centered
          verticalAlign="middle"
          columns="3"
          style={{ height: "80vh" }}
        >
          <Grid.Row>
            <Grid.Column textAlign="center">
              <div>
                {isSubmit ? (
                  <Loader active inline="centered" size="huge" />
                ) : (
                  <>
                    <h2>Add Images</h2>
                    <Form onSubmit={handleSubmit}>
                      <Form.Input
                        label="Item name"
                        placeHolder="Enter Name"
                        name="Name"
                        onChange={handleChange}
                        value={Name}
                        autoFocus
                      />
                      <Form.Input
                        label="Upload Image"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </Form>
                  </>
                )}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </h1>
    </div>
  );
};

export default AddEditUser;

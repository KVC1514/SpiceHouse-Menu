import React, { useState, useEffect } from "react";
import { Button, Form, Grid, Loader } from "semantic-ui-react";
import { storage } from "../../../firebase";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  //Adding containt.
  Name: "",
  Info: "",
};

const AddEditUser = () => {
  const [data, setData] = useState(initialState);
  const { Name, Info } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = () => {};
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
                    <h2>Add User</h2>
                    <Form>
                      <Form.Input
                        label="Name"
                        placeHolder="Enter Name"
                        name="name"
                        onChange={handleChange}
                        value={Name}
                        autoFocus
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

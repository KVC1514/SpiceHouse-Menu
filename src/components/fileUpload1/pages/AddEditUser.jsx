import React, { useState, useEffect } from "react";
import { Button, Form, Grid, Loader } from "semantic-ui-react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useParams, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const initialState = {
  Name: "",
  Info: "",
};

const AddEditUser = () => {
  const [data, setData] = useState(initialState);
  const { Name } = data; // Changed 'name' to 'Name' for consistency
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //File Upload
  useEffect(() => {
    const uploadFile = () => {
      if (!file) return;
      const fileName = new Date().getTime() + "_" + file.name; // Unique file name
      const storageRef = ref(firebase.storage(), fileName); // Corrected storageRef
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is Pause");
              break;
            case "running":
              console.log("Upload is Running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    // Executing upload file

    file && uploadFile();
  }, [file]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value }); // Changed 'Name' to 'name' for consistency
  };

  const validate = () => {
    let errors = {};
    if (!Name) {
      errors.Name = "Item Name Required"; // Changed 'name' to 'Name' for consistency
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    // Additional logic for submitting form data if needed
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
                        error={errors.Name ? { content: errors.Name } : null}
                        placeholder="Enter Name"
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
                      <Button
                        primary
                        type="submit"
                        disabled={progress !== null && progress < 100}
                      >
                        Submit
                      </Button>
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

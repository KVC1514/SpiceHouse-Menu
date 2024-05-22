import { useState, useEffect, useRef } from "react";
import { Button, Form, Grid, Loader } from "semantic-ui-react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useParams, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../main";

const initialState = {
  Name: "",
  Info: "",
  Price: "",
  Category: "",
  Description: "",
};

const AddEditUser = () => {
  const [data, setData] = useState(initialState);
  const { Name, Info, Price, Category, Description } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const infoRef = useRef(null);

  useEffect(() => {
    if (id) {
      getSingleUser();
    }
  }, [id]);

  const getSingleUser = async () => {
    const docRef = doc(db, "users", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData({ ...snapshot.data() });
    }
  };

  useEffect(() => {
    const uploadFile = () => {
      if (!file) return;
      const fileName = new Date().getTime() + "_" + file.name;
      const storageRef = ref(firebase.storage(), fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
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

    if (file) {
      uploadFile();
    }
  }, [file]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    if (name === "Price") {
      processedValue = value.replace(/[^0-9$€£.,]/g, "");
    }
    setData((prevData) => ({
      ...prevData,
      [name]: processedValue,
    }));
    if (name === "Info" || name === "Description") {
      adjustTextareaHeight(e.target);
    }
  };

  const adjustTextareaHeight = (textarea) => {
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const validate = () => {
    let errors = {};
    if (!Name) {
      errors.Name = "Item Name Required";
    }
    if (!Info) {
      errors.Info = "Information Required";
    }
    if (!Price) {
      errors.Price = "Enter the price for the Item";
    }
    if (!Category) {
      errors.Category = "Enter the category the item falls under";
    }
    if (!Description) {
      errors.Description = "Enter a description for the food";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);

    setIsSubmit(true);
    try {
      if (!id) {
        await addDoc(collection(db, "users"), {
          ...data,
          timestamp: serverTimestamp(),
        });
      } else {
        await updateDoc(doc(db, "users", id), {
          ...data,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/menu");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
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
                    <h2>Add Items</h2>
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
                      <Form.TextArea
                        label="Info"
                        placeholder="Enter Information about the dish!!"
                        error={errors.Info ? { content: errors.Info } : null}
                        name="Info"
                        onChange={handleChange}
                        value={Info}
                        ref={infoRef}
                        style={{ overflow: "hidden", resize: "none" }}
                      />
                      <Form.Input
                        label="Price"
                        placeholder="Enter Price"
                        name="Price"
                        onChange={handleChange}
                        value={Price}
                        error={errors.Price ? { content: errors.Price } : null}
                      />
                      <Form.Input
                        label="Category"
                        placeholder="Enter Category"
                        name="Category"
                        onChange={handleChange}
                        value={Category}
                        error={
                          errors.Category ? { content: errors.Category } : null
                        }
                      />
                      <Form.TextArea
                        label="Description"
                        placeholder="Enter a description of the food"
                        error={
                          errors.Description
                            ? { content: errors.Description }
                            : null
                        }
                        name="Description"
                        onChange={handleChange}
                        value={Description}
                        style={{ overflow: "hidden", resize: "none" }}
                      />
                      <Form.Input
                        label="Upload Image"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                      <Button primary type="submit">
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

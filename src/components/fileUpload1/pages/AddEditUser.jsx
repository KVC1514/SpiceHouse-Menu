import { useState, useEffect, useRef } from "react";
import { Button, Form, Grid, Loader, Dropdown } from "semantic-ui-react";
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
// import Footer from "../../../../public/pages/Footer"; // Import your Footer component

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

  const uploadImage = async (file) => {
    try {
      const fileName = new Date().getTime() + "_" + file.name;
      const storageRef = ref(firebase.storage(), fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => resolve(downloadURL))
              .catch((error) => reject(error));
          }
        );
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

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
      let imageUrl = null;

      if (file) {
        imageUrl = await uploadImage(file);
      }

      const documentData = {
        ...data,
        img: imageUrl,
        timestamp: serverTimestamp(),
      };

      if (!id) {
        await addDoc(collection(db, "users"), documentData);
      } else {
        await updateDoc(doc(db, "users", id), documentData);
      }

      // Resetting the form to the initial state after sucessful submission
      setData(initialState);
      setFile(null); /*Clears the upload file */
      setErrors({}); /*Clears any errors*/
      setProgress(null); // resets the upload progress

      navigate("/add");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmit(false);
    }
  };

  const categoryOptions = [
    { key: "starter", text: "Starter", value: "Starter" },
    { key: "main_course", text: "Main Course", value: "Main Course" },
    { key: "Breads", text: "Breads", value: "Breads" },
    { key: "Sides", text: "Sides", value: "Sides" },
    { key: "dessert", text: "Dessert", value: "Dessert" },
  ];

  return (
    <div className="add-edit-user-page">
      <div className="content">
        <Grid
          centered
          verticalAlign="middle"
          columns="3"
          // style={{ height: "80vh" }}
        >
          <Grid.Row>
            <Grid.Column textAlign="center">
              <div>
                {isSubmit ? (
                  <Loader active inline="centered" size="huge" />
                ) : (
                  <>
                    <h2>Add Items</h2>
                    <Form onSubmit={handleSubmit} className="add-edit-form">
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
                      <Form.Field>
                        <label>Category</label>
                        <Dropdown
                          placeholder="Select Category"
                          fluid
                          selection
                          options={categoryOptions}
                          value={Category}
                          onChange={(e, { value }) =>
                            setData((prevData) => ({
                              ...prevData,
                              Category: value,
                            }))
                          }
                          error={
                            errors.Category
                              ? { content: errors.Category }
                              : null
                          }
                        />
                      </Form.Field>
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
                        label="Upload Image. Image size below 1MB"
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
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AddEditUser;
